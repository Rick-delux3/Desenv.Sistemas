class Treinador{ 

    static lista = [];

    constructor(nome, regiao, bio, genero, idade){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.regiao = regiao;
        this.bio = bio;
        this.genero = genero;
        this.idade = idade

    };

    static salvarLocalStorage(){
        localStorage.setItem("treinadores", JSON.stringify(Treinador.lista));
    }

    static carregarLocalStorage(){
        const dados = JSON.parse(localStorage.getItem("treinadores")) || [];
        
        Treinador.lista = dados.map(t =>{
            const objet = new Treinador(t.nome, t.regiao, t.bio, t.genero, t.idade);
            objet.id = t.id;
            return objet
        });
        return Treinador.lista;
    }

    
    
     exibirTreinadores(){
        return `<div class="card-treinador col-7">
                    <h1 id="nome">${this.nome}</h1>
                    <div class="dados d-flex flex-column">
                        <p id="idade"><strong>Idade:</strong> ${this.idade}</p>
                        <p><strong>Região:</strong> ${this.regiao}</p>
                        <p id="biograf"><strong>Biografia:</strong> ${this.bio}</p>
                        <p><strong>Genero:</strong> ${this.genero}</p>
                    </div>
                    <div class="acoes d-flex justify-content-around align-content-center">
                        <button class="btn1" onclick="Treinador.editar('${this.id}')">Atualizar</button>
                        <button class="btn2" onclick="Treinador.deletar('${this.id}')">Deletar</button>
                    </div>
                </div>`;
    }

    static atualizarTela(){
         document.getElementById("area-cards").innerHTML =
            Treinador.lista.map(t => t.exibirTreinadores()).join("");
    }

    static adicionarTreinador(treinador){
        Treinador.lista.push(treinador);
        Treinador.salvarLocalStorage();
    }
    static editar(id){
        Treinador.carregarLocalStorage();
        
        const treinador = Treinador.lista.find(t => t.id === id);

        if(treinador){
            let h1 = document.getElementById("nome");
            let p = document.getElementById("biograf");
            let p2 = document.getElementById("idade");
            

            const input = document.createElement("input");
            input.type = "text";
            input.name = "novoNome";
            input.placeholder = "Digite o novo Nome";
            input.value = treinador.nome;

            const textarea = document.createElement("textarea");
            textarea.name = "novaBio";
            textarea.placeholder = "Digite a nova Biografia";
            textarea.value = treinador.bio;

            const input2 = document.createElement("input");
            input2.type = "Number"
            input2.name = "idade";
            input2.placeholder = "Digite a nova idade";
            input2.value = treinador.idade;

            
            h1.innerHTML = "";
            h1.appendChild(input);

            p.innerHTML = "";
            p.appendChild(textarea);

            p2.innerHTML = "";
            p.appendChild(input2);

            

            input.addEventListener("keydown", function(e){
                if(e.key === "Enter"){
                    treinador.nome = input.value;

                    Treinador.salvarLocalStorage();
                    Treinador.atualizarTela();
                }
            })
            textarea.addEventListener("keydown", function(e){
                if(e.key === "Enter"){
                    treinador.bio = textarea.value;

                    Treinador.salvarLocalStorage();
                    Treinador.atualizarTela();
                }
            })
            input2.addEventListener("keydown", function(e){
                if(e.key === "Enter"){
                    treinador.idade = input2.value;

                    Treinador.salvarLocalStorage();
                    Treinador.atualizarTela();
                }
            })
        }
    }

    static deletar(id){
        Treinador.lista = Treinador.lista.filter(t => t.id !== id);

        Treinador.salvarLocalStorage();
        Treinador.atualizarTela();

    }
    
}

