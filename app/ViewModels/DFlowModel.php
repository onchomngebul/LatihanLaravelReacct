<?php

namespace App\ViewModels;

use Illuminate\Support\Facades\Http;

class DFlowModel {
    public $wf_id;
    public $page;
    public $connectors;
    public $shapes;
}

class PageModel {
    public $wf_name;
    public $width;
    public $height;
    public $pageWidth;
    public $pageHeight;
    public $pageLandscape;
    public $gridSize;
    public $snapToGrid;
}

class ConnectorModel {
    public $key;
    public $points;
    public $zIndex;
    public $texts;
    public $beginItemKey;
    public $beginConnectionPointIndex;
    public $endItemKey;
    public $endConnectionPointIndex;
}

class Position {
    public $x;
    public $y;
    // constructor
    public function __construct() {
        $this->x = 0;
        $this->y = 0;
    }

}

class ShapeModel {
    public $key;
    public $trueID;
    public $task;
    public $type;
    public $text;
    public $style;
    public $x;
    public $y;
    public $width;
    public $height;
    public $zIndex;
}

class TaskType
{
    const Initiate = "initiate";
    const Report = "report";
    const Email = "email";
    const UserAct = "user_act";
    const Nihil = "nihil";
    const ChangeRecord = "change_record";
    const APICall = "apiCall";
    const Rejected = "rejected";
}

class StatusRecord
{
    const WaitingWorker = 0;
    const WaitingHuman = 1;
    const AfterHuman = 2;
    const Pending = 3;
    const Done = 4;
    const Failed = 5;
    const Stopped = 6;
    const Running = 7;
    const Draft = 8;
    const Rejected = 9;
}

class LogicRule
{
    const Equalss = "=";
    const NotEquals = "!=";
    const LessThan = "<";
    const LessThanOrEqual = "<=";
    const GreaterThan = ">";
    const GreaterThanOrEqual = ">=";
    const Contains = "contains";
    const NotContains = "notContains";
}