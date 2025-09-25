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

        document.getElementById("resultado1").innerHTML = /*Html*/
        `
        <div class="card-1 card text-center shadow-lg border-warning mb-3" style="width: 18rem;">
            <div class="name card-header text-dark fw-bold">
                ${p.nome.toUpperCase()}
            </div>
            <div class="items card-body">
                <img src="${p.sprite}" class="img-fluid mb-3" alt="${p.nome}">
                <progress id="hp1" value="${p.hp}" max="${p.hp}" class="w-100 mb-2"></progress>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item"><strong>Tipo:</strong> ${p.tipo}</li>
                    <li class="list-group-item"><strong>Peso:</strong> ${p.peso}</li>
                    <li class="list-group-item"><strong>HP:</strong> ${p.hp}</li>
                    <li class="list-group-item"><strong>Defesa:</strong> ${p.defesa}</li>
                    <li class="list-group-item"><strong>Ataque:</strong> ${p.ataque}</li>
                </ul>
            </div>
        </div>
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

        document.getElementById("resultado2").innerHTML = /*Html*/
        `
        <div class="card-2 card text-center shadow-lg border-warning mb-3" style="width: 18rem;">
            <div class="name2 card-header text-dark fw-bold">
                ${po.nome.toUpperCase()}
            </div>
            <div class="items2 card-body">
                <img src="${po.sprite}" class="img-fluid mb-3" alt="${po.nome}">
                <progress id="hp2" value="${po.hp}" max="${po.hp}" class="w-100 mb-2"></progress>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item"><strong>Tipo:</strong> ${po.tipo}</li>
                    <li class="list-group-item"><strong>Peso:</strong> ${po.peso}</li>
                    <li class="list-group-item"><strong>HP:</strong> ${po.hp}</li>
                    <li class="list-group-item"><strong>Defesa:</strong> ${po.defesa}</li>
                    <li class="list-group-item"><strong>Ataque:</strong> ${po.ataque}</li>
                </ul>
            </div>
        </div>
`;
            
; 
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
    
                log += `<div class="alert alert-warning py-1 mb-1">${pokemon1.nome} atacou ${pokemon2.nome} e causou ${dano} de dano!</div>`;
    
    
            }
            else{
                let dano = Math.max(1, pokemon1.ataque-pokemon1.defesa);
    
                hp2-=dano
                document.getElementById("hp1").value-=dano;
    
                log += `<div class="alert alert-danger py-1 mb-1">${pokemon2.nome} atacou ${pokemon1.nome} e causou ${dano} de dano!</div>`;
    
            }
            document.getElementById("resultadoLog").innerHTML = log;
            turno++
        }
        else{
            clearInterval(intervalo)
            let vencedor;

            if (hp1 <= 0 && hp2 <= 0) {

                log += `<div class="alert alert-secondary text-center fw-bold">🤝 A batalha terminou em EMPATE!</div>`;
            
            } else if (hp1 <= 0) {

                vencedor = pokemon2.nome;
                
                log += `<div class="alert alert-success text-center fw-bold">🏆 ${vencedor} venceu a batalha!</div>`
            
            } else {
                vencedor = pokemon1.nome;
                log += `<div class="alert alert-success text-center fw-bold">🏆 ${vencedor} venceu a batalha!</div>`
            }

            document.getElementById("resultadoLog").innerHTML = log;
        }

        
    }, 1000);

}

function ReiniciarBatalha(){
    

    document.getElementById("resultado1").innerHTML = "";
    document.getElementById("resultado2").innerHTML = "";
    document.getElementById("resultadoLog").innerHTML = "";
    document.getElementById("resultadoBatalha1").innerHTML = "";

    

    alert("Arena resetada!");
}


let treinadorSelecionado1 = null;
let treinadorSelecionado2 = null;

document.addEventListener("DOMContentLoaded", () => {
  popularSelectsTreinadores();
});

function popularSelectsTreinadores() {
  const s1 = document.getElementById("master1");
  const s2 = document.getElementById("master2");
  if (!s1 || !s2) return;

  let lista = [];
  if (typeof Treinador !== "undefined" && typeof Treinador.carregarLocalStorage === "function") {
    lista = Treinador.carregarLocalStorage() || [];
  } else {
    try {
      lista = JSON.parse(localStorage.getItem("treinadores")) || [];
    } catch (err) {
      lista = [];
      console.error("Erro ao parsear localStorage.treinadores:", err);
    }
  }

  s1.innerHTML = '<option value="">Selecione um treinador</option>';
  s2.innerHTML = '<option value="">Selecione um treinador</option>';

  if (!Array.isArray(lista) || lista.length === 0) {
    return;
  }

  lista.forEach((t, i) => {
    const id = t.id
    const nome = (t.nome).toString();

    const opt1 = document.createElement("option");
    opt1.value = id;
    opt1.textContent = nome;

    s1.appendChild(opt1);
    s2.appendChild(opt1.cloneNode(true));
  });

  s1.style.color = "#000";
  s2.style.color = "#000";
}

function SelecionarTreinador() {
  const s1 = document.getElementById("master1");
  const s2 = document.getElementById("master2");

  treinadorSelecionado1 = null;
  treinadorSelecionado2 = null;

  if (s1 && s1.value) {
    if (typeof Treinador !== "undefined" && Array.isArray(Treinador.lista)) {
      treinadorSelecionado1 = Treinador.lista.find(t => t.id === s1.value) || null;
    }
    if (!treinadorSelecionado1) {
      const raw = JSON.parse(localStorage.getItem("treinadores") || "[]");
      treinadorSelecionado1 = raw.find(r => (r.id === s1.value || r._id === s1.value)) || null;
    }
  }

  if (s2 && s2.value) {
    if (typeof Treinador !== "undefined" && Array.isArray(Treinador.lista)) {
      treinadorSelecionado2 = Treinador.lista.find(t => t.id === s2.value) || null;
    }
    if (!treinadorSelecionado2) {
      const raw = JSON.parse(localStorage.getItem("treinadores") || "[]");
      treinadorSelecionado2 = raw.find(r => (r.id === s2.value || r._id === s2.value)) || null;
    }
  }

  console.log("Selecionado 1:", treinadorSelecionado1);
  console.log("Selecionado 2:", treinadorSelecionado2);
}

    


