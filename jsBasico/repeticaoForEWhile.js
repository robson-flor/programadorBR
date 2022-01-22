var numero = 5;

for (var i = 0; i < numero; i++) {
  console.log("executando o for," + " numero da vez: " + i);
}
console.log("acabou");

// -------------------------

while (numero < 10) {
  console.log("numero da vez:" + numero)
  numero++;
}
console.log("acabou")

// -----------------------

var num = Math.random() * 100;

while (num < 90) {
  console.log(num);
  num = Math.random() * 100;
}
console.log(num);
console.log("acabou");