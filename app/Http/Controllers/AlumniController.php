<?php

namespace App\Http\Controllers;

use App\Alumni;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;


class AlumniController extends Controller
{
    function ubahProfile(Request $request)
    {
        $dataProfile = [
            'nama' =>  $request->nama,
            'tahun_lulus' =>  $request->tahunLulus,
            'alamat' =>  $request->alamat,
            'no_hp' =>  $request->noHp,
            'email' =>  $request->email,
            'tempat_kerja' =>  $request->tempatKerja,
            'tanggal_lahir' =>  Date('Y-m-d', strtotime($request->tanggalLahir)),
            'alamat_tempat_kerja' =>  $request->alamatTempatKerja,
        ];
        if ($request->password != "") {
            $dataProfile['password'] = bcrypt($request->password);
        }
        $update = DB::table('alumni')->where('id', $request->id)->update($dataProfile);
        if ($update) {
            return response()->json([
                'success' => true,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
            ], 200);
        }
        echo json_encode($dataProfile);
    }

    function getAlumni()
    {
        $allAlumni = DB::table('cek_alumni')->select('id')->count();
        $mengisi = DB::table('alumni')->select('kuesioner')->where('kuesioner', 1)->count();
        $belum = $allAlumni - $mengisi;
        $data = [
            'Alumni' => $allAlumni,
            'mengisi' => $mengisi,
            'belum' => $belum,
        ];
        if ($allAlumni || $mengisi || $belum) {
            return response()->json($data, 200);
        } else {
            return response()->json([
                'messages' => "Gagal Mengambil data"
            ], 200);
        }
    }
}
