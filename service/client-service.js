
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
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json()); // da formato json a respuesta

export const clientServices = {
    listaClientes //key entrance
};


