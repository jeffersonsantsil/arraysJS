const alunos = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo", "Fani"];
const notas = [10, 6.5, 8, 7.5, 3.5, 8, 6, 9];

const reprovados = alunos.filter((_, indice) => {
  return notas[indice] < 7;
});

const aprovados = alunos.filter((aluno, indice) => {
  return notas[indice] >= 7;
});

console.log(`Relação de alunos Reprovados: ${reprovados}`);
console.log(`Relação de alunos aprovados: ${aprovados}`);
