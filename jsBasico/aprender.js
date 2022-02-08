// let idade = 30;
// let pessoa = idade;

// if (idade >= 20 && idade <= 30) {
//   console.log("idade aceita")
// } else {
//   console.log("idade nao aceita")
// }

// let Idade = 25;

// let maior20 = Idade >= 20;
// let menor30 = Idade <= 30;

// let entre = Idade >= 20 && Idade <= 30;

// console.log("Minha idade é:\n"+Idade)

// console.log("Maior ou igual a vinte: \n"+maior20)
// console.log("Menor ou igual a trinta: \n"+menor30)

// console.log("Entre 20 e 30 ?\n"+entre)

// let idade = 18;

// let menor10 = idade <= 10;
// let maior65 = idade >= 65;

// let neg = !menor10
// console.log("Exemplo negacao de idade menor que 10\n" + neg)

// console.log("Minha idade é:\n" + idade);
// console.log("Menor que 10?\n" + menor10);
// console.log("Maior que 65?\n" + maior65);

// let gratuidade = menor10 || maior65;

// let alimento = !menor10 && !maior65;
// console.log("Entra com alimento?\n"+alimento)

// console.log("Tenho gratuidade?\n" + gratuidade)
// if (gratuidade == true) {
//   console.log("parabens! passe livre rapaz!!")
// } else {
//   console.log("vale a pena pagar vai..")
// }

// var str = "valor qualquer"
// str += " outro texto"
// console.log(str)

// let nome = prompt("Qual o seu nome");
// alert("Seja bem vindo, " + nome);

// let num = parseInt(prompt("Digite um numero: "));
// let dobro = num + num;
// alert(
//   "O numero que voce digitou foi: " +
//     num +
//     " O dobro de " +
//     num +
//     " é :" +
//     dobro
// );

// let idade = 18;

// if (idade >= 35) {
//   console.log("Pode pedir.")
//   console.log("Qual o seu pedido?")

// } else if (idade >=18){
//   console.log("mostre a identidade")

// } else {
//   console.log("nao pode pedir")
//   console.log("Volte futuramente")
// }

// let idade = 71;

// if (idade < 18 || idade > 70) {
//   console.log("nao pode pedir")
// } else {
//   console.log("qual o pedido?")
// }

// let idade = 2;

// let pode = idade >= 18 ? 1 : 2;
// console.log(pode)

// let nota1 = 4.6;
// let nota2 = 8.9;
// let media = (nota1 + nota2) / 2;
// let conceito = "";

// if (media >= 8) {
//   conceito = 10;
// } else if (media >= 6.5) {
//   conceito = 5;
// } else {
//   conceito = 0;
// }
// console.log("sua media foi : " + media);
// console.log("conceito : " + conceito);

// switch (conceito) {
//   case 10:
//     console.log("Parabéns!!!");
//     break;
//   case 5:
//     console.log("Muito bem!");
//     break;
//   case 0:
//     console.log("Se esforce mais!");
//     break;
//   default:
//     console.log("Algo saiu errado");
//     break;
// }

// let num = 10;

// for (i = 1; i <= num; i++) {
//   console.log("Execuntando o for pela "+(i+10)+"ª vez");
// }
// console.log("Acabou")

// console.log(numero)

// while (numero < 15) {
//   console.log("numero : " + numero);
//   numero++;
// }
// console.log("acabou")

// var numero = Math.random() * 100;

// while (numero < 90) {
//   console.log(numero);
//   numero = Math.random() * 100;

// }
// console.log(numero);
// console.log("acabou")

// let num = 0;

// while (num < 10) {
//   console.log(num)
//   num++;
// }
// console.log(num);
// console.log("acabou")

// let numero = Math.random() * 100;

// while (numero < 90) {

//   console.log(numero);
//   numero = Math.random() * 100;

// }
// console.log("maior que 90: "+numero);
// console.log('acabou')

// let vetor = new Array("Igor", "Jose", "Marcos", "Mariana");

// console.log(vetor[0]);

// let alunos = ["Igor", "Jose", "Marcos", "Mariana", "Joana","Leo","Joao"];

// for (i of alunos){
//   console.log(i);
// }
// console.log("array percorrido com sucesso. Fim.")

