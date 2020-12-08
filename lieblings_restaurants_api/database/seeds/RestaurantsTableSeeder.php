<?php

use Illuminate\Database\Seeder;
use App\Restaurant;
use Illuminate\Support\Facades\DB;

class RestaurantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $restaurants = factory(Restaurant::class, 20)->create();

        DB::table('restaurants')->insert([
            [
                "name" => "Karlshöhe",
                "cuisine" => "deutsch/schwäbisch",
                "street"=> "Ruderschlachtweg",
                "house_no" => "1",
                "zip" => "72770",
                "city" => "Reutlingen",
                "phone_no" => "07121 503300",
                "url" => "http://karlshoehe-reutlingen.de/",
                "food_orderable" => false,
                "created_at" => "2018-12-12 18=>31:50",
                "updated_at" => "2019-12-06 19:02:40"
            ],
            [
                'name' => 'Im Höfle',
                'cuisine' => 'deutsch/schwäbisch',
                'street' => 'Tübinger Straße',
                'house_no' => '14',
                'zip' => '72127',
                'city' => 'Kusterdingen',
                "url" => "http://www.im-hoefle.de/",
                "food_orderable" => false,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'phone_no' => '07071 37701'
            ],
            [
                'name' => 'Zur Terez',
                'cuisine' => 'balkan',
                'street' => 'Eisenbahnstraße',
                'house_no' => '19',
                'zip' => '72770',
                'city' => 'Reutlingen',
                "url" => "http://zurterez.de/",
                "food_orderable" => false,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'phone_no' => '07121 9885971'
            ],            
            [
                'name' => 'Karz',
                'cuisine' => 'schwäbisch/bayrisch',
                'street' => 'Heppstraße',
                'house_no' => '36',
                'zip' => '72760',
                'city' => 'Reutlingen',
                "url" => "https://karz.de/",
                "food_orderable" => false,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'phone_no' => '07121 370630'
            ],
            [
                "name" => "Landgasthof Adler",
                "cuisine" => "Schwäbisch",
                "street" => "Büchel",
                "house_no" => "3",
                "zip" => "88279",
                "city" => "Amtzell",
                "phone_no" => "075223311",
                "url" => "https://www.adler-amtzell.de/",
                "food_orderable" => true,
                "created_at" => "2019-11-10 18:20:18",
                "updated_at" => "2019-11-10 18:20:18"
            ],
            [
                "name" => "Gasthof Kleber",
                "cuisine" => "Deutsch/Schwäbisch",
                "street" => "Schomburger Ste.",
                "house_no" => "1",
                "zip" => "88239",
                "city" => "Wangen",
                "phone_no" => "07528/1825",
                "url" => "https://www.gasthof-kleber.de/",
                "food_orderable" => true,
                "created_at" => "2020-02-02 15:32:07",
                "updated_at" => "2020-02-02 15:32:07"
            ],
            [
                "name" => "Gasthof zum Hirsch",
                "cuisine" => "Nouvelle cuisine",
                "street" => "Argenstrasse",
                "house_no" => "29",
                "zip" => "88059",
                "city" => "Neukirch Goppelsweiler",
                "phone_no" => "+49 (0)7528 1765",
                "url" => "https://gasthof-zum-hirsch.com/",
                "food_orderable" => true,
                "created_at" => "2020-02-02 17:38:43",
                "updated_at" => "2020-02-02 17:42:07"
            ],
            [
                "name" => "Gasthaus Ochsen",
                "cuisine" => "Deutsch",
                "street" => "Pfärrich",
                "house_no" => "8",
                "zip" => "88279",
                "city" => "Amtzell-Pfärrich",
                "phone_no" => "07522/22727",
                "url" => "",
                "food_orderable" => false,
                "created_at" => "2020-02-05 18:40:42",
                "updated_at" => "2020-02-15 16:49:39"
            ],
            [
                "name" => "Stallbesen",
                "cuisine" => "Deutsch",
                "street" => "Humbrechts",
                "house_no" => "1",
                "zip" => "88239",
                "city" => "Wangen",
                "phone_no" => "07522/9155360",
                "url" => "https://www.stall-besen.de/",
                "food_orderable" => false,
                "created_at" => "2020-03-08 15:52:43",
                "updated_at" => "2020-03-08 15:52:43"
            ],
            [
                "name" => "Ringelbach",
                "cuisine" => "deutsch",
                "street" => "Ringelbachstraße",
                "house_no" => "89",
                "zip" => "72762",
                "city" => "Reutlingen",
                "phone_no" => "0712125886",
                "url" => "http://www.ringelbach-reutlingen.de/",
                "food_orderable" => false,
                "created_at" => "2020-09-12 18:20:00",
                "updated_at" => "2020-09-12 18:20:00"
            ]    
        ]);
    }
}
