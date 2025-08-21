function buscarPokemon1(){
    let pkm_name1 = document.querySelector("#pkm_name1").value;



    fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name1}`)
    .then(resposta =>{
        if(!resposta.ok){
            throw new Error("Pokemon não encontrado");
        }
        return resposta.json();
    })
    .then(dados =>{
        const p = new Pokemon();
        p.nome = dados.name;
        p.tipo = dados.types.map(t=> t.type.name);
        p.peso = dados.weight;
        p.sprite = dados.sprites.front_default;

        console.log(p.exibirDados());

        document.getElementById("resultado1").innerHTML = 
        `<h1>${p.nome}</h1>
        <ul>
            <li>Tipo: ${p.tipo} </li>
            <li>Peso: ${p.peso} </li>
        </ul>
            <img src="${p.sprite}">
            `
            
            
        
    })
    .catch(erro=>{
        alert(erro.message);
    })
}

function buscarPokemon2(){
    let pkm_name2 = document.querySelector("#pkm_name2").value;



    fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name2}`)
    .then(resposta =>{
        if(!resposta.ok){
            throw new Error("Pokemon não encontrado");
        }
        return resposta.json();
    })
    .then(dados =>{
        const po = new Pokemon();
        po.nome = dados.name;
        po.tipo = dados.types.map(t=> t.type.name);
        po.peso = dados.weight;
        po.sprite = dados.sprites.front_default;

        console.log(po.exibirDados());

        document.getElementById("resultado2").innerHTML = 
        `<h1>${po.nome}</h1>
        <ul>
            <li>Tipo: ${po.tipo} </li>
            <li>Peso: ${po.peso} </li>
        </ul>
            <img src="${po.sprite}">
            `
            
            
        
    })
    .catch(erro=>{
        alert(erro.message);
    })
}