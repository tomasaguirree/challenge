<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Status;
use Illuminate\Http\Request;
use Exception;

class StatusController extends Controller
{
    public function getStatus(Request $request)
    {
        try {
            $status = Status::select(['id', 'name'])->get();

            return response()->json(['response' => true, 'message' => '', 'result' => $status], 200);
        } catch (Exception $e) {
            return response()->json(['response' => false, 'message' => $e->getMessage(), 'result' => ''], 500);
        }
    }
}
