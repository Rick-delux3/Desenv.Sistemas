const listar = Treinador.carregarLocalStorage();

document.getElementById("area-cards").innerHTML +=
    listar.map(t => t.exibirTreinadores()).join("");