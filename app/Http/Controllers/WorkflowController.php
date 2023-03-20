<?php

namespace App\Http\Controllers;

use App\BussinessFacade\WorkflowFacade;
use App\Models\Workflow;
use Illuminate\Http\Request;

class WorkflowController extends Controller
{
        /**
     * @OA\Get(
     *      path="/projects",
     *      operationId="getProjectsList",
     *      tags={"Projects"},
     *      summary="Get list of projects",
     *      description="Returns list of projects",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/ProjectResource")
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *     )
     */
    
    public function index()
    {
        return Workflow::all();
    }
 
    public function show($id)
    {
        return Workflow::find($id);
    }

    public function store(Request $request)
    {
        return Workflow::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $article = Workflow::findOrFail($id);
        $article->update($request->all());

        return $article;
    }

    public function destroy(Request $request, $id)
    {
        $article = Workflow::findOrFail($id);
        $article->delete();

        return 204;
    }

    public function GenerateDiagramFlow($id)
    {
        $result = (new WorkflowFacade)->GenerateDiagramFlow($id);
        
        return response()->json($result);
    }


}
