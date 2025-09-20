class Treinador{ 

    static lista = [];

    constructor(nome, sobrenome, regiao, bio){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.regiao = regiao;
        this.bio = bio;

    };

    static salvarLocalStorage(){
        localStorage.setItem("treinadores", JSON.stringify(Treinador.lista));
    }

    static carregarLocalStorage(){
        const dados = JSON.parse(localStorage.getItem("treinadores")) || [];
        
        Treinador.lista = dados.map(t =>{
            const objet = new Treinador(t.nome, t.sobrenome, t.regiao, t.bio);
            objet.id = t.id;
            return objet
        })
        Treinador.atualizarTela();
    }

    static atualizarTela(){
        document.getElementById("area-cards").innerHTML =
            Treinador.lista.map(t => t.exibirTreinador()).join("");
    }


    static exibirTreinadores(){
        return `<div class="card d-flex flex-column">
                    <h1 id="nome">${this.nome} ${this.sobrenome}</h1>
                    <div class="dados">
                        <p><strong>Região:</strong> ${this.regiao}</p>
                        <p id="biograf"><strong>Biografia:</strong> ${this.bio}</p>
                    </div>
                    <div class="acoes">
                        <button onclick="Treinador.editar('${this.id}')">Atualizar</button>
                        <button onclick="Treinador.deletar('${this.id}')">Deletar</button>
                    </div>
                </div>`;
    }

    static editar(id){

        const treinador = Treinador.lista.find(t => t.id === id);

        if(treinador){
            let h1 = document.getElementById("nome");
            let p = document.getElementById("biograf");
            

            const input = document.createElement("input");
            input.type = "text";
            input.name = "novoNome";
            input.placeholder = "Digite o novo Nome";
            input.value = treinador.nome;

            const textarea = document.createElement("textarea");
            textarea.name = "novaBio";
            textarea.placeholder = "Digite a nova Biografia";
            textarea.value = treinador.bio;

            h1.innerHTML = "";
            h1.appendChild(input);

            p.innerHTML = "";
            p.appendChild(textarea);

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
        }
    }

    static deletar(id){
        Treinador.lista = Treinador.lista.filter(t => t.id !== id);

        Treinador.salvarLocalStorage();
        Treinador.atualizarTela();

    }
    
}

