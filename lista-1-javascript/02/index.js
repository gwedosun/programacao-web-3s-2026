const readline = require('node:readline');

const numeroEscolhido = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function escolherNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

numeroEscolhido.question(`Escolha:
    1 - Pedra
    2 - Papel
    3 - Tesoura
    Sua escolha: `, (resposta) => {
        let numMaquina = escolherNumero(1, 3);
        let numUsuario = Number(resposta);

        const nomes = {1: 'pedra', 2: 'papel', 3: 'tesoura'};

        if (numUsuario === numMaquina) {
            console.log(`Há um empate! Ambos escolheram ${nomes[numUsuario]}.`);
        } else if (
            (numUsuario == 1 && numMaquina == 3) ||
            (numUsuario == 2 && numMaquina == 1) ||
            (numUsuario == 3 && numMaquina == 2)
        ) {
            console.log(`Você venceu! :) Você escolheu ${nomes[numUsuario]} e a máquina escolheu ${nomes[numMaquina]}.`);
        } else {
            console.log(`Você perdeu :( Você escolheu ${nomes[numUsuario]} e a máquina escolheu ${nomes[numMaquina]}.`);
        }
''
    numeroEscolhido.close();
});