function mensagemPersonalizada(tipo: string | number){
    if (typeof tipo === "string"){
        return console.log("Você digitou uma string:", tipo);
    } else {
        return console.log("Você digitou um número:", tipo);
    }
}

mensagemPersonalizada("Lwkas");
mensagemPersonalizada(21);