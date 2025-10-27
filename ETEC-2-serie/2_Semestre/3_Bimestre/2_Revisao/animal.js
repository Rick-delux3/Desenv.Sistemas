class Animal{
    set nome(valor){
        this._nome = valor;
    }
    get nome(){
        return this._nome
    }
    set patas(valor){
        this._patas = valor
    }
    get patas(){
        return this._patas
    }
    set regiao(valor){
        this._regiao = valor
    }
    get regiao(){
        return this._regiao
    }
    exibir(){
        return `Nome: ${this._nome},
        Quantidade de patas: ${this._patas}
        Região que se encontra: ${this._regiao}`;
    }
    emitirSom(valor){
        return `Som do animal: ${valor}`;
    }
}