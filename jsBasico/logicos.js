// &&  - AND
// || - OR
/* ! - NOT */

var a = true;
var b = false;
var c = a && b;
console.log(c);

var idade = 20;

var maior20 = idade >= 20;
var menor30 = idade <= 30;

var entre = maior20 && menor30;

console.log("Idade", idade);
console.log("Maior que vinte", maior20);
console.log("Menor que trinta", menor30);
console.log("Entre 20 e 30", entre);


var idade = 9;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var passeLivre = menor10 || maior65;

console.log("Idade", idade);
console.log("Menor que 10", menor10);
console.log("Maior que 65", maior65);
console.log("Tem passe livre?", passeLivre)

console.log("Negacao do false", !false)