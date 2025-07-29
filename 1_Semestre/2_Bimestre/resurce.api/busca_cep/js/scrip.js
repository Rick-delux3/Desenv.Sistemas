function getCep(){
    let cep_input = document.querySelector("#input-cep").value.trim();

    let output = document.querySelector("#resultado");

    if(cep_input.length != 8){
        output.innerHTML = "<h1>CEP inválido!!</h1>";
        return;
    }
    let url = `https://brasilapi.com.br/api/cep/v2/${cep_input}`;

    fetch(url)
        .then(resp =>{
            if(!resp.ok) throw new Error ("Cep não encontrado!!");
            return resp.json();
        })
        .then(dados =>{
            output.innerHTML = `<h2>Endereço</h2>
            <ul>
                <li>Rua: ${dados.street}<li>
                <li>Bairro: ${dados.neighborhood}<li>
                <li>Cidade: ${dados.city}<li>
                <li>Estado: ${dados.state}<li>
            </ul>`;
                
        })
        .catch(erro =>{
            output.innerHTML = `<h3>${erro.message}</h3>`;
        });
}

function getCep2(){
    let cep_input = document.querySelector("#input-cep").value.trim();
    let rua = document.querySelector("#rua");
    let bairro = document.querySelector("#bairro");
    let cidade = document.querySelector("#city");
    let estado = document.querySelector("#state");
    
    let output = document.querySelector("#resultado");

    let url = `https://brasilapi.com.br/api/cep/v2/${cep_input}`;

    fetch(url)
    .then(resp =>{
        if(!resp.ok) throw new Error ("Cep não encontrado!!");
        return resp.json();
    })
    .then(dados=>{
        rua.value = dados.street;
        bairro.value = dados.neighborhood;
        cidade.value = dados.city;
        estado.value = dados.state;

    })
    .catch(erro =>{
        output.innerHTML = `<h3>${erro.message}</h3>`;
    });
}

let enderecosSalvos = [];

function cadastrar(){
    let rua = document.querySelector("#rua").value;
    let bairro = document.querySelector("#bairro").value;
    let cidade = document.querySelector("#city").value;
    let estado = document.querySelector("#state").value;

    // resultado da execução
    let mensagem = document.querySelector("#mensagem");

    if(!cep || !rua || !cidade){
        mensagem.innerHTML = "<h1>Preencha os dados!!</h1>";
        return;
    }

    let endereco = {cep,rua,bairro,cidade,estado};
    enderecosSalvos.push(endereco);

    mensagem.innerHTML = `<h1>Endereço Salvo com sucesso!!</h1>`;
    console.clear();
    console.log("Endereços Salvos: ",enderecosSalvos);
}

