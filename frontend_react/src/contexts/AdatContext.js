import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

const AdatContext = createContext();

export const AdatProvider = ({ children }) => {
    /* Két változó állapotától függ az oldal megjelenése: a bejegyzésListától és a tevekenységListától
    Ezek figyelésére stat-eket hozunk létre */
    const [bejegyzesLista, setBejegyzesLista] = useState([]);
    const [tevekenysegLista, setTevekenysegLista] = useState([]);

    /* az adatok lekérése a végpontról axiosszal */
    const getLista = async (vegpont, callBack) => {
        const { data } = await axios.get(vegpont);
        callBack(data);
    };

    /* adatok küldése a szerverre axiosszal */
    const postAdat = async ({ ...adat }, vegpont) => {
        /*  elküldjük a végpontra az adatot */
        try {
            await axios.post(vegpont, adat);
            /* újra lekérem az adatokat, hogy frissüljön a lista */
            getLista("api/bejegyzesek", setBejegyzesLista);
        } catch (error) {
            console.log(error);
        }
    };

    /*  akonkrét adatok lekérése, végpontok hívása callback függvényekkel */
    useEffect(() => {
        getLista("api/bejegyzesek", setBejegyzesLista);
        getLista("api/tevekenysegek", setTevekenysegLista);
    }, []);

    /* Provider elkészítése, komponensekben használható változók és függvények megadása */
    return (
        <AdatContext.Provider
            value={{ bejegyzesLista, tevekenysegLista, postAdat }}
        >
            {children}
        </AdatContext.Provider>
    );
};
export default function useAdatContext() {
    return useContext(AdatContext);
}
