<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    /**
     * Attribute welche "mass assignable" sind.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'cuisine', 
        'street', 
        'house_no', 
        'zip', 
        'city', 
        'phone_no'
    ];

}
