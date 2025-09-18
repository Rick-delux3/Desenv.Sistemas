class Treinador{ 
    constructor(nome, sobrenome, regiao, bio){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.regiao = regiao;
        this.bio = bio;
    };

    exibirTreinadores(){
        return `<div class="card">
                    <h1>${this.nome} ${this.sobrenome}</h1>
                    <div class="dados">
                        <p><strong>Região:</strong> ${this.regiao}</p>
                        <p><strong>Biografia:</strong> ${this.bio}</p>
                    </div>
                    <div class="acoes">
                        <button onclick="treinadores.find(t => t.id === '${this.id}').atualizar()">Atualizar</button>
                        <button onclick="treinadores.find(t => t.id === '${this.id}').deletar()">Deletar</button>
                    </div>
                </div>`;
    }
    
}