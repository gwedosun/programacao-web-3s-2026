console.log('Teste de JavaScript, eba.')

// variaveis 

var animal = 'gato';
console.log(animal);
var animal = 'cachorro';
console.log(animal);

var valor1;
const valor0 = 10;
console.log(valor0);

valor1 = 12;
valor1 = 'gabi';
// valor0 = 14; // assignment to constant variable 

console.log(typeof valor1);

var nome = window.prompt('Nome: ');
console.log('Seja bem vindo(a),', nome);
console.log(`Seja bem-vindo(a), ${nome}, aproveite!`);

document.writeln(`Seja bem-vindo(a), ${nome}, aproveite!`);

soma = 2 + 4 * 2;
console.log(soma);

// criar um algoritmo que realize a soma de dois numeros
// o usuario devera informar os numeros e o programa retorna o resultado

var numero1 = parseInt(window.prompt('Insira um número: '));
var numero2 = parseInt(window.prompt('Insira mais um número: '));
soma = (numero1 + numero2);

console.log((soma));
