//^ Abrir http (metodo, url)
/**
 * * CRUD   - Metodos HTTP
 * * Create - POST
 * * Read   - GET
 * * Update - PUT / PATCH
 * * Delete - DELETE
 * ! @http: Hyper Text Transform Protocol
 * */

//^ Fetch API
const listaClientes = () => fetch("http://localhost:3000/perfil/").then((respuesta) => respuesta.json()); // da formato json a respuesta

//^ Crea Cte en DB
const crearCte = (nombre, email) => {
    return fetch("http://localhost:3000/perfil/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }) //& transforma obj a Txt para http
    });
}

//! Elimina Cte
const  eliminarCte = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, { 
        method: "DELETE",
    });
};

export const clientServices = {
    listaClientes, //key entrance
    crearCte,
    eliminarCte,
}; 
