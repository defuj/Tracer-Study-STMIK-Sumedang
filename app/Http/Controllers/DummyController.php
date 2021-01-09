<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dummy;
use Illuminate\Support\Facades\DB;

class DummyController extends Controller
{
    public function getDummy($id = false)
    {
        if ($id == false) {
            $data = DB::table('dummy')->get();

            return response()->json([
                'success' => true,
                'message' => 'Detail Post!',
                'data'    => $data
            ], 200);
        } else {
        }
    }

    public function deleteDummy(Request $request)
    {
        DB::table('users')->where('id', $request->id)->delete();
    }
}
