function exibir(nome, idade){
    return `O seu nome é ${nome}  e a sua idade é ${idade}`;
}

function contar(inicial, final){


    for (let i = inicial; i <= final; i++) {
        document.writeln(`${i} <br>`)
        
    }
}
//conta quantas letras específicas possui a String
function contaLetras(palavra, letra){
    var contador = 0;
    palavra = palavra.toLowerCase()
    //Converter tudo para minúsculo

    for (let i = 0; i < palavra.length; i++) {
        // CharAt pega uma posição específica do vetor String
        if(palavra.charAt(i)==letra){
            contador++;
        }
    }

    return contador;
}
