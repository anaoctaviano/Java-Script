
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



// Destructuring

const {nome, idade, RM} = aluno;
console.log(nome);

// Renomeando a propriedade com Destructuring
console.log("----- Renomeando a propriedade com Destruturing -----")

const {nome: nomeCompleto} = aluno;
console.log(nomeCompleto)


// Spread operator ... Algo como espalhar
console.log("------ Spread Operator ------");

const dadosFamilia = {
    nomeMae: "Aline Octaviano",
    nomePai: "Leandro Octaviano",
};

const usuario = {
    ...aluno,
    ...dadosFamilia,
    dataCadastro: "28/08/26"
};

console.log(usuario);