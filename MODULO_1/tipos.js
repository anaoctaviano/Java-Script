/*
const nome = "Ana Vitória"; 
const idade = 16; 
const programadora = true; 

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof programadora);
*/


// -------- TIPOS -------- //


// ------ String ------ //

/*
const nome = "Ana Vitória";
const cidade = "Santa Rita do Passa Quatro";
const idade = 16;
const altura = 1.53;
const possuiTatuagem = true;

// Forma 1 - Interpolação de string
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
console.log(`Minha cidade é ${cidade}`);
console.log(`Tenho ${altura} de altura`);
console.log(`Possui tatuagem: ${possuiTatuagem}`);

// Forma 2 - Concatenação de string
console.log("Meu nome é " + nome + " e tenho " + idade + " anos. Moro em " + cidade + ", tenho " + altura + " de altura. Possui tatuagem: " + possuiTatuagem);
*/


// -------------------------------------------- //

const altura = 1.75;
const temperatura = -10;

console.log(typeof altura);
console.log(typeof temperatura);


// ------- Boolean ------- //

let maiorDeIdade = true;
const idade = 20;

// Quero saber se é maior de idade

if(idade >= 18){
    console.log("Maior de idade");
}

else{
    maiorDeIdade = false
    console.log("Menor de idade")
    console.log(maiorDeIdade)
}
console.log(maiorDeIdade)


// ------- Undefined e null ------- //

let nome;

console.log(nome);

// Undefined: não possui um valor definido
// Null: não existe valor

let usuario = null;

console.log(usuario);
console.log(typeof usuario);

