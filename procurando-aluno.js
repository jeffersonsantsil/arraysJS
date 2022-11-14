const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibirNotaAluno(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];

    //Esse bloco de código que está comentado em cima pode ser substituido por essa linha abaixo a chamada desestruturação de listas.
  
    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);
    const alunoMedia = medias[indice];
    console.log(
      `O aluno ${aluno}, está cadastrado na posição ${indice} e obteve a média ${alunoMedia}!`
    );
  } else {
    console.log(`O aluno ${aluno}, não está cadastrado!`);
  }
}

exibirNotaAluno("Juliana");
