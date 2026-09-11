// Simulação 

// Função Auxiliar
const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms
    ));

// Função BuscarUsuario

async function buscarUsuario(Id) {
    await esperar(2000);

    return {
        id: Id, // O id a gente manda no executar
        nome: "Ana Vitória",
        cpf: "456.489.753-20"
    }
}

// Função BuscarPedidos

async function buscarPedidos(usuarioId) {
    await esperar(3000);

    const todosPedidos = [
        {id: 1, produto: "X-Tudo"},
        {id: 2, produto: "Coca-Cola"},
        {id: 3, produto: "X-Catupiry"}
    ];

    return todosPedidos.filter(pedido => pedido.id === usuarioId);
}

// Função executar

async function executar() {
    try{
        console.log("Iniciando simulação");
        console.log("Buscando usuário...");
        const usuario = await buscarUsuario(1);
        console.log("Usuario encontrado", usuario);

        // buscar pedido
        console.log("Buscando pedido pelo id...", usuario.id);
        const pedido = await buscarPedidos(usuario.id);
        console.log("Pedido encontrado:", pedido);

        // for (const pedido of pedidos) {
        //     if (pedido.id === usuario.id) {
        //         console.log("Pedido encontrado:", pedido);
        //     }
        // }

    }
    catch(erro){
        console.log("Deu errado");
    }
}

executar();