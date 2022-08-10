import { carritoHTML } from "./carrito.js";
import { pokemones } from "./DB.js"; 


import { MostrarPokemons } from "./MostrarPokemons.js";

import  buscador  from "./buscador.js";

import * as V from "./variables.js";



window.addEventListener('load', ()=>{
    const LSpoke = JSON.stringify(pokemones)

    localStorage.setItem('pokemones',LSpoke)


    MostrarPokemons(pokemones);
    
    
})


document.addEventListener('DOMContentLoaded',()=>{
    V.ListaProductos.addEventListener('click',agregarPoke)

    V.vaciarCarritoBoton.addEventListener('click',eliminarcarrito)
    V.botonComprar.addEventListener('click',RealizarCompra)

    V.buscador.addEventListener('keyup', buscador());

   
    
})






let articulosCarrito = [] 
export function agregarPoke(e){
    e.preventDefault()
    if(e.target.classList.contains('btnAgregar')){
        const PokeElegido = e.target.parentElement.parentElement;
        
        leerDatosPoke(PokeElegido)
    }
    
}

function leerDatosPoke(pokemon){
  
    const infoPoke= {
        imagen: pokemon.querySelector('img.pokemon').src,
        nombre: pokemon.querySelector('h2').textContent,
        precio : pokemon.querySelector('h3').textContent,        
        cantidad: 1 
    
    }
    
    const existe = articulosCarrito.some(pokemon => pokemon.nombre === infoPoke.nombre)
    
    if(existe){
        articulosCarrito.map(pokemon => {
            if(pokemon.nombre === infoPoke.nombre){
                pokemon.cantidad ++
                return 
            }

        })
    }else
    {
          articulosCarrito = [...articulosCarrito, infoPoke]

      }



    carritoHTML(articulosCarrito)
    
}



function eliminarcarrito(){

    if(articulosCarrito.length===0){
    Swal.fire({
        title: 'Carrito Limpio',
        icon: 'error'
        })
    }
    else{
        Swal.fire({
            title: 'Carrito Vaciado',
            icon: 'success'
        })
    }
    carritoHTML(articulosCarrito = [])
}


function RealizarCompra(){
    
    if(articulosCarrito.length === 0)
    {
        Swal.fire({
            title: 'El carrito esta vacio',
            icon: 'error'
            })
        }
        else{
            
            Swal.fire({
            title: 'Compra realizada',
            html : '<img src="../img/loader pika.gif" alt="pika corriendo" class="pika_loader"></img> ',
           
        })
        limpiarcarrito()
    }
 
          
    
    }
 


function limpiarcarrito(){
    carritoHTML(articulosCarrito = [])
}






