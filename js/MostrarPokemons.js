export function MostrarPokemons(pokemone){

    let PokeLS = JSON.parse(localStorage.getItem('pokemones'));

    //  console.log(PokeLS);

    pokemone.forEach( poke => {
        const{nombre,image,precio, clase}= poke
        // console.log(poke);

        const contenedor = document.createElement('div')
        const cards = document.querySelector('.cards')
        contenedor.classList.add('container')

        contenedor.innerHTML = `<div class="Nom_Img"><h2>${nombre}</h2><img src  ='${clase}' class="clase"> <img src ='${image}' class="pokemon"> </div> 
        <div class="Prec_btn"> 
         <div class= "precio">
          <h3>${precio}</h3> <h4>pokemonedas</h4>
        </div>
        <button type="submit" class="btnAgregar" id="agregar"> Agregrar al carrito</button>
         </div>` 
            

        cards.appendChild(contenedor)
    });
}