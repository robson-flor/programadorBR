// MANEIRAS DE CRIAR UM OBJETO

var x = {
  key: "value",
};
console.log(x);
// ------------------------------
function obj(n, s) {
  return {
    nome: n,
    sobrenome: s,
  };
}
var b = obj("Robson", "Flor")
console.log(b)
console.log(b.nome + " De Souza " + b.sobrenome + " Pereira")
// -----------------------------------------------------------------
function objeto (p, a) {
  this.peso = p;
  this.altura = a;
}

var medida = new objeto(68, 165);
console.log(medida)