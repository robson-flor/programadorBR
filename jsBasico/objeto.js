// melhor maneira de criar um objeto
var aluno = {
  nome: "Igor",
  nota1: [7.5, 5.0, 6.7],
  nota2: [4.0, 6.8, 8.9],
};

aluno.matricula = 12345;
aluno["sobrenome"] = "Oliveira";

var novaProp = "genero";
aluno[novaProp] = "masc";
// duas maneiras diferentes de adicionar propriedades ao objeto, sendo os doi exemplos os mesmo metodos para acessar as propriedados dos objetos

console.log(aluno.genero);

var student = new Object();

student.name = "robson";
student.grade = [8, 9];

console.log(student);
