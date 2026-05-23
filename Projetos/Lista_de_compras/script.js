let botao = document.getElementById("adicionar");

botao.addEventListener("click", function () {

    const input = document.getElementById("item");
    const texto = input.value.trim();

    if (texto !== "") {

        const li = document.createElement("li");
        li.innerText = texto;

        const excluir = document.createElement("button");

        excluir.innerText = "Excluir";

        excluir.addEventListener("click", function () {

            li.remove();

        });

        li.appendChild(excluir);

        document.getElementById("lista")
        .appendChild(li);

        input.value = "";
    }

});