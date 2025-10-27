
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