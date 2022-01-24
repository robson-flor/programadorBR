
function criarAluno(nome, n1, n2) {
  return {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    }
  }
}
var turma = [
  criarAluno("Robson", 9, 6),
  criarAluno("Joao", 7, 4),
  criarAluno("Mariana", 8, 7)
];

turma.forEach(function (ele){
  console.log(ele);
})

// INSTANCIANDO UM OBJETO

function aluno(nome, n1, n2) {
  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = function() {
    return (this.nota1 + this.nota2) / 2;
  }
}

var a = new aluno("Robson", 9, 8);
var b = new aluno("Joao", 8 ,5)

console.log(a.nome);



