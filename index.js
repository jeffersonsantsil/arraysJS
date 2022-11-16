const numeros = [1, 2, 3, 4, 5, 6];

function multiplicarPorDez(num) {
  return num * 10;
}

const newNumeros = numeros.map(multiplicarPorDez);

console.log(numeros);
console.log(newNumeros);
