<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admin';
    protected $fillable = [
        'nama_admin', 'username', 'password',
    ];


    protected $hidden = [
        'password', 'remember_token',
    ];
}
