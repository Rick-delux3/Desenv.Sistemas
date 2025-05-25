let pais = [
    {
        nome: "China",
        presi: "Shang Chi",
        conti: "Asia"
        
    }
]


function exibirPaises(){
    let output = document.querySelector("#exibir");
    output.innerHTML = ""

    pais.forEach(onu =>{
        output.innerHTML += `País: ${onu.nome} | Presidente: ${onu.presi} | Continente: ${onu.conti}`;

    })


}
function adicionarPais(){
    let nome = document.querySelector("#nome").value;
    let presi = document.querySelector("#presi").value;
    let cont = document.querySelector("#Contin").value;

    if(nome && presi && cont){
        pais.push([{nome:nome, presi:presi, conti:cont}]);
        alert("Pais adicionado com sucesso!!")
        exibirPaises()
    }
    else{
        alert("Dados inválidos!!");
    }

}
function RemoverPais(){
    let input_pais = document.querySelector(".pais")

    let indice = pais.findIndex()


}



