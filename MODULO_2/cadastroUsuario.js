/* 
    objeto {}
    array []
*/

// Cadastro de Usuário

function cadastroUsuario(id, nome, senha, cpf, email){
    return {
        id,
        nome,
        senha,
        cpf,
        email
    };
}

const usuario = cadastroUsuario(1, "Ana Vitória", "ana#11", 65498732165, "x@gmail.com");

console.log(usuario);

// Com objeto eu agora consigo melhorar o que é exibido

console.log("Oi " + usuario.nome + " seu cadastro foi realizado com sucesso!");

//-----------------------------

console.log("--------- Função --------");

// Função Tradicional
function somarTra(numero1, numero2){
    return numero1 + numero2;
}

// Arrow function
const somar = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log("Tradicional: ", somarTra(8, 3)),
console.log("Arrow: ", somar(8, 3));
