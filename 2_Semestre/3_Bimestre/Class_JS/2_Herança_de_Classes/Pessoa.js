class Pessoa{
    // set = inserir valor em atributo
    // get = pegar um valor de um atributo
    set nome(valor){
        this._nome = valor;
    
    }
    get nome(){
        return this._nome;
    }
    set CPF(valor){
        this._cpf = valor;
    
    };
    get CPF(){
        return this._cpf;
    }
    set celular(valor){
        this._cell = valor;
    
    };
    get celular(){
        return this._cell;
    }
    exibirNome(){
        return `Nome: ${this._nome}`;
    }
}