const readline = require('readline');

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 20) + 1;

const jogar = () => {
    terminal.question('Adivinhe o número (1 a 20): ', (chute) => {
        const palpite = parseInt(chute);

        if (palpite === numeroSecreto) {
            console.log('Parabéns! Você acertou!');
            terminal.close();
        } else {
            if (palpite > numeroSecreto) {
                console.log('O número secreto é menor!');
            } else {
                console.log('O número secreto é maior!');
            }
            jogar();
        }
    });
};

jogar();