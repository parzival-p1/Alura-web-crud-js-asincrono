import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    //* Trae info del form
    const nombre = document.querySelector("[data-nombre]").value
    const email  = document.querySelector("[data-email]").value    
    clientServices
        .crearCte(nombre, email)
        .then(() => { // Muesttra la pantalla "Completado"
            window.location.href = "../screens/registro_completado.html"
        } ).catch(error => console.log(error));   
});
