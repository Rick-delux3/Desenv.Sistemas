let paises = JSON.parse(localStorage.getItem("cadastro")) || [];

function exibirPaises() {
  let output = document.querySelector(".exibir");
  output.innerHTML = "";

  paises.forEach(onu => {
    output.innerHTML += `
      <div class="card">
        <h3>${onu.nome}</h3>
        <h3>${onu.capital}</h3>
        <p><strong>Código:</strong> ${onu.cod}</p>
        <img src="${onu.bandeira}" alt="${onu.pngalt}">
        <p><strong>Continente:</strong> ${onu.regiao}</p> 
      </div>
    `;
  });
}


function RemoverPais(){
    let input_pais = document.querySelector(".pais").value.trim();

    let indice = paises.findIndex(pais => pais.cod == Number(input_pais));

    let output = document.querySelector(".resultadoExcluir");

    if(indice !== -1){

        paises.splice(indice,1);

        localStorage.setItem("cadastro", JSON.stringify(paises));
    
        output.innerHTML = `<h3 style="color:green"> País ${input_pais} deserdado com sucesso!! </h3>`
        exibirPaises()
        

    }
    else{
        output.innerHTML = `<h3 style="color:red"> Não foi possivel identificar o país!! </h3>`;

    }

    
};

window.onload = function(){
  exibirPaises()
}
