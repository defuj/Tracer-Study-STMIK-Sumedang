<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    protected $table = 'alumni';
    protected $fillable = [
        'nim', 'nama', 'password', 'tahun_lulus', 'jenis_kelamin', 'alamat', 'no_hp', 'email', 'tanggal_lahir'
    ];


    protected $hidden = [
        'password'
    ];
}
