
let cadena_descifrar = prompt("que quieres descifrar ?");

let arreglo_cadena=Array.from(cadena_descifrar);

let cadena_final=new Array();

let total=0;

for(let i=0; i<arreglo_cadena.length; i++){
  
  if(arreglo_cadena[i]=="."){
    cadena_final.push(1);
  }
  if (arreglo_cadena[i] == ",") {
    cadena_final.push(5);
  }
  if (arreglo_cadena[i] == ":") {
    cadena_final.push(10);
  }
  if (arreglo_cadena[i] == ";") {
    cadena_final.push(50);
  }
  if (arreglo_cadena[i] == "!") {
    cadena_final.push(100);
  }

}
console.log(cadena_final);

cadena_final = cadena_final.map((x) => parseInt(x,10));

total = cadena_final.reduce(function (a, b) {
  return a + b;
});

console.log(total);
