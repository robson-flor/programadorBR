var nota1 = 7.0;
var nota2 = 9.8;

var media = (nota1 + nota2) / 2;

if (media >= 7) {
  console.log("Voce passou com media " + media)
} else {
  console.log("Sua nota " + media + " nao foi o suficiente para passar")
}

var conceito = "";
if (media >= 8) {
  conceito = "otimo";
} else if (media >=6){
  conceito = "bom";
} else {
  conceito = "ruim";
}
console.log(media);
console.log(conceito);

switch (conceito) {
  case "otimo":
    console.log("parabens, otimo aluno")
    break;
  case "bom":
    console.log("bom trabalho")
    break;
  case "ruim":
    console.log("voce pode fazer melhor")
    break;
  default:
    console.log("nao reconheci")
    break; 
}