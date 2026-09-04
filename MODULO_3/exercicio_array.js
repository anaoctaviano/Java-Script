/*
Quero criar um novo array contendo apenas os nomes dos produtos que estão disponíveis.

const produtosDisponiveis = [];
*/

const produtos = [
    {nome: "Produto 1", disponivel: true},
    {nome: "Produto 2", disponivel: false},
    {nome: "Produto 3", disponivel: true},
    {nome: "Produto 4", disponivel: true}
];


// for of
console.log("---------- For of ----------");

const produtosDisponiveis = [];

for (const produto of produtos) {
    if (produto.disponivel === true) { // Não tem a necessidade de colocar o comparativo
        produtosDisponiveis.push(produto.nome);
    }
};
console.log(produtosDisponiveis);


// map e filter

// map
console.log("--------- Map e Filter ----------");

const prodDisponiveisMap = produtos
    .filter((produto) => produto.disponivel === true) // Não tem a necessidade de colocar o comparativo
    .map((produto) => produto.nome);

console.log(prodDisponiveisMap); 


