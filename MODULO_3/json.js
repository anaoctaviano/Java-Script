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


// Objeto x JSON

// Objeto passando para JSON
console.log("------ Objeto passando para JSON -----");

const json = JSON.stringify(aluno);
console.log(json);

// JSON passando para Objeto
console.log("----- JSON para Objeto -----");

const objeto = JSON.parse(json);
console.log(objeto);

