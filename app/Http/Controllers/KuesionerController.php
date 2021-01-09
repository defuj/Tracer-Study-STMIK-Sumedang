<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pertanyaan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;


class KuesionerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    function tambahPertanyaan(Request $request)
    {
        $data = [
            'pertanyaan' => $request->pertanyaan,
            'tipe_pertanyaan' => $request->tipe_pertanyaan,
            'required' => $request->required,
        ];
        Pertanyaan::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Detail Post!',
            'data'    => $data
        ], 200);
    }

    function getDataPertanyaan()
    {
        $users = Pertanyaan::select('id', 'pertanyaan', 'required', 'tipe_pertanyaan')->get();
        return response()->json([
            'success' => true,
            'message' => 'Detail Post!',
            'data'    => $users
        ], 200);
        // return view('welcome');

    }

    function deleteDataPertanyaan($data)
    {

        $hasil = Pertanyaan::findOrFail($data)->delete();
        DB::table('detail_pertanyaan')->where('id_pertanyaan', $data)->delete();
        DB::table('jawaban')->where('id_pertanyaan', $data)->delete();

        if ($hasil) {
            return response()->json([
                'success' => true,
                'title' => "Deleted",
                'icon' => "success",
                'message' => 'Data Berhasil Dihapus!',
                'data' => $data
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'title' => "Deleted",
                'icon' => "error",
                'message' => 'Data Tidak Berhasil Dihapus!',
                'data' => $data
            ], 500);
        }
    }

    function dataEditPertanyaan($id)
    {

        $judul = Pertanyaan::where('id', $id)->value('pertanyaan');
        $tipe_pertanyaan = Pertanyaan::where('id', $id)->value('tipe_pertanyaan');
        $detail = DB::table('detail_pertanyaan')->where('id_pertanyaan', $id)->get();
        return response()->json([
            'judul' => $judul,
            'detail' => $detail,
            'tipe_pertanyaan' => $tipe_pertanyaan,
        ], 200);
    }

    function editJudulPertanyaan(Request $request)
    {

        $update = Pertanyaan::where('id', $request->id)->update([
            'pertanyaan' =>  $request->judul,
        ]);;
        if ($update) {
            return response()->json([
                'success' => true,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
            ], 200);
        }
    }

    function tambahDetailPertanyaan(Request $request)
    {

        $data = [
            'id_pertanyaan' => $request->id_pertanyaan,
            'nama_opsi' => $request->nama_opsi,
        ];
        $input = DB::table('detail_pertanyaan')->insert($data);
        if ($input) {
            return response()->json([
                'success' => true, //cara ,manggil setelah return response 
                //json -> console.log(response.data.success) "SUCCESS" nama index
                'detail' => DB::table('detail_pertanyaan')->where('id_pertanyaan', $request->id_pertanyaan)->get()
                //cara manggil data 'detail' console.log(response.data.detail)
            ], 200);
        } else {
            return response()->json([
                'success' => false,
            ], 500);
        }
    }

    function deleteDetailPertanyaan($id, $id_pertanyaan)
    {
        $hasil = DB::table('detail_pertanyaan')->where('id', $id)->delete();

        if ($hasil) {
            return response()->json([
                'success' => true,
                'detail' => DB::table('detail_pertanyaan')->where('id_pertanyaan', $id_pertanyaan)->get()
            ], 200);
        } else {
            return response()->json([
                'success' => false,
            ], 500);
        }
    }

    function editDetailPertanyaan(Request $request)
    {
        $update = DB::table('detail_pertanyaan')->where('id', $request->id)->update([
            'nama_opsi' =>  $request->nama_opsi,
        ]);;
        if ($update) {
            return response()->json([
                'success' => true,
                'detail' => DB::table('detail_pertanyaan')->where('id_pertanyaan', $request->id_pertanyaan)->get()
            ], 200);
        } else {
            return response()->json([
                'success' => false,
            ], 200);
        }
    }

    function getDetailPertanyaan($id)
    {
        $detail = DB::table('detail_pertanyaan')->where('id_pertanyaan', $id)->get();
        return response()->json([
            'detail' =>  $detail,
        ], 200);
    }

    function getKuesioner()
    {
        $dataKuesioner = DB::table('pertanyaan')
            ->selectRaw(
                "detail_pertanyaan.id as detail_id, 
                pertanyaan.pertanyaan,
                nama_opsi,
                tipe_pertanyaan, pertanyaan.id as pertanyaan_id,
                count(jawaban.jawaban) AS jumlah_jawaban,
                sum(case when jawaban = 1 then 1 else 0 end) AS 'STS',
                sum(case when jawaban = 2 then 1 else 0 end) AS 'TS',
                sum(case when jawaban = 3 then 1 else 0 end) AS 'S',
                sum(case when jawaban = 4 then 1 else 0 end) AS 'SS'"
            )
            ->join('detail_pertanyaan', 'pertanyaan.id', '=', 'detail_pertanyaan.id_pertanyaan')
            ->leftJoin('jawaban', function ($join) {
                $join->on('jawaban.id_pertanyaan', '=', 'pertanyaan.id');
                $join->on('jawaban.id_detail', '=', 'detail_pertanyaan.id');
            })
            ->leftJoin('alumni', 'jawaban.id_alumni', '=', 'alumni.id')
            ->groupBy('detail_id')
            ->get();
        echo json_encode($dataKuesioner);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
