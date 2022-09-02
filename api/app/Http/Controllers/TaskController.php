<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Exception;

class TaskController extends Controller
{
    public function getTasks(Request $request)
    {
        try {
            $tasks = Task::with('status')->orderByDesc('created_at')->get();

            return response()->json(['response' => true, 'message' => '', 'result' => $tasks], 200);
        } catch (Exception $e) {
            return response()->json(['response' => false, 'message' => $e->getMessage(), 'result' => ''], 500);
        }
    }

    public function create(TaskRequest $request)
    {
        try {
            $task = Task::create($request->all());

            return response()->json(['response' => true, 'message' => 'Tarea registrada correctamente', 'result' => $task], 200);
        } catch (Exception $e) {
            return response()->json(['response' => false, 'message' => $e->getMessage(), 'result' => ''], 500);
        }
    }

    public function update(TaskRequest $request)
    {
        try {
            $task = Task::find($request->id);

            if (empty($task)) return response()->json(['response' => false, 'message' => 'Tarea no encontrada', 'result' => $task], 200);

            $task->update($request->all());

            return response()->json(['response' => true, 'message' => 'Tarea actualizada correctamente', 'result' => null], 200);
        } catch (Exception $e) {
            return response()->json(['response' => false, 'message' => $e->getMessage(), 'result' => ''], 500);
        }
    }

    public function delete(Request $request)
    {
        try {
            $task = Task::find($request->id);

            if (empty($task)) return response()->json(['response' => false, 'message' => 'Tarea no encontrada', 'result' => $task], 200);

            $task->delete();

            return response()->json(['response' => true, 'message' => 'Tarea eliminada correctamente', 'result' => null], 200);
        } catch (Exception $e) {
            return response()->json(['response' => false, 'message' => $e->getMessage(), 'result' => ''], 500);
        }
    }
}
