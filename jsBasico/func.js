function media(n1,n2) {
  var nota1 = n1;
  var nota2 = n2;
  var media = (nota1 + nota2) / 2;
  // console.log(media);

  return media;
}

var resultado1 = media(6, 7);
var resultado2 = media(8, 9);

console.log(resultado1 + " E " + resultado2);



function saudacao() {
  return "Ola mundo!";
}
var s = saudacao();

console.log(s);

var media = function (n1, n2) {
  return (n1 + n2) / 2;
}
console.log(media(5, 6));


function media(n1,n2){
  
  var m = (n1 + n2) / 2;
  return m;
}

var res1 = media(6, 4);
var res2 = media(8, 9);

console.log("Media: " + res1 + " e " + res2)



function saudacao() {
  return "ola mundo!"
}

var s = saudacao();
console.log(s);


function media(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var media = (nota1 + nota2) / 2;
  return media;
}

var res = media(6, 7);
var m = media;

var res2 = m(2, 3);

console.log(res)
console.log(res2)

var media = function (n1, n2){
  return (n1 + n2) / 2;
}
console.log(media(3, 6));