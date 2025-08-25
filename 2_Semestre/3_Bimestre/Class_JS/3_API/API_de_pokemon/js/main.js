let pokemon1 = null;
let pokemon2 = null;
let hp1;
let hp2;


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
        p.hp = dados.stats[0].base_stat;
        p.ataque = dados.stats[1].base_stat;
        p.defesa = dados.stats[2].base_stat;

        console.log(p.exibirDados());

        document.getElementById("resultado1").innerHTML = 
        `<h1>${p.nome}</h1>
        <ul>
            <li>Tipo: ${p.tipo} </li>
            <li>Peso: ${p.peso} </li>
            <li>hp: ${p.hp} </li>
            <li>DEFESA: ${p.defesa} </li>
            <li>ATAQUE: ${p.ataque} </li>
        </ul>
            <img src="${p.sprite}">
            `;
            
     document.getElementById("hp1").max = p.hp; 
     document.getElementById("hp1").value = p.hp; 
     pokemon1 = p;
     hp1 = p.hp;     
        
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
        po.hp = dados.stats[0].base_stat;
        po.ataque = dados.stats[1].base_stat;
        po.defesa = dados.stats[2].base_stat;

        console.log(po.exibirDados());

        document.getElementById("resultado2").innerHTML = 
        `<h1>${po.nome}</h1>
        <ul>
            <li>Tipo: ${po.tipo} </li>
            <li>Peso: ${po.peso} </li>
            <li>HP: ${po.hp} </li>
            <li>DEFESA: ${po.defesa} </li>
            <li>ATAQUE: ${po.ataque} </li>
        </ul>
            <img src="${po.sprite}">
            `;
        document.getElementById("hp2").max = po.hp;
        document.getElementById("hp2").value = po.hp; 
    
        
        pokemon2 = po;
        hp2 = po.hp;
    
            
        
    })
    .catch(erro=>{
        alert(erro.message);
    })
}

function batalhar(){
    if(!pokemon1 || !pokemon2){
        alert("Selecione 2 pokemons!")
        return;
    }
    let hp1 = pokemon1.hp;
    let hp2 = pokemon2.hp;

    //esquema de inicio de ataque
    //numero impar = player 1
    //numero par = player 2
    let turno = 1;

    //acumulando mensagens dos turnos
    let log = "";

    //zerando as mensagens no inicio da batalha 
    document.getElementById("resultadoBatalha1").innerHTML="";
    document.getElementById("resultadoLog").innerHTML = "";

    //estrutura de repetição com temporizador
    let intervalo = setInterval(() => {
        if(hp1 > 0 && hp2 > 0){
            //verificando o turno de quem é
            // impar player 1
            if (turno%2==0) {
                // dado gerado por número aleatório
                // Junto com ataque e defesa
                let dano = Math.max(1, pokemon1.ataque-pokemon1.defesa);
    
                hp2-=dano
                document.getElementById("hp2").value-=dano;
    
                log+= `<p>${pokemon1.nome} atacou o ${pokemon2.nome} e causou ${dano} de dano`;
    
    
            }
            else{
                let dano = Math.max(1, pokemon1.ataque-pokemon1.defesa);
    
                hp2-=dano
                document.getElementById("hp1").value-=dano;
    
                log+= `<p>${pokemon2.nome} atacou o ${pokemon1.nome} e causou ${dano} de dano`;
    
                document.getElementById("resultadoLog").innerHTML = log;
                turno++
            }
        }
        else{
            clearInterval()
        }

        
    }, 1000);

}

