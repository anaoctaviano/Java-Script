// Dados iniciais
const dadosPessoais = {
    nome: 'Guilherme',
    matricula: '20260828',
    curso: 'Análise e Desenvolvimento de Sistemas' 
};

const dadosContato = {
    email: 'guilherme@email.com',
    telefone: '(11) 99999-9999'
};

// TODO 1: Mesclando objetos em perfil completo
console.log("------ TODO 1: Mesclando objetos em perfil completo ------");

const perfilCompleto = {
    ...dadosPessoais,
    ...dadosContato
}

console.log(perfilCompleto);


// TODO 2: Atualizando propriedades
// A partir do objeto 'dadosPessoais, use o spread operator para criar um novo objeto chamado 'perfilAtualizado'
// Você deve manter os dados originais, mas alterar o  'curso' para 'Engenharia de Software'
// e adicionar uma propriedade nova: 'status' com o valor 'Matriculado'
console.log("------ TODO 2: Atualizando propriedades ------");

const perfilAtualizado = {
    ...dadosPessoais,
    status: "Matriculado"
};

perfilAtualizado.curso = "Engenharia de Software";

console.log(perfilAtualizado);