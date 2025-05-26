let pais = [
    {
        cod: 1,
        nome: "China",
        presi: "Shang Chi",
        conti: "Asia"
        
    }
]


function exibirPaises(){
    let output = document.getElementsByClassName("exibir");
    output.innerHTML = ""

    pais.forEach(onu =>{
        output.innerHTML += `País: ${onu.nome} | <br> Presidente: ${onu.presi} | <br> Continente: ${onu.conti}`;

    })


}
function adicionarPais(){
    let input_cod = document.querySelector("#cod")
    let nome = document.querySelector("#nome").value;
    let presi = document.querySelector("#presi").value;
    let cont = document.querySelector("#Contin").value;

    if(nome && presi && cont){
        pais.push([{cod:input_cod, nome:nome, presi:presi, conti:cont}]);
        alert("Pais adicionado com sucesso!!")
        exibirPaises()
    }
    else{
        alert("Dados inválidos!!");
    }

}
function RemoverPais(){
    let input_pais = document.querySelector(".pais")

    let indice = pais.findIndex(pais => pais.cod == input_pais);

    let output = document.querySelector(".resultadoExcluir").value;

    if(indice != -1){

        pais.splice(indice,1)
    
        output.innerHTML = `<h3 style="color:green"> País ${input_pais} deserdado com sucesso!! </h3>`
        exibirPaises()
        limparCampos()

    }
    else{
        output.innerHTML = `<h3 style="color:red"> Não foi possivel identificar o país!! </h3>`;

    }

    
};

function limparCampos(){
    document.querySelector("#cod").value = "";
    document.querySelector("#presi").value = "";
    document.querySelector("#contin").value = "";


};


document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();






    let input_cod = document.querySelector("#cod").value;
    let input_Novonome = document.querySelector("#EditNome").value;
    let input_NovoPresi = document.querySelector("#editPresi").value;
    
    
    const Edit = pais.find(onu => onu.cod === input_cod);
    
    if(Edit){
        Edit.nome = input_Novonome;
        Edit.presi = input_NovoPresi;
    
        exibirPaises()
        this.reset()
    }
    else{
        alert("Pais não encontrado!!")
    };


});






