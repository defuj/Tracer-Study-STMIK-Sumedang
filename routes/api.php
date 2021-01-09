<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/dummy', 'DummyController@getDummy');
Route::delete('/dummy/:id', 'DummyController@getDummy');

Route::post('/tambah-pertanyaan', 'KuesionerController@tambahPertanyaan');
Route::get('/get-pertanyaan', 'KuesionerController@getDataPertanyaan');
Route::delete('/delete-pertanyaan/{id?}', 'KuesionerController@deleteDataPertanyaan');

Route::get('/edit-pertanyaan/{id?}', 'KuesionerController@dataEditPertanyaan');
Route::post('/edit-pertanyaan', 'KuesionerController@editJudulPertanyaan');

Route::post('/detail-pertanyaan', 'KuesionerController@tambahDetailPertanyaan');
Route::delete('/detail-pertanyaan/{id?}/{id_pertanyaan?}', 'KuesionerController@deleteDetailPertanyaan');
Route::put('/detail-pertanyaan', 'KuesionerController@editDetailPertanyaan');

Route::put('/ubahProfile', 'AlumniController@ubahProfile');
Route::get('/getAlumni', 'AlumniController@getAlumni');

Route::get('/detail-pertanyaan/{id?}', 'KuesionerController@getDetailPertanyaan');

Route::get('/getJawaban', 'KuesionerController@getKuesioner');
