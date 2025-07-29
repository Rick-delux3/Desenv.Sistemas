var vetor = [];
var resposta=1
//inserindo valores no vetor


while(resposta==1){
    vetor.push(prompt("Insira um valor: "));

    resposta = Number(prompt("Deseja continuar? 1=SIM"));

}
//exibindo os valores do vetor
for(var i=0;i<vetor.length;i++){
    alert(`Posição: ${i} valor: ${vetor}`)
}