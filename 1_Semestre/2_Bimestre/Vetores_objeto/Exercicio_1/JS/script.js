let usuario = [
    
]
function armazenar(){
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;

    usuario.push({noome:nome, emaill:email, senhaa:senha});

    console.log(usuario);
}