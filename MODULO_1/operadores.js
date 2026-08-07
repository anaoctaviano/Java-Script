//#region Start Operadores
/*
const idade = 20;

console.log(idade <= 18);
*/
//#endregion

//#region Operadores Matemáticos
/*
const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // Resto da divisão
*/
//#endregion

//#region Operadores de Comparação
/*
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); // Comparação de valor
console.log(a === b); // Comparação de valor e tipo
console.log(a !== b);
*/
//#endregion

//#region Exercício

/* Exercício: Aplicando operadores de comparação com variáveis
   Faça as comparações a partir da variável informada
*/
/*
const idade1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2);
console.log(idade1 === idade2);
console.log(idade1 !== idade2);
*/
//#endregion

//#region Operadores Lógicos
/*
const idade3 = 17;
const idade4 = 15;

// Operador Lógico AND
console.log(idade3 > 18 && idade4 > 18); // Todas precisam ser verdadeiras

// Operador Lógico OR
console.log(idade3 > 18 || idade4 > 18); // Uma precisa ser verdadeira

// Operador Lógico NOT
console.log(!(idade3 > 18)); // Inverte o valor da expressão
*/
//#endregion

//#region Combinando Operadores
/*
const idade = 25;
const matriculaAtiva = true;

const podeComprar = idade >= 18 && matriculaAtiva;

console.log(podeComprar);
*/
//#endregion

//#region Operadores de Incremento e Decremento
/*
let numero = 10;

console.log(numero ++); // 10
console.log(numero); // 11
console.log(++numero); // 12

console.log(numero--); // 12
console.log(numero); // 11
console.log(--numero); // 10
*/
//#endregion

//#region Exercício 1 - Comparação
// Faça comparação a partir da variável informada
/*
const x = 5;
const y = 10;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);
console.log(x !== y);
*/
//#endregion

//#region Exercício 2 - == vs ===
// Verifique os resultados das comparações a seguir
/*
console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);
*/
//#endregion

//#region Exercício 3 - Sistema de acesso - Desafio

const dataNascimento = new Date("2009-09-11");
const ativo = true;
/*
    Crie uma expressão que indique se o usuário pode acessar o sistema
    Regra: O usuário precisa ter pelo menos 18 anos e estar ativo
*/

// Transformando 18 anos em milissegundos
const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

// Comparando milissegundos com milissegundos
const podeAcessar = (new Date() - dataNascimento) >= dezoitoAnosEmMilisegundos && ativo;

console.log(podeAcessar)




