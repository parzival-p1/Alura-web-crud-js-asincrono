import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");



const obtenerInfo = () => 
{
    const url = new URL(window.location);  //get the URL
    const id = url.searchParams.get("id");//URL as param

    if(id === null) {
        window.location.href = "../screens/error.html"
        console.log("Redireccion");
    }

    clientServices.detalleCte(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value  = perfil.email;
    });
};

obtenerInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);  //get the URL
    const id = url.searchParams.get("id");//URL as param

    const nombre = document.querySelector("[data-nombre]").value;
    const email  = document.querySelector("[data-email]").value;
    console.log(nombre, "...", email);
    clientServices.actualizarCte(nombre, email, id).then(() => {
        window.location.href = "../screens/edicion_concluida.html";
    });
});
