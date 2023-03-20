<?php

namespace App\BussinessFacade;

use Illuminate\Support\Facades\Http;
use App\Models\Task;
use App\Models\WayFlow;
use App\Models\Workflow;
use App\ViewModels\ConnectorModel;
use App\ViewModels\DFlowModel;
use App\ViewModels\PageModel;
use App\ViewModels\Position;
use App\ViewModels\ShapeModel;
use App\ViewModels\TaskType;

class WorkflowFacade {

    public function GenerateDiagramFlow($id)
    {
        $wf = Workflow::find($id);
        $listTask = Task::where('wf_id', $id);
        $listFlow = WayFlow::where('wf_id', $id);

        $result = new DFlowModel();
        $result->page = new PageModel();
        $result->page->wf_name = $wf->wf_name;
        $result->page->width = 15000;
        $result->page->height = 20000;
        $result->page->pageWidth = 15000;
        $result->page->pageHeight = 20000;
        $result->page->pageLandscape = false;
        $result->page->gridSize = 100;
        $result->page->snapToGrid = true;
        $result->connectors = array();
        $result->shapes = array();

        $tempShapes = array();
        $orderedTask = $listTask->orderBy('modified_date')->orderBy('created_date')->get();
        foreach ($orderedTask as $oneTask) {
            $newShape = new ShapeModel();
            $newShape->trueID = 0;
            $newShape->key = strval($oneTask->id);
            $newShape->task = $oneTask->task_type;
            $newShape->type = "process";
            $newShape->text = $oneTask->task_name;
            $newShape->width = 1800;
            $newShape->height = 800;
            $newShape->zIndex = 0;
            $newShape->style = "fill: #d9d9d9; stroke: #999999";

            if ($oneTask->Task_type == TaskType::Initiate) {
                $newShape->type = "terminator";
            }

            array_push($tempShapes, $newShape);
        }

        $orderedFlow = $listFlow->orderBy('modified_date')->orderBy('created_date')->get();
        foreach ($orderedFlow as $oneFlow) {
            $newConn = new ConnectorModel();
            $newConn->key = "c" . $oneFlow->id;
            $newConn->points = [new Position(), new Position()];
            $newConn->zIndex = 0;
            $newConn->texts = ["0.5" => $oneFlow->flow_name];
            $newConn->beginItemKey = strval($oneFlow->taskid_origin);
            $newConn->beginConnectionPointIndex = 2;
            $newConn->endItemKey = strval($oneFlow->taskid_aim);
            $newConn->endConnectionPointIndex = 0;

            array_push($result->connectors, $newConn);
        }

        $filteredArray = array_filter($tempShapes, function($item) use ($id) {
            return $item->task === TaskType::Initiate;
        });
        $initiateTask = reset($filteredArray);

        $this->FindTreesFromConnector($initiateTask, $result, 1000, 1000, $tempShapes);

        return $result;
    }

    public function FindTreesFromConnector($valTask, $result, $x, $y, $tempShapes)
    {
        $valTask->x = $x;
        $valTask->y = $y;
        array_push($result->shapes, $valTask);
        $travelPlan = array_filter($result->connectors, function($x) use ($valTask) { return $x->beginItemKey == $valTask->key; });

        $newX = $x;
        $newY = $y + 2000;

        if (count($travelPlan) > 1)
        {
            $valTask->type = "decision";
            foreach($travelPlan as $flow)
            {
                $flow->texts = array("0.7" => reset($flow->texts));
            }
        }

        foreach ($travelPlan as $flow)
        {
            $findDestination = current(array_filter($tempShapes, function($x) use ($flow) { return $x->key == $flow->endItemKey; }));
            if (count(array_filter($result->shapes, function($x) use ($findDestination) { return $x->key == $findDestination->key; })) > 0)
            {
                if ($x <= 1000)
                {
                    $flow->beginConnectionPointIndex = 3;
                    $flow->endConnectionPointIndex = 3;
                }
                else
                {
                    $flow->beginConnectionPointIndex = 1;
                    $flow->endConnectionPointIndex = 1;
                }
            }
            else
            {
                $this->FindTreesFromConnector($findDestination, $result, $newX, $newY, $tempShapes);
                $newX += 3000;
            }
        }

    }
}