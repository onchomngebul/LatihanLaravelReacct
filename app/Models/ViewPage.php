<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewPage extends Model
{
    use HasFactory;
    protected $table = 'view_page';

    const CREATED_AT = 'created_date';
    const UPDATED_AT = 'modified_date';

    protected $fillable = [
        'wf_id',
        'view_name',
        'view_type',
        'view_rule_json',
        'is_deleted'
    ];
}
