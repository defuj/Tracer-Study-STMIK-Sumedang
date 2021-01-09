<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class LayoutController extends Controller
{
    public function index()
    {
        if (Session::get('loginStatus') == "Alumni") {
            return view('alumni.index');
        }
        // return view('alumni.index');
        return redirect(route('log-in'));
        // die('12312');
    }
}
