<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    /**
     * The attributes of restaurant that are mass assignable.
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
