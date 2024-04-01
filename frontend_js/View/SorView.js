class SorView {
    #obj = {};
    #index;
    constructor(obj, szuloElem, index) {
        this.#obj = obj;
      
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#sor();

        this.sorElem = this.szuloElem.children("tr:last-child");
    }

    #sor() {
        let txt = `<tr>`;
        for (let x in this.#obj) {
            if (x == "tevekenyseg") {
             
            } else if (x == "tevekenyseg_id") {
                txt += `<td>${this.#obj.tevekenyseg.tevekenyseg_nev}</td>`;
            } else if (x == "allapot") {
                if (this.#obj.allapot == 0) {
                    txt += `<td>nincs elfogadva</td>`;
                } else {
                    txt += `<td>elfogadva</td>`;
                }
            } else {
                txt += `<td>${this.#obj[x]}</td>`;
            }
        }
        txt += `</tr>`;

        this.szuloElem.append(txt);
    }

}
export default SorView;
