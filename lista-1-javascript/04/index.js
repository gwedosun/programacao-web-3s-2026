// 4 - Crie um programa que desenha um triângulo de asteriscos (*) no console, onde o
// número de linhas é especificado pelo usuário.

const readline = require('node:readline');

const numEscolhido = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

numEscolhido.question('Digite o número de linhas desejadas: ', (numero) => {
    console.log(`Aqui está o seu triângulo com ${numero} linhas: `);

    let asterisco = "*";
    for (let i = 1; i <= numero; i++) {
        console.log(asterisco.repeat(i));
}

    numEscolhido.close();

});