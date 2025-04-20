type Pessoa = {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa1: Pessoa = {
    nome: "Lwkas",
    idade: 21,
    profissao: "Programador"
}

function descreverPessoa(pessoa1: Pessoa){
    return console.log("Informações:", 
        "\nNome: ", pessoa1.nome, 
        "\nIdade: ", pessoa1.idade,
        "\nProfissão: ", pessoa1.profissao,
    )
}

descreverPessoa(pessoa1)