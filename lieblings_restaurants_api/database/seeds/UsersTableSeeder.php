<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Christian',
            'email' => 'christian@dickreuter-digital.de',
            'password' => Hash::make('passwort'),
        ]);
    }
}
