/*

  Reparar la función de modo que dada una lista de números, devuelva solo los menores que 30
  Todo estaría bien si:
  - Caso 1: Al llamar la función de ésta manera: obtenerMenoresQue30([1, 32, 2, 3]) devuelve un array así: [1,2,3]
  - Caso 2: Al llamar la función de ésta manera: obtenerMenoresQue30([30]) devuelve un array así: []

*/
/*
function obtenerMenoresQue30(numeros) {
  let resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 30) {
      resultado.push(numeros[i]);
    }
  }

  return resultado;
}
//let listaNum = [30];
let listaNum = [1,32,2,3]
console.log(ob tenerMenoresQue30(listaNum));
*/
/*

Reparar la función de modo que dada una lista de nombres, devuelva los nombres en un solo string separándolos por comas.
Todo estaría bien si:
Caso 1: Al llamar la función de ésta manera: obtenerNombresSeparadosPorComa(['Diego','Kike', 'Maru', 'Sebas']) devuelve algo así: 'Diego, Kike, Maru, Sebas'
Caso 2: Al llamar la función de ésta manera: obtenerMenoresQue30([30]) devuelve un array así: []

*/

function obtenerNombresSeparadosPorComa(listaNombres){
  let resultado = '';
  let posicion = 0;

  while (posicion < listaNombres.length) {
    if (posicion == 0){
      resultado = listaNombres[posicion];
      posicion++;
    }else{
      resultado = resultado + ', ' + listaNombres[posicion];
      posicion++;
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

  return resultado;
}

console.log(obtenerNombresSeparadosPorComa(['Diego','Kike','Maru','Sebas']));




/*Ejercicio 3: números aleatorios: Hacer una función que al recibir dos números, genere un número
 aleatorio entre esos dos números.
Por ejemplo: Si se ejecutase la función:
generarNumero(20, 30);
Debería devolver un número entre 20 y 30.
*/

function aleatorioEntreNumeros(min,max){
  
  return Math.round(Math.random() * (max - min) + min);
}

/*Ejercicio 4: Buscando Usuarios: Hacer una función que dado un parámetro de búsqueda, 
retorne la información de todas las incidencias dentro del listado de usuarios adjunto.

ener en cuenta que también se debe retornar ese objeto si la búsqueda es 'Mejia'  o '1.010'.
Criterios de aceptación
- La búsqueda puede ser por cualquiera de los datos que estén en el objeto (nombre, apellido o dni).
*/

function crearPersona(nombre,apellido,dni){
  let persona = {
    nombreP : nombre,
    apellidoP : apellido,
    dniP : dni
  }
  return persona; 
}

function buscarUsuarios(datoDeBusqueda){

}