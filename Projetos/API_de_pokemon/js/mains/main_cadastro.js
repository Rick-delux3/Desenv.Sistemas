document.getElementById("formTreinador").addEventListener("submit", function(e){
    e.preventDefault();

    Treinador.carregarLocalStorage();

    const nome = document.getElementById("name").value;
    const regiao = document.getElementById("regiao").value;
    const bio = document.getElementById("bio").value;
    const gender = document.getElementById("gender").value;
    const y = document.getElementById("idade").value;

    const novoTreinador = new Treinador(nome, regiao, bio, gender, y);
    Treinador.adicionarTreinador(novoTreinador);
    e.target.reset();

    alert("Treinador Cadastrado com sucesso!!");
});


