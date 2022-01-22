var alunos = new Array("Igor", "Jose", "Marcos", "Mariana");

console.log(alunos[0]);

var student = ["Igor", "Jose", "Marcos", "Mariana"];

for (i = 0; i < student.length; i++){
  console.log(student[i])
}
console.log("fim")

var students = ["valma", "roberio", "robson", "mayana"]

for (var student of students) {
  console.log(student);
}