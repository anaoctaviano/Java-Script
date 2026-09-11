// Callback

/*
    Se vc pedir uma operação que demora muito o node não precisa esperar parado
*/

/*
console.log("1");
console.log("2");
console.log("3");
*/

// Sincronismo

// -------------------------------------------------------

/*
console.log("Início");

setTimeout(() => {
    console.log("Terminou Depois");
}, 2000);

console.log("Fim")
*/

// Callback é uma função passada para outra função para ser executada posteriormente

// console.log("---------------------------------");

// numeros = [1, 2, 3, 4, 6, 7, 90];

// numeros.forEach((n) => {
//     console.log(n);
// });

// Isso é callback
/* (n) => {
    console.log(n); */

// console.log("---------------------------------");

/*
function processarUsuario(nome, callback) {
    console.log("Processando " + nome);
    callback();
}

processarUsuario("Ana", () => {
    console.log("Usúario processado");
});
*/
console.log("---------------------------------");

//3
function buscarUsuario(callback) {
    // Simulação de tempo
    setTimeout(() => {
        // Construindo objeto
        const usuario = {
            id: 1,
            nome: "Rihanna"
        };
        callback(usuario);
    }, 2000)
}
//1
console.log("Início da chamada");

//2
buscarUsuario((usuario) => {
    console.log(usuario);
});

//4
console.log("Fim do processo");

// Problema do callback