type Livro = {
    titulo: string;
    autor: string;
    paginas: number;
}

let livro1: Livro = {
    titulo: "Aprendendo TypeScript",
    autor: "Lwkas",
    paginas: 50,
}

console.log("O título do livro: ", livro1.titulo, "foi escrito por", livro1.autor, "e tem", livro1.paginas, "páginas.");
