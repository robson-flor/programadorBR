// nome do aluno - nota 1 - nota 2 - media - aprovado ou repravado

var names = ["Igor", "Joao", "Pedro", "Maria"];
var grade1 = [5.9, 6.8, 7.8, 8.9];
var grade2 = [6.1, 6.4, 7.2, 7.5];

function media(n1, n2) {
  return (n1 + n2) / 2;
}

function passou(media) {
  if (media > 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

for (var i in names) {
  var nota1 = grade1[i];
  var nota2 = grade2[i];
  var m = media(nota1, nota2);

  console.log(
    names[i] + " - primeira nota: ",
    nota1 + ", segunda nota: " + nota2 + " media: " + m+" - "+passou(m)
  );
}
