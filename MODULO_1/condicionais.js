//#region Antes só tru or false
/*
const idade = 20;

console.log(idade >= 18);
*/
// Teste de idade
// Agora podemos tomar decisões com essa resposta
/*
const idade = 20

if (idade >= 18){
    console.log("Maior de idade")
}
    */
//#endregion

//#region
/*
const idade = 16;

if (idade >= 18){
    console.log("Maior de idade");
}
else{
    console.log("Menor de idade");
}
*/
//#endregion


//#region Nota com casa decimal muito grande
const nota = 6.99;
const notaArredondada = Number(nota.toFixed(2));
console.log(notaArredondada);
// aprovado >= 7, reprovado <= 4, recuperação 5 e 6

if (notaArredondada < 5){
    console.log("Reprovado");
}
if (notaArredondada >= 5 && notaArredondada < 7){
    console.log("Recuperação");
}
else if (notaArredondada >= 7){
    console.log("Aprovado")
}
//#endregion

//#region
const senha = 20;
const email = "dddddd@gmail.com"
const ativo = true;

if (senha === 18 && email === "dddddd@gmail.com" && ativo){
    console.log("Usuário autorizado");
}
else{
    console.log("Usuário não autorizado");
}
//#endregion

//#region Switch case
const dia = 6

switch(dia){
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
        console.log("Terça-feira");
        break;

    case 4:
        console.log("Quarta-feira");
        break;

    case 5:
        console.log("Quinta-feira");
        break;

    case 6:
        console.log("Sexta-feira");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia não encontrado")

}

/*
    Quando usar o switch case?
    - Quando temos muitas condições para verificar.
    - Quando temos uma variável que pode ter muitos valores diferentes.
    - Quando queremos deixar o código mais legível.

    Quando usar if/else?
    - Quando temos poucas condições para verificar.
*/
//#endregion

//#region Operador Ternario
// Abstração de if/else

/*
const idade = 20;
let mensagem;

if (idade >= 18){
    mensagem = "Maior";
}
else{
    mensagem = "Menor";
}
*/

// Pode refazer com operador ternario

const idade = 20;
const mensagem = idade >= 18 ? "Maior" : "Menor";
console.log(mensagem);

// constante = condição ? valor se true : valor se else

/*
    Quando usar o operador ternário?
    - Quando temos uma condição simples.
    - Quando queremos deixar o código mais legível.
*/
//#endregion

//#region Laços

// while; for

//#region While - enquanto for verdade
/*
let contador = 1;

while(contador <= 6){
    console.log(contador);
    contador++;
}
*/
//#endregion

//#region For 

// for(iniciação; condição; incremento)
/*
for(let i = 1; i <= 5; i++){
    console.log(i);
}
*/

// for...of
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];

// Otimizado para array
for(const fruta of frutas){
    console.log(fruta);
} 

// Tradicional
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

//#endregion

//#endregion

