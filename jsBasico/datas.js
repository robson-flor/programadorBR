// DESTA MANEIRA EU CRIO A DATA ATUAL
var d = new Date();

console.log(d);

// OUTRA MANEIRA DE CRIAR DATAS. POSSO OCULTAR PROPRIEDADES DA DATA TAMBÉM
var data = new Date(1000 * 60 * 60 * 24); //SE EU PASSAR SOMENTE 1 VALOR ELE SERÁ REFERENTE A MILISEGUNDOS;
console.log(data);
//PASSANDO STRING
var data1 = new Date("02 05 2017 23:25");
console.log(data1.getDay());