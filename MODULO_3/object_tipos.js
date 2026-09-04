const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    RM: 87654,
    cadastroAtivo: true,
    email: null,
    hobby: ["ler", "bola", "xadrez"],
    endereco: {
        rua: "Rua 35, 405",
        bairro: "Jardim Itália",
        cidade: "Santa Rita do Passa Quatro",
        estado: "São Paulo",
        pais: "Brasil",
        cep: 13000560
    }
};

// Object.keys, Object.values e Object.entries

// Chaves do Objeto
console.log("------ Object.keys -----");

console.log(Object.keys(aluno));


// Valores do Objeto
console.log("----- Object.values -----");

console.log(Object.values(aluno));


// Relação chave <--> valor
console.log("----- Object.entries -----");

console.log(Object.entries(aluno));

