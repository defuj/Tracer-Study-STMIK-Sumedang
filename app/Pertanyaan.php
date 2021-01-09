<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pertanyaan extends Model
{
    protected $table = "pertanyaan";
    protected $fillable = [
        'tipe_pertanyaan', 'pertanyaan', 'required',
    ];
}
