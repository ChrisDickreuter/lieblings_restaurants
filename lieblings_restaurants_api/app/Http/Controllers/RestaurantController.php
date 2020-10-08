<?php

namespace App\Http\Controllers;

use App\Restaurant;
use App\Http\Resources\RestaurantResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $restaurants = Restaurant::all();
        return response(['restaurants' => RestaurantResource::collection($restaurants), 'message' => 'Restaurants gefunden'],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required', 
            'cuisine' => 'required', 
            'street' => 'required', 
            'house_no' => 'required', 
            'zip' => 'required', 
            'city' => 'required', 
            'phone_no' => 'required'
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'message' =>'Validation Error']);
        }

        $restaurant = Restaurant::create($data);

        return response(['restaurant' => new RestaurantResource($restaurant), 'message' => 'Restaurant gespeichert'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $restaurant = Restaurant::find($id);

        if (empty($restaurant)) {
            return response(['message' =>'Empty']);
        }    

        return response(['restaurant' => new RestaurantResource($restaurant), 'message' => 'Restaurant gefunden'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $restaurant = Restaurant::find($id);

        $validator = Validator::make($data, [
            'name' => 'required', 
            'cuisine' => 'required', 
            'street' => 'required', 
            'house_no' => 'required', 
            'zip' => 'required', 
            'city' => 'required', 
            'phone_no' => 'required'
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'message' =>'Validation Error']);
        }

        $restaurant->update($data);

        return response(['restaurant' => new RestaurantResource($restaurant), 'message' => 'Restaurant geändert'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $restaurant = Restaurant::find($id);

        $restaurant->delete();

        return response(['message' => 'Restaurant gelöscht']);
    }
}
