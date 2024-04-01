<?php

use App\Models\Tevekenyseg;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tevekenysegs', function (Blueprint $table) {
            $table->id('tevekenyseg_id');
            $table->string('tevekenyseg_nev');
            $table->integer('pontszam');
        });

        Tevekenyseg::create(['tevekenyseg_nev' => 'kerékpárral jöttem iskolába', 'pontszam' => 20]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'rollerrel jöttem iskolába', 'pontszam' => 30]);
        Tevekenyseg::create(['tevekenyseg_nev' => '10 km-t gyalogoltam buszozás helyett ', 'pontszam' => 10]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'ültettem fát ', 'pontszam' => 30]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'ültettem virágot ', 'pontszam' => 50]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'ültettem egyéb növényt ', 'pontszam' => 50]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'kevesebb vizet használtam a fürdéshez ', 'pontszam' => 60]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'összeszedtem a szemetet egy közterületen, erdőben, stb ', 'pontszam' => 40]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'tartós szatyorba vásároltam, nem nylonba ', 'pontszam' => 20]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'nem használtam egyszer használatos műanyagot ', 'pontszam' => 20]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'tartós csomagolású terméket vásároltam – pl üvegbe vettem a tejet, nem használtam pet palackot', 'pontszam' => 10]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'környezetbarát csomagolású terméket vásároltam ', 'pontszam' => 30]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'kevesebb húst ettem a héten ', 'pontszam' => 50]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'ökológiai gazdaságból származó élelmiszert vettem ', 'pontszam' => 60]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'kirándultam, szabadban töltöttem időt a héten ', 'pontszam' => 70]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'kevesebb ruhát/terméket vásároltam a héten, hogy fenntarthatóbb legyen a környeztünk! ', 'pontszam' => 100]);
        Tevekenyseg::create(['tevekenyseg_nev' => 'önkénteskedtem a Greenpeace-nél, vagy más zöld szervezetnél', 'pontszam' => 30]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tevekenysegs');
    }
};
