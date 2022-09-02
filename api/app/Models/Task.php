<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'status_id'
    ];

    public static $rules = [
        'title' => 'required',
        'status' => 'required'
    ];

    public function status()
    {
        return $this->hasOne(Status::class, 'id', 'status_id');
    }
}
