// Se o usuário digitar a quantidade de termos igual a 5, o resultado será:
// 1 + 11 + 111 + 1111 + 11111
// A soma é: 12.345

const readline = require('node:readline');

const numTermos = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

numTermos.question('Digite o número de termos: ', (numero) => {
    const arrayNumeros = [];
    let algarismo = '1';

    for (let i = 1; i <= numero; i++) {
        let termos = algarismo.repeat(i);
        arrayNumeros.push(termos);
        // console.log(termos);
    }

    const calculo = arrayNumeros.map(Number);
    const soma = calculo.reduce((adiciona, valorAtual) => adiciona + valorAtual, 0);
    console.log(soma);

    numTermos.close();
});