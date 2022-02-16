//Ejer 1
const array = [1, 2, 3];
let sum = 0;

function sumayresultado(sum)
{
    for (let i = 0; i < array.length; i++) 
    {
    sum += array[i];
    }
    return(sum)
}

//Ejer 2
var arearesultado = 0;
var b =10
var h =10

function obtenerArea(b,h)
{
    var  arearesultado = (b*h)/2;
    
    return(arearesultado)
}
//Ejer 3
const convDiasAnios = cantDias => {
    const cantAnios = Math.floor(cantDias / 365);
    return cantAnios;
}

//Ejer 4
const validarLength = (str1, str2) => {
    if (str1.length === str2.length) 
    {
        return true;
    } else return false;
}

//Ejer 5
const voltearPalabra = (str) => {
    let array = str.split('');
    array.reverse();

    return array.join("");
}

//Ejer 6
const validNum = num => {
    if (num % 5 === 0)
        return true;
    else return false;
}
//Ejer 7
const str = 'hola soy una letra'
const arr = str.split(" ");
function mayusculaletras(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const str2 = arr.join(" ")
    
    return (str2)
}

//Ejer 8
const obtenerMayorNum = nums => {
    return Math.max.apply(null, nums);
}

//Ejer 9
const quitarPriLetra = palabra => {
    let palabArray = palabra.split('');
    palabArray.shift(0, 1);
    return palabArray.join('');
}
//Ejer 10 
const letras = ["hola","soy","la","gaceta"]

function  unirletras(letras)
{
    return letras.join(" ")
}





