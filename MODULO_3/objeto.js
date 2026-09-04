/*
    Um objeto representa uma "coisa" do mundo real através de propriedades e comportamentos

    const nome = [] array
    const nome = {} objeto
    const arrayDeObjeto  [{}, {}, {}] <-- Mais comum
    const objetoDeObjeto {{}, {}, {}} <-- Pode rolar também
*/

//#region--- Construindo um objeto

console.log("-------- Construindo um Objeto --------")

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

console.log(aluno);

// Acessando propriedades do objeto
console.log("-------- Acessando Propriedades do Objeto --------")

console.log(aluno.nome);

// Regra: se cadastroAtivo = true, msg = seja bem-vindo ao nosso sistema

if(aluno.cadastroAtivo === true){
    console.log(aluno.nome + ", seja bem-vindo ao nosso sistema!");
}

else{
    console.log("O seu cadastro não está ativo, procure as RH.")
}

console.log(aluno.endereco.rua);

// Alterar propriedades do objeto
console.log("-------- Alterando Propriedades do Objeto --------");

console.log("Alterando a idade:");

aluno.idade = 18;

console.log(aluno.idade);

// Alterar o cadastroAtivo e bairro

console.log("Alterando o cadastro ativo e o bairro:");

aluno.cadastroAtivo = false;
aluno.endereco.bairro = "Jardim Lagoinha";

console.log(aluno.cadastroAtivo);
console.log(aluno.endereco.bairro);

//Adicionando propriedades
console.log("-------- Adicionando Propriedades --------");

// Adicionando o CPF e o telefone

aluno.cpf = 98712345687;
aluno.telefone = "(19)93432-2345";
console.log(aluno);

// Deletar uma propriedade
console.log("-------- Deletando uma Propriedade --------");

delete aluno.curso;
console.log(aluno);

//#endregion



