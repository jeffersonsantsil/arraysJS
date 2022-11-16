//Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

let somaSala = 0;

function calcularMedia(sala, somaSala = null) {
  for (let i = 0; i < sala.length; i++) {
    somaSala += sala[i];
  }
  const mediaSala = somaSala / sala.length;
  return mediaSala;
}

console.log(`A média da sala de JavaScript é ${calcularMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calcularMedia(salaJava)}`);
console.log(`A média da sala de Phyton é ${calcularMedia(salaPython)}`);

// O trecho de código acima foi por mim elaborado antes da aula, vi o desafio e concluí da minha forma(Funcional), abaixo vou fazer igual o da aula

function calcularMediaAula(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);
  const media = somaDasNotas / notasDaSala.length;
  return media;
}

console.log(
  "O trecho de código assim foi por mim elaborado antes da aula, vi o desafio e concluí da minha forma(Funcional), abaixo vou fazer igul o da aula"
);

console.log(`A média da sala de JavaScript é ${calcularMediaAula(salaJS)}`);
console.log(`A média da sala de Java é ${calcularMediaAula(salaJava)}`);
console.log(`A média da sala de Phyton é ${calcularMediaAula(salaPython)}`);
