class Passaros extends Animal{
    set corPena(valor){
        this._corPena = valor;
    }
    get corPena(){
        return this._corPena;
    }
    set voa(valor){
        this._voa = valor
    }
    get voa(){
        return this._voa;
    }
    exibirVoa(valor){
        if(valor==true){
            return `Este é um pássaro que voa!!`;
        }
        return `Este é um pássaro que não voa`;
    }
}