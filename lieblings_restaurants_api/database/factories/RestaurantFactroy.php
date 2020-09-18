<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Restaurant;
use Faker\Generator as Faker;

$factory->define(Restaurant::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'cuisine' => $faker->name,
        'street' => $faker->streetName,
        'house_no' => $faker->buildingNumber,
        'zip' => $faker->postcode,
        'city' => $faker->city,
        'phone_no' => $faker->phoneNumber,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
    ];
});
