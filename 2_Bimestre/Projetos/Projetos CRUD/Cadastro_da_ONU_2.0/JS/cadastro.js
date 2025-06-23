let paises = [];

function cadastrarPaises(){
  let nome = document.querySelector("#nome").value;
  let cap = document.querySelector("#cap").value;
  let regiao = document.querySelector("#regiao").value;
  let mensagem = document.querySelector("mensagem")

  if(!nome || !cap || !regiao){
    mensagem.innerHTML = "<h1>Preencha os dados!!</h1>";
    return;
}

let salvar = {nome, cap, regiao};
paises.push(salvar);
mensagem.innerHTML = "País Cadastrado com sucesso!!";


}

function exibirPais(){
  let pais = paises.forEach(buscar => {
    
  });
  let url = `https://restcountries.com/v3.1/name/${}`;
  let nome
  let capital
  let regiao
  let exibir = []
  fetch(url)
        .then(resp =>{
            if(!resp.ok) throw new Error ("País não encontrado!!");
            return resp.json();
        })
        .then(dados =>{
           nome = dados.name
           cap
                
        })


  
}

