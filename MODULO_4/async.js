// Async

// No promisses temos 
buscarUsuario().then(usuario => {
    console.log(usuario);
});

// Async/Await
/* Essa função vai funcionar de forma assincrona e vai
    ter um pedaço que vamos precisar esperar */

// No Async-await
async function buscarUsuarioAsync() {
    try {
        // Aqui é o que eu quero que aconteça
        const usuario = await buscarUsuario();
        console.log(usuario);
    }
    catch (erro) {
        // Erro que aconteceu
        console.log(erro);
    }
}