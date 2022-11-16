// Considere o seguinte array de notas:

const notas = [7, 7, 8, 9];

// Crie um novo array com a nota 10 a mais, sem alterar o array original.

const novoArray = [...notas, 10];

const novasNotas = novoArray.map((nota) => {
  return nota + 10;
});

console.log(`As notas Originais são ${notas}`);
console.log(`As Novas notas são ${novoArray}`);
console.log(`As Novas notas somadas ao valor 10 em cada são ${novasNotas}`);
