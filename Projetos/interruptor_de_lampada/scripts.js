let lampada = document.getElementById("lampada");
let ligar = document.getElementById("ligado");
let desligar = document.getElementById("desligado");

lampada.src = "./imagem_desligada.jpeg";
ligar.addEventListener("click", function () {

    lampada.src = "./imagem_acessa.jpeg";

});

desligar.addEventListener("click", function () {

    lampada.src = "./imagem_desligada.jpeg";

});