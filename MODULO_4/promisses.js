// Promisses 
// É uma promessa de que teremos um resultado no futuro 

// Formato
/* ((parametros ...) => {logica}); */

// Criando uma promisse

const promessa = new Promise((resolve, reject) => {
    const sucesso = false;

    if (sucesso === true) {
        resolve("Tudo certo!!");
    }

    else {
        reject("Deu errado!!")
    }
});

// Consumir a promisse

promessa
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((erro) => {
        console.log(erro)
    });