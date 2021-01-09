<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class AuthAlumni extends Controller
{
    public function __construct()
    {
    }

    public function Login()
    {
        return view('alumni.LogAlumni');
    }

    function getDataAlumni()
    {
        $cek = DB::table('alumni')
            ->where('nim', '=', Session::get('nim'))
            ->first();
        Session::put('dataAlumni', $cek);

        return response([
            'success' => true,
            'data' => Session::get('dataAlumni'),
        ], 200);
    }

    function percobaan(Request $request)
    {
        $coba = DB::table('jawaban')->insert($request->data);
        DB::table('alumni')->where('id', $request->id)->update(['kuesioner' => 1]);
        if ($coba) {
            echo json_encode($request->data);
        } else {
            echo json_encode("gagal");
        }
    }
}
