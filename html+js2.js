
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let parrafito = document.querySelector('.parrafito');
let pid = document.querySelector('#pid');;
let input =document.querySelector('input');

// innerhtml sirve para cambiar la etiqueta de html en esta caso el h1
h1.innerHTML = 'Pato'
// innerText sirve para mostrar el codigo de html en forma de texto 
// h1.innerText = 'patito'
 
// getAttribute sirve para dar clase a un elemento de html 
h1.getAttribute('pantalla')

console.log(h1.getAttribute('pantalla'));

// h1.setAttribute('verde','rojo') sirve para modificar una class de verde a rojo

// h1.classList.add('rojo') sirve para agregar una clase 
h1.classList.add('rojo')
// h1.classList.remove('verde'); sirve para remover alguna clase en html
h1.classList.remove('verde');
// input.value="456" modifica el valor del input en el navegador 
input.value="456"

// (document.createElement('img')) sirve para crear un elemento desde js en el navegador


// aca se crea una imagen
let img= (document.createElement('img'))
// aca se le dan los atributos 
img.setAttribute('src','https://64.media.tumblr.com/46fa7162c8a5763702015dad1205cdc3/tumblr_pmy7t8o1VW1uzrbt8_640.jpg')
console.log(img)
// aca se inserta esta imagen dentro de un contendero en html 
pid.append(img);
// ejemplo innerHTML borrando una linea en el navegador 
pid.innerHTML=""