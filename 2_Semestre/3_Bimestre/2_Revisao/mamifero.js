class Mamiferos extends Animal{
    constructor(cor,porte,tipo){
        this._cor = cor;
        this._porte = porte;
        this._tipo = tipo
    }

    get cor(){
        return this._cor;
    }
    get porte(){
        return this._porte;
    }
    get tipo(){
        return this._tipo;
    }
    exibirTipo(valor){
        if(valor =="t"){return `Este é um animal Terrestre`;}
        else if(valor == "a"){return `Este é um animal Aquático`;}
        else if(valor == "v"){return `Este é um animal Voador`;}
        else{return `Por favor, insira um valor válido!`;}
    }
}
