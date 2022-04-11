const alunos = [
    { aluno: 'João', nota: 10 },
    { aluno: 'Ana', nota: 8 },
    { aluno: 'Fernando', nota: 9 },
    { aluno: 'Bia', nota: 10 }
];

let index = 0;
let somaDasNotas = 0;
let totalAlunos = alunos.length;

do {
    somaDasNotas += alunos[index].nota;

    index;
} while (index < totalAlunos);

let media = somaDasNotas / totalAlunos;

console.log(media);