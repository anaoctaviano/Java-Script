console.log("----------- Função de exibir mensagem ----------");

function quandoClicarNoBotao(){
    console.log("Obrigado por comprar em nossa loja");
}
// Invocação da função
quandoClicarNoBotao();

//--------------------------------------

function exibirMensagem(){
    console.log("Bebam água");
}
exibirMensagem();

// Mais simples de tudo (parametros)
//---------------------------------------
console.log("---------- Funções de soma ----------");

function somar(){
    const resultado = 8 + 3;
    console.log(resultado);
}
somar();

// ---------- Reutilizável ------------

function somar2(numero1, numero2){
    console.log(numero1 + numero2);
}
somar2(8, 3);
somar2(10, 20);
somar2(128, 256);

//---------------------------------------

function somar3(numero1, numero2){
    return(numero1 + numero2);
}

const resultado = somar3(8, 3);

if (resultado >= 11){
    console.log("O Senai é massa");
}

else{
    console.log("Ainda é massa")
}

/* 
    console.log() é como mostrar o resultado em uma tela.

    return é como entregar o resultado para outra parte do programa utilizar
*/

console.log("---------- Função de calcular desconto ----------");

function calcularDesconto(valor, desconto){
    return valor - desconto;
}

// Valor final com desconto
const valorFinal = calcularDesconto(400, 20);
console.log(valorFinal);

// Imposto sobre o produto
const valorImposto = valorFinal * 0.04;
console.log("Valor tributário: " + valorImposto);

// CashBack
if(valorFinal > 50){
    const cashBack = valorFinal * 0.10;
    console.log("Vaor do CashBack: " + cashBack);
}

console.log("---------- Regras de Parcelamento ----------");

/* Regra de Parcelamento
    R$ 100 já começa a parcelar e tem juros de 2% do total

    Pra ser sem juros compras acima de R$ 399

    o limite é 6 parcelas.

*/

function parcelamento(valorFinal){
    if(valorFinal > 399){
    // Compras acima de 399: sem juros
    const valorParcelado = valorFinal / 6;
    console.log("Valor das parcelas 6x sem juros: R$ " + valorParcelado)
    }

    else if(valorFinal >= 100){
    // Compras entre 100 e 399: com 2% de juros no total
    const valorParcelado = (valorFinal * 1.02) / 6;
    console.log("Valor das parcelas 6x com juros: R$ " + valorParcelado);

    }

    else{
        // Compras abaixo de 100: não parcela 
        console.log("O valor não atinge o mínimo de 100 reais para parcelamento");
    }
}
parcelamento(valorFinal);


