// Exercício 01
// Crie um script que exiba um alerta no navegador com a seguinte mensagem: "Hello World"
alert("Hello World");

// Exercício 02
// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let var1, var2;
var1 = prompt("Digite o primeiro número: ");
var2 = prompt("Digite o segundo número: ");
console.log("Resposta Exe. 02: ");
console.log(`Resultado da soma: ${parseFloat(var1) + parseFloat(var2)}`);

// Exercício 03
// Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
var1 = 5;
if(typeof var1 == "number"){
    console.log("Resposta Exe. 03: ");
    console.log("É um número");
}else{
    console.log("Resposta Exe. 03: ");
    console.log("Não é um número");
}

// Exercício 04
// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
var1 = "Sou uma String";
if(typeof var1 == "string"){
    console.log("Resposta Exe. 04: ");
    console.log("É uma string");
}else{
    console.log("Resposta Exe. 04: ");
    console.log("Não é uma string");
}

// Exercício 05
// Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
var1 = false
if(typeof var1 == "boolean"){
    console.log("Resposta Exe. 05: ");
    console.log("É um booleano");
}else{
    console.log("Resposta Exe. 05: ");
    console.log("Não é um booleano");
}

// Exercício 06
// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
var1 = 15;
var2 = 47.50;
console.log("Resposta Exe. 06: ");
console.log(`Resultado da subtração: ${var1 - var2}`);

// Exercício 07
// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// --> As variáveis foram reaproveitadas com os valores que já possuíam do exercício anterior! 😊 <--
console.log("Resposta Exe. 07: ");
console.log(`Resultado da multiplicação: ${var1 * var2}`);

// Exercício 08
// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
// --> As variáveis foram reaproveitadas com os valores que já possuíam do exercício anterior! 😊 <--
console.log("Resposta Exe. 08: ");
console.log(`Resultado da divisão: ${(var2 / var1).toFixed(2)}`);

//Exercício 09
// Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
var1 = 20;
if(var1 % 2 == 0){
    console.log("Resposta Exe. 09: ");
    console.log("O número é par!");
}else{
    console.log("Resposta Exe. 09: ");
    console.log("Não é um número par!");
}

// Exercício 10
// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
// --> As variáveis foram reaproveitadas com os valores que já possuíam do exercício anterior! 😊 <--
if(var1 % 2 != 0){
    console.log("Resposta Exe. 10: ");
    console.log("O número é ímpar!");
}else{
    console.log("Resposta Exe. 10: ");
    console.log("O número não é ímpar!");
}