// function media(n1, n2) {
//   let nota1 = n1;
//   let nota2 = n2;
//   let media = (n1 + n2) / 2;
//   console.log(".................................");
// console.log("Sua media foi: " + media);
//   console.log("sua nota da primeira prova foi: " + nota1);
//   console.log("Sua nota da segunda prova foi: " + nota2);
//   console.log(".................................");

//   return media;
// }

// resultado1 = media(8.1, 9.0);
// resultado2 = media(8.3, 5.7);

// console.log("resultado 1 = " + resultado1)
// console.log("resutaldo 2 = "+resultado2)

// function saudacao() {
//   return "Ola mundo!";
// }

// var s = saudacao;
// console.log(s());

// function media(n1, n2) {
//   var nota1 = n1;
//   var nota2 = n2;
//   var media = (nota1 + nota2) / 2;
//   return media;
// }
// var res = media(7.3, 5.8)
// console.log(res)

// var m = media;
// var res2 = m(2, 3)
// console.log(res2)

// var media = (n1,n2) => {
//   return (n1 + n2) / 2;
// }
// console.log(media(5, 6));

// lista com nome do aluno, separado por nota 1 , nota 2 e media, posso ter tambem um valor falando se esta aprovado ou reprovado.

// var alunos = ["Igor", "Maria", "Jose", "Mariana", "Joao", "Leo"];
// var nota1 = [5.6, 7.6, 4.8, 6.0, 8.6, 9.0];
// var nota2 = [8.6, 8.9, 5.8, 8.0, 7.4, 6.6];

// function media(n1, n2) {
//   return (n1 + n2) / 2;
// }

// function passou(media) {
//   if (media > 7) {
//     return "aprovado";
//   } else {
//     return "reprovado";
//   }
// }

// for (i in alunos) {
//   var Nota1 = nota1[i];
//   var Nota2 = nota2[i];
//   var m = media(Nota1,Nota2)
//   console.log(
//     "Aluno: " +
//       alunos[i] +
//       " - Primeira nota: " +
//       Nota1 +
//       " - Segunda nota: " +
//       Nota2 +
//       " - Media: " +
//       m+" voce foi: "+passou(m)
//   );
// }

// var alunos = ["Igor", "Maria", "Jose", "Mariana", "Joao", "Leo"];
// var nota1 = [5.6, 7.6, 4.8, 6.0, 8.6, 9.0];
// var nota2 = [8.6, 8.9, 5.8, 8.0, 7.4, 6.6];

// function media(n1,n2) {
//   return (n1 + n2) / 2;
// }

// for (i in alunos) {
//   var n1 = nota1[i]
//   var n2 = nota2[i]
//   var m = media(n1, n2)
//   console.log("aluno: "+alunos[i]+" nota 1: "+n1+"nota 2: "+n2+" media :"+m+"voce foi: "+passou(m))
// }

// function passou(m) {
//   if (m > 7) {
//     return "aprovado"
//   } else {
//     return "reprovado"
//   }
// }

// var alunos = ["Noemia", "Robson"]
// console.log(alunos[1])

// var pessoa = {
//   nome: "Robson",
//   idade: 31,
//   cidade: "buzios"
// }
// console.log(pessoa.idade)

// lista com nome do aluno, separado por nota 1 , nota 2 e media, posso ter tambem um valor falando se esta aprovado ou reprovado.

// var alunos = ["Igor", "Robson", "Patricia", "Joao"];
// var nota1 = [7.0, 7.9, 8.2, 7.3];
// var nota2 = [8.0, 9.9, 7.4, 6.3];

// function media(n1, n2) {
//   return (n1 + n2) / 2;
// }

// for (i in alunos) {
//   var n1 = nota1[i];
//   var n2 = nota2[i];
//   var m = media(n1, n2);
//   console.log(
//     "O aluno: " +
//       alunos[i] +
//       " obteve nota 1 de : " +
//       n1 +
//       " nota 2 de: " +
//       n2 +
//       " e media de: " +
//       m +
//       " voce foi: " +
//       passou(m)
//   );

// }

// function passou(m) {
//   if (m > 7) {
//     return "passou";
//   } else {
//     return "reprovou";
//   }
// }
// var alunos = {
//   nome: "Robson",
//   idade: 30,
//   estadoCivil: "solteiro",
//   notas: [7.5,6.7,8.8]
// }

