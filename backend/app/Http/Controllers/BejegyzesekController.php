<?php

namespace App\Http\Controllers;

use App\Models\Bejegyzesek;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BejegyzesekController extends Controller
{
    public function index() {;
        $bejegyzesek = response()->json(Bejegyzesek::with('tevekenyseg')->get());
        return $bejegyzesek;

    }

    public function show($id) {
            return Bejegyzesek::find($id);
    }

    public function postBejegyzes(Request $request) {
        $bejegyzes = new Bejegyzesek();
        $bejegyzes->tevekenyseg_id = $request->tevekenyseg_id;
        $bejegyzes->osztaly_id = $request->osztaly_id;
        $bejegyzes->allapot = $request->allapot;
        $bejegyzes->save();
    }
}
