import { videos } from "../modules/data.js";

console.log(videos);

console.log(JSON.stringify(videos));

//Variables/Constantes

//funciones

function agregarBotonesDeFiltrado(listaCategorias, contenedorFiltros) {
  listaCategorias.forEach((element) => {
    const boton = document.createElement("button");
    boton.id = element;
    boton.textContent = element;
    // item.innerHTML = `
    //     <button id=${element} name=${element}>${element}</button>
    // `;
    boton.addEventListener("click", () => {
      console.log(`Hice click en el filtro ${element}`);
      mostrarFiltroActivo(contenedorFiltros.children, element);
    });
    contenedorFiltros.appendChild(boton);
    console.log(contenedorFiltros.children);
  });
}

function mostrarFiltroActivo(botonesFiltrado, filtroAActivar) {
  for (const boton of botonesFiltrado) {
    boton.classList.remove("active");
    if (boton.id === filtroAActivar) {
      boton.classList.add("active");
    }
  }
}

//1. Agregar en el DOM los botones de filtrado
const contenedorFiltros = document.getElementById("filtros");

const listaCategorias = videos.map((video) => video.categoria);
// const categorias = [...new Set(listaCategorias)]; //Spread operators
const categorias = Array.from(new Set(listaCategorias));

agregarBotonesDeFiltrado(categorias, contenedorFiltros);

//2. Agragar las tarjetas de los videos en el DOM
