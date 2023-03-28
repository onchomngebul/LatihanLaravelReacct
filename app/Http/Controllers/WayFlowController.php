<?php

namespace App\Http\Controllers;

use App\Models\WayFlow;
use Illuminate\Http\Request;

class WayFlowController extends Controller
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
    
     public function management()
     {
         return view('wayflow');
     }

    public function index()
    {
        return WayFlow::where('is_deleted', 'false')->get();
    }
 
    public function show($id)
    {
        return WayFlow::find($id);
    }

    public function store(Request $request)
    {
        return WayFlow::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $article = WayFlow::findOrFail($id);
        $article->update($request->all());

        return $article;
    }

    public function destroy(Request $request, $id)
    {
        $article = WayFlow::findOrFail($id);
        //$article->delete();
        $article->is_deleted = true;
        $article->update($request->all());
        return 204;
    }

}
