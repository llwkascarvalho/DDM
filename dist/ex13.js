"use strict";
let produtos = [
    { nome: "Shampoo", emEstoque: true },
    { nome: "Condicionador", emEstoque: false },
    { nome: "Biscoito", emEstoque: true },
    { nome: "Bolacha", emEstoque: false },
];
function filtrarProdutosDisponiveis() {
    let produtoDisponiveis = produtos.filter(produto => produto.emEstoque === true);
    return console.log(produtoDisponiveis);
}
filtrarProdutosDisponiveis();
