const numeros = [1, 2, 3, 4, 5, 6];

// Map - Cria um novo array com os elementos modificados
console.log("---------- Map ----------");

const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
});
console.log(numerosDobrados);


// Filter - Cria um novo array com os elementos que atendem a uma condição
console.log("---------- Filter ----------");

const maioresQue3 = numeros.filter((numero) => {
    return numero > 3;
});
console.log(maioresQue3);

/*
| Método    | Pergunta                              |
| --------- | ------------------------------------- |
| 'forEach' | O que quero fazer com cada elemento?  |
| 'map'     | Como quero transformar cada elemento? |
| 'filter'  | Quais elementos quero manter?         |
*/


// Find - Procura um elemento que satisfaça uma condição
console.log("---------- Find ----------");

const numerof = numeros.find((n) => n > 4);
console.log(numerof);

/*
filter x find

    filter:
    => Retorna vários elementos

    find:
    => Retorna o primeiro elemento
*/


// Não é tanto usado no dia a dia, mas é bom saber que existe

// Some - Verifica se pelo menos um elemento atende a uma condição
// Retorna true ou false (boolean)
console.log("---------- Some ----------");

const existeMaiorQue5 = numeros.some(n => n > 5);
console.log(existeMaiorQue5);


// Every - Verifica se todos os elementos atendem a uma condição
// Retorna true ou false (boolean)
console.log("---------- Every ----------");

const todosMaioresQue0 = numeros.every(n => n > 0);
console.log(todosMaioresQue0);


// Reduce - Reduz o array a um único valor, aplicando uma função a cada elemento
console.log("---------- Reduce ----------");

const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0); // 0 é o valor inicial
console.log(soma);