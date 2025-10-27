class Pessoa{
    constructor(nome, idade, prof){
        this._nome = nome;
        this._idade = idade;
        this._prof = prof;
    }

    set prof(valor){
        this._prof = valor;
    }
    get prof(){
        return this._prof;
    }
    set nome(valor){
        this._nome = valor;
    }
    get nome(){
        return this._nome;
    }
    set idade(valor){
        this._idade = valor;
    }
    get idade(){
        return this._idade;
    }

    static Apresentar(){
        return `${this._nome} tem a idade de ${this._idade} com a profissão ${this.prof}`;
    }
}


let nome = "José";
let idade = 24;
let profissão = "Pedreiro";

let pessoa = new Pessoa(nome, idade, profissão);
document.writeln(pessoa.Apresentar());

