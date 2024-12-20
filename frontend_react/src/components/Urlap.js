import React, { useState } from "react";
/* Az AdatContext változóit és függvényeit használjuk */
import useAdatContext from "../contexts/AdatContext";

export default function Urlap() {
    /* Az AdatContext változóit és függvényeit használjuk */
    const { tevekenysegLista, postAdat, setBejegyzesLista } = useAdatContext();
    /* Az osztálylistát most fixen beégetjük */
    const osztalyLista = ["SZF1A", "SZF1B", "SZF2A", "SZF2B"];

    /* az űrlapelemekhez state-ket használunk */
    const [osztaly, setOsztaly] = useState("valassz");
    const [tevekenyseg, setTevekenyseg] = useState("valassz");

    /* A kuld függvény hívódik meg, ha a form submit gombjára kattintunk */
    function kuld(event) {
        event.preventDefault();
        /*  összeállítjuk az űrlapadatot */
        let adat = {
            tevekenyseg_id: tevekenyseg,
            osztaly_id: osztaly,
            allapot: 0,
        };
        //  ide jön a  validáció
        if (!(osztaly === "valassz" || tevekenyseg === "valassz")) {
            /* meghívjuk az AdatContex postAdat metódusát */
            postAdat(adat, "api/bejegyzes", setBejegyzesLista);
            setOsztaly("valassz");
            setTevekenyseg("valassz")
        } else {
            console.log("hibás adatok");
        }
    }
    /* összeállítjuk a formot */
    return (
     
        <form className="my-3" onSubmit={kuld}>
            {/* osztály legördülő űrlapelem */}
            <select value={osztaly}
                className="form-select"
                id="osztaly"
                name="osztaly"
                onChange={(event) => {
                    //változáskor beállítjuk a setOsztaly függvénnyel az osztaly változó értékét
                    setOsztaly(event.target.value); 
                }}
            >
                <option value="valassz">Válassz osztályt!</option>
                {/* A legördülő elemek */}
                {osztalyLista.map((element, index) => {
                    return (
                        <option key={index} value={element}>
                            {element}
                        </option>
                    );
                })}
            </select>
            {/* tevékenység legördülő űrlapelem */}
            <select value={tevekenyseg}
                className="form-select"
                id="tevekenyseg"
                name="tevekenyseg"
                onChange={(event) => {
                     //változáskor beállítjuk a setTevekenyseg függvénnyel 
                     //az tevekenyseg változó értékét                   
                    setTevekenyseg(event.target.value);
                }}
            >
                <option value="valassz">Válassz tevékenységet!</option>
                {tevekenysegLista.map((element, index) => {
                    return (
                        <option value={element.tevekenyseg_id} key={index}>
                            {element.tevekenyseg_nev}
                        </option>
                    );
                })}
            </select>
            <input
                type="submit"
                className="btn btn-success"
                value="Küld"
                id="submit"
            />
        </form>
    );
}
