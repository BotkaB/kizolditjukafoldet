import SorView from "./SorView.js";

class PublikusView {
    #osztaly = ["SZF1A", "SZF1B", "SZF2A", "SZF2B"];
    #lista = [];
    #szuloElem;
    #adatok = {};
    constructor(lista, szuloElem) {
        this.#szuloElem = szuloElem;
        this.#lista = lista;

        szuloElem.append(`<form class="my-3">`);
        this.urlapElem = szuloElem.children("form");
        this.urlapElem.append(`<select class="form-select" id="osztaly" name="osztaly">`);
        this.osztalyElem = this.urlapElem.children("select:first-child");
        this.urlapElem.append(`<select class="form-select" id="tevekenyseg" name="tevekenyseg">`);
        this.tevElem = this.urlapElem.children("select:last-child");
        this.megjelenit();
        this.submitGomb = $("#submit");
        this.submitGomb.on("click", (event) => {
            //Űrlapadatok küldése
            event.preventDefault();
            //  ide jön a  validáció
            if (
                !(
                    this.tevElem.val() == "valassz" ||
                    this.osztalyElem.val() == "valassz"
                )
            ) {
                this.#adatok = {
                    tevekenyseg_id: this.tevElem.val(),
                    osztaly_id: this.osztalyElem.val(),
                    allapot: 0,
                };
                console.log(this.#adatok);
                this.trigger("urlapKuld");
            } else {
                console.log("hibás adatok");
            }
        });
    }

    megjelenit() {
        /*a osztály űrlapelem legördülő elemei */
        this.osztalyElem.append(
            `<option value="valassz" >Válassz osztályt!</option>`
        );
        this.#osztaly.forEach((element) => {
            this.osztalyElem.append(
                `<option value="${element}" >${element}</option>`
            );
        });
        /* tevékenység űrlapelem legördülő elemei */
        this.tevElem.append(
            `<option value="valassz">Válassz tevékenységet!</option>`
        );
        this.#lista.forEach((element, index) => {
            this.tevElem.append(
                `<option value="${element.tevekenyseg_id}">${element.tevekenyseg_nev}</option>`
            );
        });
        this.urlapElem.append("<input type='submit' class='btn btn-success' value='Küld' id='submit'>");
    }
    trigger(esemenynev) {
        //saját esemény létrehozása
        const e = new CustomEvent(esemenynev, { detail: this.#adatok });
        window.dispatchEvent(e);
    }
}
export default PublikusView;
