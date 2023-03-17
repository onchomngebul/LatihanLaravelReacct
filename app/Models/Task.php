<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $table = 'tasks';

    const CREATED_AT = 'created_date';
    const UPDATED_AT = 'modified_date';

    protected $fillable = [
        'wf_id',
        'task_name',
        'task_type',
        'view_id',
        'attribute_json',
        'assigned_to',
        'is_deleted'
    ];
}
