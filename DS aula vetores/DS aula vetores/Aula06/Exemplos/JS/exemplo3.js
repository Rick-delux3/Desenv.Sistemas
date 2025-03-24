var frutas = ["morango", "maça", "uva"]

for(var i=0;i<frutas.length;i++){
    document.writeln(frutas[i]+"<br>");
}
document.writeln("_______<br>");
//adicionando elemento no inicio do vetor com a função unshift()
frutas.unshift("pitaya");
for(var i=9; i<frutas.length; i++){
    document.writeln(frutas[i]+"<br>");
}
document.writeln("_______<br>");

//removendo o último elemento do vetor com a função pop()
frutas.pop();
for(var i=0;i<frutas.length;i++){
    document.writeln(frutas[i]+"<br>")
}
