interface Aluno {
    nome: string,
    matricula: number,
    ativo: boolean
}

let alunos : Aluno[] = [
    {   nome: "Lwkas",
        matricula: 20231094040039,
        ativo: true },
    {   nome: "Theo",
        matricula: 20231094040031,
        ativo: false },
];

function filtrarAlunos(){
    let alunosAtivos = alunos.filter(aluno => aluno.ativo === true)
    return console.log (alunosAtivos)
}

filtrarAlunos()