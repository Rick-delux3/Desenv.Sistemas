let jogos = [
    {nome:"GTA_VI", anoLancamento:"2026"},
    {
        nome:"Bloodborn", anoLancamento:"2014"
    },
];

function exibirJogo() {
    let output = document.querySelector("#listar");
    output.innerHTML = "";
    //limpar o campo
    

    jogos.forEach(jogo => {
        output.innerHTML +=(`Nome: ${jogo.nome} | Ano do lançamento: ${jogo.anoLancamento} <br>`);
    });
}

function adicionarJogo() {
    let input_nome = document.querySelector("#input-name").value;
    let input_lancamento = document.querySelector("#input-lancamento").value;


    if (input_nome && input_lancamento) {
        jogos.push({
            nome:input_nome,
            anoLancamento:input_lancamento
        });
        alert("jogo cadastrado com sucesso!")
        exibirJogo()
        limparCampos()
    }
    else{
        alert("Dados inválidos");
    }
    
}
function limparCampos() {
    let input_nome = document.querySelector("#input-name");
    input_nome.value = ""
    let input_lancamento = document.querySelector("#input-lancamento");
    input_lancamento.value = "";
}

function buscarJogo(){
    let nomeBusca = document.querySelector("#nomeBusca").value.toLowerCase();

    // alocando os dados da busca em uma variavel
    let resultados = jogos.filter(jogo => jogo.nome.toLowerCase().includes(nomeBusca));
    //filter = função para localizar informações no vetor
    //includes é o termo a ser encontrado

    //console.log(resultado)
    let output = document.querySelector("#resultadobusca");
    output.innerHTML = "";
    if (resultados.length>0) {
        resultados.forEach(resultado => {
            output.innerHTML +=(`Nome: ${resultado.nome} | Ano do lançamento: ${resultado.anoLancamento} <br>`);
        });
        
    }
    else{
        output.innerHTML = "<h3>Nenhum jogo encontrado!!</h3>";
    }
}
