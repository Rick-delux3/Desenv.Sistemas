document.getElementById("formTreinador").addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("name").value;
    const sobrenome = document.getElementById("last_name").value;
    const regiao = document.getElementById("regiao").value;
    const bio = document.getElementById("bio").value;

    const novoTreinador = new Treinador(nome, sobrenome, regiao, bio);
    Treinador.lista.push(novoTreinador);
    Treinador.salvarLocalStorage();
    Treinador.atualizarTela();

    e.target.reset();
});


