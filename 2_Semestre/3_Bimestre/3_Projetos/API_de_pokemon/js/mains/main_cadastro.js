document.getElementById("formTreinador").addEventListener("submit", function(e){
    e.preventDefault();

    Treinador.carregarLocalStorage();

    const nome = document.getElementById("name").value;
    const sobrenome = document.getElementById("last_name").value;
    const regiao = document.getElementById("regiao").value;
    const bio = document.getElementById("bio").value;

    const novoTreinador = new Treinador(nome, sobrenome, regiao, bio);
    Treinador.adicionarTreinador(novoTreinador);
    e.target.reset();

    alert("Treinador Cadastrado com sucesso")
});