// alunos.matricula = 52;
// alunos["sobrenome"]="Souza"
// console.log(alunos.sobrenome)

// var aluno = new Object();

// aluno.nome = "Robson";
// aluno.idade = 30;
// aluno.notas = [7.5, 8.0, 9.0]

// console.log(aluno.notas[1])

// var alunos = ["Igor", "Robson", "Maria"];
// var notasA = [7.1, 8.2, 5.3];
// var notasB = [8.0, 9.0, 5.5];

// function media(n1, n2) {
//   return (n1 + n2) / 2;
// }
// for (var i in alunos) {
//   var nota1 = notasA[i]
//   var nota2 = notasB[i]
//   var m = media(nota1, nota2)
//   console.log("O aluno "+alunos[i]+" tirou a nota: "+nota1+"+" +nota2+ " e teve a media "+m+ " ele foi: "+passou(m))
// }
// function passou(m) {
//   if (m > 7) {
//     return "aprovado"
//   } else {
//     return "reprovado"
//   }

// }

// var alunos = {
//   nome: "Robson",
//   idade: 30,
//   notas: [7.6, 6.0, 8.1],
// };

// var novaProp = "lastName"
// alunos[novaProp] = "Oliveira"
// alunos.matricula = 154;
// alunos["sobrenome"] = "Souza";
// console.log(alunos);

// var aluno = {
//   nome: "Robson",
//   nota: [8.0, 7.0]
// };
// var aluno2 = {
//   nome: "Joao",
//   nota: [6.0, 7.0]
// };
// console.log(aluno)
// console.log(aluno2)

// function calcMedia () {
//     return (this.notas[0] + this.notas[1]) / 2;
// }
// var aluno = {
//   nome: "Igor",
//   idade: 31,
//   notas: [9.9, 7.5],

//   media: calcMedia
// }
// console.log(aluno.nome)
// console.log(aluno.media())

// var aluno1 = {
//   nome: "Joao",
//   idade: 31,
//   notas: [9.0, 9.0],

//   media: calcMedia
// }

// console.log(aluno1.nome)
// console.log(aluno1.media())

// ARRAY DE OBJETOS

// function criarAluno(nome, n1, n2) {
//   return {
//     nome: nome,
//     nota1: n1,
//     nota2: n2,
//     media: function () {
//       return (this.nota1 + this.nota2) / 2;
//     },
//   };
// }

// var turma = [criarAluno("Igor", 8, 9), criarAluno("Joao", 7, 4), criarAluno("Marcela",9,6)];

// var aluno = turma[2];

// turma.forEach(function (i) {
//   console.log(i)
// })

// function aluno(nome, n1, n2) {
//   this.nome = nome;
//   this.nota1 = n1;
//   this.nota2 = n2;

//   this.media = function () {
//     return (this.nota1 + this.nota2) / 2;
//   }
// }

// var a = new aluno("Igor", 8, 9)
// console.log(a)
// console.log(a.media())

// var a = {
//   nome: "Igor",
//   sobrenome: "Oliveira",
// };
// console.log(a);

// function obj(n, s) {
//   return { nome: n, sobrenome: s };
// }

// var a = obj("Igor", "Oliveira");
// console.log(a);

// var d = new Date(12476541165);

// var mes = ["Jan", "Fev", "Mar", "Abril", "Maio", "Jun", "Jul", "Ago", "Set","Out", "Nov", "Dez"]

// console.log(d)
// console.log(mes[d.getMonth()])
// console.log(d.getTime())
// console.log(d.setFullYear(2009))
// console.log(d.setHours(9,35))
// console.log(d)

// var numero1 = 4;
// let numero2 = 5;
// const numero3 = true;

// console.log(numero1);
// console.log(numero2);
// console.log(numero3);

// let car = {
//   brand: "Honda",
//   getBrand: function () {
//     return this.brand;
//   }
// }
// let brand = car.getBrand()
// console.log(brand)

// function h1Click() {
//   console.log("fui clicada")
// }
// function changeh1(input) {
  
//   let h1 = document.getElementsByTagName("h1")[0]
//   h1.innerHTML = input.value;
// }

