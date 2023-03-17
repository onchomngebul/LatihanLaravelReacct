<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workflow extends Model
{
    use HasFactory;
    protected $table = 'workflows';

    const CREATED_AT = 'created_date';
    const UPDATED_AT = 'modified_date';

    protected $fillable = [
        'wf_name',
        'description',
        'template_no_record',
        'template_form_json',
        'global_var_json',
        'is_active',
        'is_deleted'
    ];


}
