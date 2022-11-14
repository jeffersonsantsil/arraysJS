const notas = [10, 6.5, 8, 7.5];


let somaDasNotas = 0;


// é muito pareceido com o for tradicional FOR OF percorre o array todo
for (let nota of notas){
   somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);