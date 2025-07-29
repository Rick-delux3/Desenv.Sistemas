function media (a,b,c){
    
    return (a+b+c)/3
}
function situacao(media) {
    if(media<4){
        return "Reprovado!!";
    }
    else if(media>=4 && media<=6){
        return "Recuperação!!";
    }
    else{
        return "Aprovado";
    }
    
    
}