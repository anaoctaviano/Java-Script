/*
    estoque = [
        [1,"Volante",10,"Prateleira 01"],
        [2,"Pedal",5,"Prateleira 02"],
        [3,"Câmbio",50,"Prateleira 03"],
        [4,"Calota",100,"Prateleira 02"],
        [id, nome, quantidade, localizacao]
]

*/
// ==========================================
// TRANSFORMANDO EM ARRAY DE OBJETO
// ==========================================

const estoque = [
    {
        id: 1,
        nome: "Volante",
        quantidade: 10,
        localizacao: "Prateleira 1"
    },
    {
        id: 2,
        nome: "Pedal",
        quantidade: 5,
        localizacao: "Prateleira 2"
    },
    {
        id: 3,
        nome: "Câmbio",
        quantidade: 50,
        localizacao: "Prateleira 3"
    },
    {
        id: 4,
        nome: "Calota",
        quantidade: 100,
        localizacao: "Prateleira 2"
    }
];


// ==========================================
// TRANSFORMANDO EM OBJETO DE OBJETOS 
// ==========================================


// ==========================================
// CADASTRAR PRODUTO
// ==========================================

function cadastrarProduto(nome, quantidade, localizacao) {
    
    const novoProduto = {
        id: estoque.length + 1,
        nome: nome,
        quantidade: quantidade,
        localizacao: localizacao
    }

    estoque.push(novoProduto);

    console.log("Cadastro realizado com sucesso!");

}

// ==========================================
// LISTAR ESTOQUE
// ==========================================

function listarEstoque() {
    for(const produto of estoque){
        console.log(
            `ID: ${produto.id} | ` +
            `Nome: ${produto.nome} | ` +
            `Quantidade: ${produto.quantidade} | ` +
            `Localização: ${produto.localizacao}`
        );
    }    
}


// ==========================================
// BUSCAR PRODUTO
// ==========================================

function buscarProduto(idBuscado) {
    for(const produto of estoque){
        if(produto.id === idBuscado){
            console.log("Produto encontrado!");

            console.log(
                `ID: ${produto.id} | ` +
                `Nome: ${produto.nome} | ` +
                `Quantidade: ${produto.quantidade} | ` +
                `Localização: ${produto.localizacao}`
            );
            return produto;
        }
    }   
    console.log("Não encontramos o produto!");
}


// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================

function atualizarQuantidade(idBuscado, novaQuantidade) {
    for(produto of estoque){
        if(produto.id === idBuscado){
            produto.quantidade = novaQuantidade;
            console.log("Quantidade Atualizada!");
            return;
        }
    }
    console.log("Produto não encontrado!")
}


// ==========================================
// DELETAR PRODUTO
// ==========================================

function deletarProduto(){
}

// ==========================================
// TESTANDO O SISTEMA
// ==========================================

console.log("------------ Cadastrando um novo produto ------------");
cadastrarProduto("Motor", 13, "Prateleira 2");

console.log("\n------------ Listando o Estoque ------------");
listarEstoque();

console.log("\n----------- Buscando um produto ------------");
buscarProduto(3);

console.log("\n------------ Atualizar a quantidade ------------");
atualizarQuantidade(3, 30);
listarEstoque();

console.log("\n------------ Deletando um produto ------------");
deletarProduto(2);
listarEstoque();