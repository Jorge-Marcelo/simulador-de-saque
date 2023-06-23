/*Capiturar submit do formulario*/
const form = document.getElementById("form");
form.addEventListener("submit", function(evento){
evento.preventDefault();


/*Capiturando inputs do formulario*/
const inputSaldo = evento.target.querySelector("#saldo");
const inputSaque = evento.target.querySelector("#saque");

/*Capiturando valores dos inputs*/
const saldo = Number(inputSaldo.value);
const saque = Number(inputSaque.value);

/*
Autor: Jorge Marcelo
Data de Criação: 23/06/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
*/


/*Condição que vai verificar se os 
valores dos inputs são numeros*/
if(!saldo){
mostraResultado("Valor invalido digite um numero", false);
return;
}

if(!saque){
mostraResultado("Valor invalido digite um numero", false);
return;
}


/*Condição que vai verificar se os valores são maiores que outros*/ 
if(saldo >= saque){
const mensagem = (`Voce pode sacar, </br> Voce esta sacando ${saque}`);
mostraResultado(mensagem, true);

} else {
const mensagem = ("Voce não pode sacar, </br> O saldo não pode ser menor que o saque");
mostraResultado(mensagem, true);
}
})


/*Função que vai criar o resultado*/
function criaResultado(){
const p = document.createElement("p");
return p;
}

/*Função que vai criar a primeira mensagem de erro*/
function criaErro(){
const p2 = document.createElement("p");
return p2;
}

/*Função que vai criar a segunda mensagem de erro*/
function criaErro2(){
const p3 = document.createElement("p");
return p3;
}

/*Função que vai mostrar os resultados seja erro ou de sucesso*/ 
function mostraResultado(mensagem, isValid){
const sucesso = document.getElementById("resultado");
sucesso.innerHTML = "";


const erro = document.getElementById("erro");
erro.innerHTML = "";

const erro2 = document.getElementById("erro2");
erro2.innerHTML = "";


/*Constantes que vao chamar as funções de resultado*/
const p = criaResultado();
const p2 = criaErro();
const p3 = criaErro2();

/*Condicionais que vao verificar qual classe 
sera mostrada sera de erro ou de sucesso*/
if (isValid){
p.classList.add("sucesso");
p.innerHTML = mensagem;
sucesso.appendChild(p);


} else {
p2.classList.add("erro");
p2.innerHTML = mensagem;
erro.appendChild(p2);


p3.classList.add("erro2");
p3.innerHTML = mensagem;
erro2.appendChild(p3);
}
}