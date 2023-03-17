<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WayFlow extends Model
{
    use HasFactory;
    protected $table = 'way_flow';

    const CREATED_AT = 'created_date';
    const UPDATED_AT = 'modified_date';

    protected $fillable = [
        'wf_id',
        'flow_name',
        'flow_rule_json',
        'logic_rule',
        'taskid_origin',
        'taskid_aim',
        'is_deleted'
    ];
}
