<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;


class LayoutController extends Controller
{
    public function __construct()
    {
        if (Session::get('loginStatus') != "Admin") {
            return redirect(route('adminLogin'));
        }
    }

    public function index()
    {
        if (Session::get('loginStatus') == "Admin") {
            return view('welcome');
        }
        return redirect(route('adminLogin'));
    }
}
