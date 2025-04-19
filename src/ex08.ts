interface Aluno {
    nome: string,
    matricula: number,
    ativo: boolean
}

let Aluno1 : Aluno = {
    nome: "Lwkas",
    matricula: 20231094040039,
    ativo: true
};

console.log("Informações do Aluno:", 
    "\nNome: ", Aluno1.nome, 
    "\nMatricula: ", Aluno1.matricula,
    "\nVínculo: ", Aluno1.ativo,
)