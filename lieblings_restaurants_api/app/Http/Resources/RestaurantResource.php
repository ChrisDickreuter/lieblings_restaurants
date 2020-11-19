<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RestaurantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'cuisine' => $this->cuisine,
            'street' => $this->street,
            'house_no' => $this->house_no,
            'zip' => $this->zip,
            'city' => $this->city,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
            'phone_no' => $this->phone_no,
            'url' => $this->url,
            'food_orderable' => $this->food_orderable,
            'comments' => CommentResource::collection($this->comments),
        ];
    }
}
