window.onload = () => {
    const listar = Treinador.carregarLocalStorage();

    if (listar.length > 0) {
        document.getElementById("area-cards").innerHTML =
            listar.map(t => t.exibirTreinadores()).join("");
    } else {
        alert("Nenhum treinador cadastrado!!");
    }
};