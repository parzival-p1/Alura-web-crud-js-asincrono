import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = async () => //^ async func
{
    const url = new URL(window.location);  //get the URL
    const id = url.searchParams.get("id");//URL as param

    if (id === null) {
        window.location.href = "../screens/error.html"
        console.log("Redireccion");
    }

    const nombre = document.querySelector("[data-nombre]");
    const email  = document.querySelector("[data-email]");
    
    try {
        const perfil = await clientServices.detalleCte(id); //^ await func
        if (perfil.nombre && perfil.email) {
            nombre.value = perfil.nombre;
            email.value  = perfil.email;
        } else {
            throw new Error();
        }
    } catch(error) {
        window.location.href = "../screens/error.html";
    }
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
