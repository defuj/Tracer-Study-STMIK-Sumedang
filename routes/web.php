<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/admin', 'Admin\LayoutController@index')->name('/');

Route::get('/login-admin', 'AuthController@getLogin')->name('adminLogin');
Route::post('/login', 'AuthController@postLogin')->name('adminLoginPost');
Route::get('/logout', 'AuthController@logout')->name('adminLogout');
Route::get('/register', 'AuthController@getRegister')->name('adminRegister');
Route::post('/register', 'AuthController@postRegister')->name('postRegister');

Route::get('/Dashboard', function () {
    return redirect(route('/'));
})->name('adminPage');
Route::get('/home', function () {
    return view('welcome');
})->name('home');
Route::get('/dataAdmin', 'Admin\DataAdmin@dataAdmin')->name('getDataAdmin');

Route::post('/tambah-pertanyaan', 'KuesionerController@tambahPertanyaan')->name('tambahpertanyaan');

Route::get('/log-in', 'Alumni\AuthAlumni@Login')->name('log-in');
Route::get('/', 'Alumni\LayoutController@index')->name('alumni');
Route::post('/log-in', 'AuthController@postLoginAlumni')->name('postLoginAlumni');
Route::get('/log-out', 'AuthController@postLogoutAlumni')->name('postLogoutAlumni');
Route::get('/dataAlumni', 'Alumni\AuthAlumni@getDataAlumni')->name('getDataAlumni');
Route::post('/percobaan', 'Alumni\AuthAlumni@percobaan');
