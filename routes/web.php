<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('workflow', 'App\Http\Controllers\WorkflowController@management')->name('wfmanage');
Route::get('task', 'App\Http\Controllers\TaskController@management')->name('taskmanage');
Route::get('viewpage', 'App\Http\Controllers\ViewPageController@management')->name('viewpagemanage');
Route::get('wayflow', 'App\Http\Controllers\WayFlowController@management')->name('wayflowmanage');