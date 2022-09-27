let h1=document.querySelector('h1');
let input1=document.querySelector('#calculo1');
let input2=document.querySelector('#calculo2');
let btn=document.querySelector('#btncalcular')
let pResult=document.querySelector('#result')


// const btnOnclick = () =>{
// let suma = parseInt(input1.value)  + parseInt(input2.value) ;
// pResult.innerHTML = 'el resultado es' + " " + suma 
// }

const btnOnclick = () =>{
    let suma = parseInt(input1.value)  * parseFloat(input2.value) ;
    pResult.innerHTML = 'el resultado es' + " " + suma 
} 