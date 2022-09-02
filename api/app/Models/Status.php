<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    protected $table = 'status';

    protected $fillable = [
        'name'
    ];

    public static $rules = [
        'name' => 'required'
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class, 'status_id', 'id');
    }
}
