import { limpiarHTML } from "./LimpiarHTML.js";
import { contenedorCarrito } from "./variables.js";

export function carritoHTML(elemento) {
   

    limpiarHTML()
    elemento.map(el =>{
        
        const row = document.createElement('tr')
        row.innerHTML = `
        <td><img widht="50" height="50" src= ${el.imagen}></td>
        <td>${el.nombre}</td>
        <td>${el.precio}</td>
        <td>${el.cantidad}</td>
        `

        contenedorCarrito.appendChild(row);
      
    })


    
}