"use strict";
let pessoa1 = {
    nome: "Lwkas",
    idade: 21,
    profissao: "Programador"
};
function descreverPessoa(pessoa1) {
    return console.log("Informações:", "\nNome: ", pessoa1.nome, "\nIdade: ", pessoa1.idade, "\nProfissão: ", pessoa1.profissao);
}
descreverPessoa(pessoa1);
