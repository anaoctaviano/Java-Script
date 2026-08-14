// Atividade 1 - Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".
console.log("---------- Atividade 1 ----------");

const idade = 25;

if (idade >= 18){
    console.log("Maior de idade");
}
else{
    console.log("Menor de idade");
}

//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.
console.log("---------- Atividade 2 ----------");

const nota = 6;

// if/else

if (nota < 5){
    console.log("Reprovado");
}
if (nota >= 5 && nota < 7){
    console.log("Recuperação");
}
else if (nota >= 7){
    console.log("Aprovado");
}

// switch case


switch(true){
    case (nota < 5):
        console.log("Reprovado");
        break;

    case (nota >= 5 && nota < 7):
        console.log("Recuperação");
        break;

    case (nota >= 7):
        console.log("Aprovado");
        break;

    default:
        console.log("Valor não encontrado");
}

//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.
console.log("---------- Atividade 3 ----------");

const usuario = "Ana";
const senha = 9110;

if (usuario === "Ana" && senha === 9110){
    console.log("Pode acessar o sistema");
}
else{
    console.log("Não pode acessar o sistema");
}

//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído). Switch
console.log("---------- Atividade 4 ----------");

const statusPedido = "pendente";

switch(statusPedido){

    case "pendente":
        console.log("Pedido pendente");
        break;

    case "pago":
        console.log("Pedido pago");
        break;

    case "enviado":
        console.log("Pedido enviado");
        break;

    case "processando":
        console.log("Processando o pedido");
        break;
        
    case "entregue":
        console.log("Pedido entregue");
        break;

    case "concluído":
        console.log("Pedido concluído");
        break;

    default:
        console.log("Status do pedido não encontrado");
}

//Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.
console.log("---------- Atividade 5 ----------");

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Atividade 6 - Refaça o exercicio 5 agora usando for...of e while.
console.log("---------- Atividade 6 ----------");

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For...of
console.log("Com for...of:");

for(const numero of lista){
    if(numero % 2 === 0){
        console.log(numero);
    }
}

// While
console.log("Com while:");

let contador = 1;

while(contador <= 100){
    if(contador % 2 === 0){
        console.log(contador);    
    }
    contador++;
}


//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.
console.log("---------- Atividade 7 ----------");

const nomes = ["Ana Vitória", "Larissa", "Maria Eduarda", "João", "Yasmin", "Carlos", "Beatriz", "Caio", "Felipe", "Pedro"];

for(const nome of nomes){
    console.log(nome);
}

//Atividade 8 - Crie um array com 10 nomes e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 
console.log("---------- Atividade 8 ----------");

const nomesNovos = ["Ana", "Beatriz", "Felipe", "Maria Eduarda", "João", "Larissa", "Murilo", "Gustavo", "Caio", "Miguel"];

for(const nome of nomesNovos){
    if(nome.length > 5){
        console.log(nome);
    }
}

//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/
console.log("---------- Atividade 9 ----------")

const numeros = [10, 20, 30, 40, 50];

let soma = 0;

for(num of numeros){
    soma = soma + num;
}
console.log(soma);

//Atividade 10 — Desafio do backend 
/* 
    Dado o array abaixo, mostre somente os pedidos pagos 
*/
console.log("---------- Atividade 10 ----------")

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];

for(let i = 0; i < pedidos.length; i++){
    if(pedidos[i].pago === true){
        console.log(pedidos[i]);
    }
}

console.log("Usando o for...of:")
for(let pedido of pedidos){
    if(pedido.pago === true){
        console.log(pedido);
    }
}


