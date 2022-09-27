let h1=document.querySelector('h1');
let input1=document.querySelector('#calculo1');
let input2=document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular')
let pResult=document.querySelector('#result')


 form.addEventListener('submit',sumarimputvalues())


 const sumarimputvalues = () => {
     let suma = parseInt(input1.value)  * parseInt(input2.value) ;
     pResult.innerHTML = 'el resultado es' + " " + suma 
 } 
// addeventlistener es un metodo que ejecuta un codigo cada vez que pase algo ('nombre del evento que nosotros queremos escuchar' 'nombre de la funcion  que queremos ejecutar)