'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');

function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
  alert("Formulario enviado correctamente")
}

function interceptarNombre(event){
  const nombre = event.value;
  if(nombre.length <=4 || nombre.length>50){
    console.log(" debe tener entre 5 y 50 caracteres");
    } else{
      console.log("es valido");
    }
}


formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
