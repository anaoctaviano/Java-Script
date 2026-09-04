/*---------- Array ----------*/

const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "pera"];

// Acessando elementos do array
console.log("---------- Acessando elementos do array ----------");

console.log(frutas[2]);
console.log(frutas[4]);

// Contando elementos do array
console.log("---------- Contando os elementos do array ----------");

console.log(frutas.length);

// Acessando o último elemento do array
console.log("---------- Acessando o último elemento do array ----------");

console.log(frutas[frutas.length - 1]);

// Alterando elementos do array
console.log("---------- Alterando elementos do array ----------");

frutas[1] = "morango";
console.log(frutas);

// Colocando no final do array
console.log("---------- Colocando um item no final do array ----------");

frutas.push("melancia");
console.log(frutas);

// Colcando no início do array
console.log("---------- Colocando um item no início do array ----------");

frutas.unshift("manga");
console.log(frutas);

// Deletando o último item do array
console.log("---------- Deletando o último item do array ----------");

frutas.pop();
console.log(frutas);

// Deletando o primeiro item do array
console.log("---------- Deletando o primeiro item do array ----------");

frutas.shift();
console.log(frutas);

console.log("---------- Mostrando o item deletado ----------");

const itemRemovido = frutas.pop();
console.log(itemRemovido);

// Varrendo o array
console.log("---------- Varrendo o array ----------");

// for of
console.log("----------for of ----------");

for (const fruta of frutas) {
    console.log(fruta);
    // return fruta; // Relembrando 
}

// forEach:
// Executa uma função para cada elemento do array.
// Eles fazem algo semelhante, mas forEach é específico para percorrer
// uma coleção e executar uma ação para cada elemento.
console.log("---------- forEach ----------");

frutas.forEach((fruta) => {
    console.log(fruta);
});

console.log("----------  Alterando para letras maiúsculas ----------")

frutas.forEach((fruta) => {
    const nomeFrutaPrimeiraLetraMaiuscula = 
        fruta.charAt(0).toUpperCase() + fruta.slice(1);
    console.log(nomeFrutaPrimeiraLetraMaiuscula);
});