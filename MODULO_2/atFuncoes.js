//Atividade 1 — Saudação
//Crie uma função chamada saudacao que receba um nome e retorne uma mensagem.
//Resultado esperado : Olá, Maria!
console.log("---------- Atividade 1 ----------");

const nome = "Ana";

function saudacao(nome){
    console.log("Olá, " + nome + "!");
}

saudacao(nome);

//----------------------------------------------------------------------

//Atividade 2 — Calculadora
//Crie quatro funções para cada uma das operações +, -, *, /
//Cada função deve receber dois números e retornar o resultado.

console.log("---------- Atividade 2 ----------");

console.log("----- Soma -----");
function somar(numero1, numero2){
    console.log(numero1 + numero2);
}
somar(59, 48);

console.log("----- Subtração -----");
function subtrair(numero1, numero2){
    console.log(numero1 - numero2);
}
subtrair(100, 63);

console.log("----- Multiplicação -----");
function multiplicação(numero1, numero2){
    console.log(numero1 * numero2);
}
multiplicação(50, 3);

console.log("----- Divisão -----");
function divisao(numero1, numero2){
    console.log(numero1 / numero2);
}
divisao(200, 10);


//----------------------------------------------------------------------

//Atividade 3 — Verificação de idade
//Crie uma função que receba uma idade e retorne: Menor de idade ou Maior de idade

console.log("-------- Atividade 3 --------");

const idade = 17;

function maiorIdade(idade){
    if(idade >= 18){
        console.log("Maior de idade");
    }
    
    else{
        console.log("Menor de idade")
    }
}
maiorIdade(idade);

//----------------------------------------------------------------------

//Atividade 4 — Arrow Function

/*

    Transforme:
        function calcularDobro(numero) {
            return numero * 2;
        }

    em uma arrow function.
*/

console.log("-------- Atividade 4 --------");


const calcularDobro = (numero) => {
    return numero * 2
}
console.log(calcularDobro(14))

//----------------------------------------------------------------------
