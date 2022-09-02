<?php

use App\Http\Controllers\StatusController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'task'], function () {

    Route::get('', [TaskController::class, 'getTasks']);

    Route::post('', [TaskController::class, 'create']);

    Route::put('', [TaskController::class, 'update']);

    Route::delete('', [TaskController::class, 'delete']);
});

Route::group(['prefix' => 'status'], function () {

    Route::get('', [StatusController::class, 'getStatus']);
});