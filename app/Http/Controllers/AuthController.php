<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use App\Admin;
use App\Alumni;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:admin');
    // }

    public function getLogin()
    {
        $data = [
            'title' => "Halaman Login",
            'subtitle' => "Masukan Username dan Password"
        ];
        return view('login', $data);
    }

    public function postLogin(Request $request)
    {
        $cek = DB::table('admin')
            ->where('username', '=', $request->username)
            ->first();
        if (!$cek) {
            return redirect(route('adminLogin'))->with('gagalLogin', 'Username atau Password Salah');
        } else {
            if (!Hash::check($request->password, $cek->password)) {
                return redirect(route('adminLogin'))->with('gagalLogin', 'Username atau Password Salah');
            } else {
                Session::put('loginStatus', 'Admin');
                Session::put('dataAdmin', $cek->nama_admin);
                Session::put('login', 1);
                // return $request->session()->has('loginStatus') ? $request->session()->get('loginStatus') : '';
                return redirect(route('adminPage'));
            }
        }
    }

    public function Logout()
    {
        Session::flush();
        return redirect(route('adminLogin'));
    }

    public function getLoginUser()
    {
        return view('login_user');
    }

    public function getRegister()
    {
        $data = [
            'title' => "Halaman Register",
            'subtitle' => "Masukan Username dan Password yang akan di daftarkan",
        ];
        return view('register', $data);
    }

    public function postRegister(Request $request)
    {


        $validator = Validator::make(
            $request->all(),
            [
                'nama'     => 'required|min:5',
                'nim'   => 'required|unique:Alumni,nim|min:10',
                'password'     => 'required|confirmed|min:8',
                'tanggal_lahir' => 'required'
            ],
            [
                'nim.required' => 'Masukkan nim !',
                'nim.unique' => 'nim Telah Terpakai !',
                'nim.min' => 'Masukkan nim minimal 10 huruf !',
                'nama.min' => 'Masukkan Nama minimal 5 huruf !',
                'nama.required' => 'Masukkan Nama !',
                'password.required' => 'Masukkan Password !',
                'password.min' => 'Masukkan Password minimal 8 huruf !',
                'password.confirmed' => 'Masukan Password Yang Sama !',
                'tanggal_lahir.required' => 'Pilih Tanggal Lahir'
            ]
        );

        if ($validator->fails()) {
            // Session::flash('ErrorPassword', $validator->errors('password'));
            return redirect()->back()->withErrors($validator);
        } else {
            $cek = DB::table('cek_alumni')->select('nim', 'tanggal_lahir')->where('nim', '=', $request->nim)->where('tanggal_lahir', '=', Date('Y-m-d', strtotime($request->tanggal_lahir)))->count();
            if ($cek == 1) {
                Alumni::create([
                    'nama' => $request->nama,
                    'nim' => $request->nim,
                    'tanggal_lahir' => Date('Y-m-d', strtotime($request->tanggal_lahir)),
                    'password' => bcrypt($request->password)
                ]);
                return redirect()->route('log-in')->with(['register' => 'Akun Anda telah terdaftar!..']);
            } else {
                $data = [
                    'tanggal_lahir' => 'NIM atau Tanggal Lahir tidak cocok',
                    'nim' => 'NIM atau Tanggal Lahir tidak cocok',
                ];
                return redirect()->back()->withErrors($data);
            }
        }
    }

    public function postLoginAlumni(Request $request)
    {
        $cek = DB::table('alumni')
            ->where('nim', '=', $request->nim)
            ->first();
        if (!$cek) {
            return redirect(route('log-in'))->with('gagalLogin', 'NIM atau Password Salah');
        } else {
            if (!Hash::check($request->password, $cek->password)) {
                return redirect(route('log-in'))->with('gagalLogin', 'NIM atau Password Salah');
            } else {
                Session::put('loginStatus', 'Alumni');
                Session::put('dataAlumni', $cek);
                Session::put('login', 'success');
                Session::put('nim', $request->nim);
                // return $request->session()->has('loginStatus') ? $request->session()->get('loginStatus') : '';
                return redirect(route('alumni'));
            }
        }
    }

    public function postLogoutAlumni()
    {
        Session::flush();
        return redirect(route('alumni'));
    }
}
