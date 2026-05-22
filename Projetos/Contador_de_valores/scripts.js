let bnt_adicionar = document.getElementById("adicionar");
let bnt_subtrair = document.getElementById("subtrair");
let bnt_contagem = document.getElementById("contagem");

let valor = 0



bnt_adicionar.addEventListener("click",() => {
    
    valor = valor + 1
    bnt_contagem.textContent = valor;
    

    
});

bnt_subtrair.addEventListener("click",() => {
   
    valor = valor - 1
    bnt_contagem.innerText = valor;
}
)


;