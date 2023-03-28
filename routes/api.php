<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\ViewPageController;
use App\Http\Controllers\WayFlowController;
use App\Http\Controllers\WorkflowController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('workflows', WorkflowController::class);
Route::resource('task', TaskController::class);
Route::resource('viewpage', ViewPageController::class);
Route::resource('wayflow', WayFlowController::class);
Route::get('/GenerateDiagramFlow/{id}', 'App\Http\Controllers\WorkflowController@GenerateDiagramFlow');