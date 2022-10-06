let x;
x = prompt("Įveskite skaičių");
x = +x;

let pakeistasZenklas = zenkloKeitimas(x);
console.log (pakeistasZenklas);

function zenkloKeitimas (skaicius){
    return skaicius * (-1)
}