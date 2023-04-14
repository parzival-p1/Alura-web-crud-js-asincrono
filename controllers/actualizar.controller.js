import { clientServices } from "../service/client-service.js";

const obtenerInfo = () => {
    const url = new URL(window.location);  //get the URL
    const id = url.searchParams.get("id");//URL as param

    if(id === null) {
        window.location.href = "../screens/error.html"
        console.log("Redireccion");
    }

    const nombre = document.querySelector("[data-nombre]");
    const email  = document.querySelector("[data-email]");

    console.log(nombre, "...", email);

    clientServices.detalleCte(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value  = perfil.email;
    });
};

obtenerInfo();
