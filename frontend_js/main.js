//import AdminController from "./Controll/AdminController.js";
import PublikusController from "./Controll/PublikusController.js";

//const ADMIN = new AdminController();
//const PUBLIKUS = new PublikusController();

$(function () {
     new PublikusController();
     $("#adm").on("click", () => {});
    $("#pub").on("click", () => {
     $("#publikus").empty()
     $("#urlap").empty()
     new PublikusController();
    }); 
});
