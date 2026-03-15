const readline = require('node:readline');

const numEscolhido = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

numEscolhido.question('Escolha um número de 1 a 10. ', (numero) => {
    console.log(`Aqui está a tabuada do número ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    };

    numEscolhido.close();
});