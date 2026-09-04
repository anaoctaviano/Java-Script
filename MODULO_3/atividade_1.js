//#region --- Atividade 1

/*
    - mostrar o título;
    - alterar o ano;
    - adicionar diretor;
    - remover genero;
    - mostrar o objeto final.
*/

const filme = {
    titulo: "Victória e Mistério",
    ano: 2021,
    genero: "Aventura, Família, Drama",

    apresentar: function(){
        console.log("O melhor filme: " + filme.titulo); //resultado igual
        // Usando this
        console.log(`O melhor filme: ${this.titulo}`); //resultado igual
    }
}


console.log("----- Mostrando apenas o título -----");

console.log(filme.titulo);

// Alterando o ano
filme.ano = 2022;

// Adicionando o diretor do filme
filme.diretor = "Denis Imbert";

// Deletando o genero do filme
delete filme.genero;

console.log("----- Mostrando o objeto final -----");
console.log(filme);

//-----------------

console.log("------ Função dentro do objeto -----");
filme.apresentar();

//#endregion