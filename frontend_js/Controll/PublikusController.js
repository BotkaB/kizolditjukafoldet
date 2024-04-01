import DataService from "../Model/DataService.js";
import HibaView from "../View/HibaView.js";
import PublikusView from "../View/PubikusView.js";
import UrlapView from "../View/UrlapView.js";

class PublikusController {
    loader;
    constructor() {
        this.init();
    }

    init() {
        //példányosítom a dataService osztályomat
        this.dataService = new DataService();
        // lekérem a bejegyzesek végpontról az adatokat
        this.dataService.getData("api/bejegyzesek",this.megjelenit,this.hibaMegjelenit);
        // lekérem a tevékenységeket is. 
        this.dataService.getData("api/tevekenysegek",this.urlapMegjelenit,this.hibaMegjelenit);

        $(window).on("urlapKuld", (event) => {
            console.log(event.detail);
            this.dataService.postData("api/bejegyzes", event.detail);
        });
    }
    urlapMegjelenit(lista) {
        //ha megérkeztek az adatok, példányosítom az UrlapView osztályt
        new UrlapView(lista, $("#urlap"));
    }
    megjelenit(lista) {
         //ha megérkeztek az adatok, példányosítom az PublikusView osztályt
        new PublikusView(lista, $("#publikus"));
    }

    hibaMegjelenit(error) {
        new HibaView(error, $("#publikus"));
    }
}
export default PublikusController;
