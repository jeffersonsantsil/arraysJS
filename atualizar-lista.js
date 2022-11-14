//Crie uma lista de chamada com os seguintes alunos:['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
//Porém, a Ana e o Caio mudaram de escola e o Rodrigo entrou nessa sala. Atualize a lista.

const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//Com o Splice podemos retirar determinada posição no array e acrescentar no mesmo índice de onde foi retirado
//quem vai sair, até que índice, o quem vai entrar no lugar
nomes.splice(1, 2, 'Rodrigo');

nomes.splice(2,0, 'Jefferson');

console.log(nomes);