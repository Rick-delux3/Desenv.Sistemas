let livros = [
    {cod:1, nome:"Harry Potter", autor:"J.K. Rowling"},
    {cod:2, nome:"Senhor dos Aneis", autor:"Tolkien"}
];
mostrarLivros()

function mostrarLivros(){
    let output = document.querySelector("#listagem")
    //limpando a div onde ira exibir
    output.innerHTML= "";

    livros.forEach(livro =>{
        // adicionando os livros dentro da Div
        output.innerHTML += `Código: ${livro.cod} - Nome:${livro.nome} - Autor:${livro.autor} <br>`;

    });
}
function adicionarLivro(){
    let input_cod = document.querySelector("#codigo").value;
    let input_nome = document.querySelector("#nome").value;
    let input_autor = document.querySelector("#autor").value;

    //verificando se as variáveis não estão vazias
    if(input_autor && input_cod && input_nome){
        livros.push({cod:input_cod, nome:input_nome, autor:input_autor});
        alert("Livro adicionado com sucesso!!");
        mostrarLivros();
    }
    else{
        alert("Dados inválidos!!");
    }
}
function excluirLivro(){
    let input_cod = document.querySelector("#codExcluir").value;
    
    // findIndex procura o número do indice do vetor que contenha o valor:
    let indice = livros.findIndex(livros=> livros.cod == input_cod);
    //findIndex retorna o primeiro indice com o valor localizado
    //Se não encontrar o valor, retorna -1


    //Onde será exibido a resposta
    let output = document.querySelector(".resultadoExcluir");

    //verificando se encontrou o intem que irá excluir
    if (indice != -1) {
        livros.splice(indice,1);
    //splice( indice a ser excluido , quantos itens irá excluir)
        output.innerHTML = `<h3 style="color:green"> Livro ${input_cod} excluido com sucesso!! </h3>`;
        mostrarLivros();
        limparCampos();
    }
    else{
        output.innerHTML = `<h3 style="color:red"> Livro ${input_cod} Não encontrado!! </h3>`;
    }
}
function limparCampos(){
    document.querySelector("#codigo").value = "";
    document.querySelector("#nome").value = "";
    document.querySelector("#autor").value = "";


}