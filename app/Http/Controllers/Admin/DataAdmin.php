<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class DataAdmin extends Controller
{
    public function dataAdmin()
    {
        if (Session::get('loginStatus') != "Admin") {
            return redirect(route('alumni'));
        }
        return response([
            'success' => true,
            'message' => 'List Semua Posts',
            'data' => Session::get('dataAdmin')
        ], 200);
    }
}
