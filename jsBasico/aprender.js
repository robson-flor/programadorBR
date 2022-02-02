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

let alunos = ["Igor", "Jose", "Marcos", "Mariana", "Joana","Leo","Joao"];

for (i of alunos){
  console.log(i);
}
console.log("array percorrido com sucesso. Fim.")