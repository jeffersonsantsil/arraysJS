const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Valeria', 'Vivian', 'Isabela', 'Vivícius', 'Renan', 'Renata', 'Daisy', 'Camilo', 'Eduarda', 'Nicole', 'Cibely', 'Fernanda', 'Aline'];

//O slice serve para fatiar um array em dois, o primeiro parâmentro é onde vai se iniciar o fatiamento e o segundo parâmentro onde vai encerrar, deve levar em consideração que ao definirmos o segundo parâmetro ele não entra no novo array.
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala2);