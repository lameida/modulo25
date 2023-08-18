const alunos = [
  { nome: "Alice", nota: 8 },
  { nome: "Bob", nota: 4 },
  { nome: "Carol", nota: 7 },
  { nome: "David", nota: 9 },
  { nome: "Eva", nota: 5 },
];


function alunosAprovados(arrayDeAlunos) {
  const aprovados = arrayDeAlunos.filter(aluno => aluno.nota >= 6);
  return aprovados;
}


const alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);