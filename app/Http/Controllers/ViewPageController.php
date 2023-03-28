<?php

namespace App\Http\Controllers;

use App\Models\ViewPage;
use Illuminate\Http\Request;

class ViewPageController extends Controller
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
         return view('viewpage');
     }

    public function index()
    {
        return ViewPage::where('is_deleted', 'false')->get();
    }
 
    public function show($id)
    {
        return ViewPage::find($id);
    }

    public function store(Request $request)
    {
        return ViewPage::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $article = ViewPage::findOrFail($id);
        $article->update($request->all());

        return $article;
    }

    public function destroy(Request $request, $id)
    {
        $article = ViewPage::findOrFail($id);
        //$article->delete();
        $article->is_deleted = true;
        $article->update($request->all());
        return 204;
    }

}
