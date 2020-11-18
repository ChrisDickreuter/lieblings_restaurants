<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_name', 
        'comment', 
        'restaurant_id'
    ];

    /**
     * Get the restaurant record associated with the cooment.
     */
    public function restaurant()
    {
        return $this->belongsTo('App\Restaurant');
    }
}
