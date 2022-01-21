// Acima dos 70 anos: Venda Proibida
// Dos 35 aos 70 anos: Venda liberada.
// Dos 18 aos 34 anos: Venda liberada mediante a apresentação da identidade.
// Abaixo dos 18 anos: Venda Proibida. Volte Futuramente.

var idade = 15;
var identidade = "";

if (idade > 70) {
  console.log("Voce nem deveria beber");
  identidade = "vai dormir"
} else if (idade >= 35 ) {
  console.log("pode pedir!");
  identidade = "pede logo ai"
} else if(idade >=18){
  console.log("mostre a identidade primeiro!");
  identidade = ("identidade cara")
} else {
  console.log("Sai fora daqui!");
  identidade = ("retardado")
}

switch (identidade) {
  case "vai dormir":
    console.log(identidade)
    break;
  case "pede logo ai":
    console.log(identidade)
    break;
  case "identidade cara":
    console.log(identidade)
    break;
  case "Sai fora daqui!":
    console.log(identidade)
  default:
    console.log("sai dessa");
    break;
}

