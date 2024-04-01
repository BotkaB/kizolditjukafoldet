<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bejegyzesek extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'tevekenyseg_id',
        'osztaly_id',
        'allapot',
    ];
    public function tevekenyseg()
    {
        return $this->belongsTo(Tevekenyseg::class, 'tevekenyseg_id', 'tevekenyseg_id');
    }
}
