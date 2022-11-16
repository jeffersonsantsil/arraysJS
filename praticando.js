animaisDoAquario = ["A", "B", "C", "D"];

animaisDoAquario.splice(1, 0, "E");
animaisDoAquario.splice(3, 2, "F");

console.log(animaisDoAquario);

/*----------------------------------------------------------------------------------*/

const numeros = [1, 2, 3, 4, 5, 6];

function multiplicarPorDez(num) {
  return num * 10;
}

const newNumeros = numeros.map(multiplicarPorDez);

console.log(numeros);
console.log(newNumeros);

console.log(animaisDoAquario);

const numerosDois = [25, 20, 30, 26];

const soma = numerosDois.reduce((acc, atual) => acc + atual, 0);

console.log(soma); //170

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(
    `numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`
  );
}

alteraNumero(numeroOriginal);
