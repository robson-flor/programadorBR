function calcMedia() {
  return (this.notas[0]+this.notas[1]) / 2;
}

var aluno = {
  nome: "Robson",
  notas: [8, 9],
  
  media: calcMedia
}

var aluno1 = {
  nome: "Joao",
  notas: [6, 8],

  media:calcMedia
  }


console.log(aluno)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));