//#region -  Manipulação básica

console.log("---------- Atividade 1 ----------");

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexirica"];

/*
    Adicione "Morango" no final.
    Adicione "Abacaxi" no início.
    Remova o último elemento.
    Remova o primeiro elemento.
    Mostre a quantidade de frutas.
*/

console.log("---------- Adicionando morango no final ----------");

frutas.push("Morango");
console.log(frutas);


console.log("---------- Adicionando abacaxi no início ----------");

frutas.unshift("Abacaxi");
console.log(frutas);


console.log("---------- Remova o último elemento ----------");

frutas.pop();
console.log(frutas);


console.log("---------- Remova o primeiro elemento ----------");

frutas.shift();
console.log(frutas);


console.log("---------- Mostre a quantidade de frutas ----------")

console.log(frutas.length);

//#endregion

//#region - forEach

console.log("---------- Atividade 2 ----------");

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 

nomes.forEach((nome) => {
    console.log(`Olá, ${nome}!`);
})

//#endregion

//#region map

console.log("---------- Atividade 3 ----------");

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.

const precosAcrescidos = precos.map((preco) => {
    return ((preco * 10 / 100) + preco);
});
console.log(precosAcrescidos);


//#endregion

//#region filter

console.log("---------- Atividade 4 ----------");

const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.

const numerosMaioresQue20 = numeros.filter((numero) => {
    return numero > 20;
});

console.log(numerosMaioresQue20);


//#endregion

//#region find

console.log("---------- Atividade 5 ----------");

const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.

const maiorQue20 = listaNumeros.find((n) => n > 20);
console.log(maiorQue20);

//#endregion

//#region some

console.log("---------- Atividade 6 ----------");

const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar!

const maiorIdade = idades.some(i => i >= 18);
console.log(maiorIdade);

//every

console.log("---------- Atividade 7 ----------");

//Usando o array acimima codifique respondendo: Todos são maiores de idade?

const maiorIdade2 = idades.every(i2 => i2 >= 18);
console.log(maiorIdade2);

//#endregion

//#region reduce

console.log("---------- Atividade 8 ----------")

const valores = [100, 200, 50, 150];

//Calcule o valor total.

const soma = valores.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(soma);

//#endregion