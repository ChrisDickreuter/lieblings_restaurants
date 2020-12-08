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
            [
                'name' => 'Chris',
                'email' => 'christian@dickreuter-digital.de',
                'password' => Hash::make('bolo')
            ],
            [
                'name' => 'Jenny',
                'email' => 'jenny@dickreuter-digital.de',
                'password' => Hash::make('panda')
            ],
            [
                'name' => 'Harry',
                'email' => 'harry@dickreuter-digital.de',
                'password' => Hash::make('speck')
            ],
            [
                'name' => 'Beate',
                'email' => 'beate@dickreuter-digital.de',
                'password' => Hash::make('bolo')
            ],
        ]);
    }
}
