function exibirPaises() {
  let output = document.querySelector(".exibir");
  output.innerHTML = "";

  paises.forEach(onu => {
    output.innerHTML += `
      <div class="card">
        <h3>${onu.nome}</h3>
        <p><strong>Código:</strong> ${onu.cod}</p>
        <p><strong>Presidente:</strong> ${onu.capital}</p>
        <p><strong>Continente:</strong> ${onu.bandeira}</p>
        <p><strong>Continente:</strong> ${onu.capital}</p>
        
      </div>
    `;
  });
}