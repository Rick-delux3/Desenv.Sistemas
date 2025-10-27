let paises = JSON.parse(localStorage.getItem("paises"));


function exibirPaises() {
  let output = document.querySelector(".exibir");
  output.innerHTML = "";

  paises.forEach(onu => {
    output.innerHTML += `
      <div class="card">
        <h3>${onu.nome}</h3>
        <p><strong>Código:</strong> ${onu.cod}</p>
        <p><strong>Presidente:</strong> ${onu.presi}</p>
        <p><strong>Continente:</strong> ${onu.conti}</p>
      </div>
    `;
  });
}

// Função de editar país
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let input_cod = Number(document.querySelector("#cod").value);
  let input_Novonome = document.querySelector("#EditNome").value;
  let input_NovoPresi = document.querySelector("#editPresi").value;

  const Edit = paises.find(onu => onu.cod === input_cod);

  if (Edit) {
    Edit.nome = input_Novonome;
    Edit.presi = input_NovoPresi;

    // Salva o vetor atualizado
    localStorage.setItem("paises", JSON.stringify(paises));

    alert("País editado com sucesso!");

    exibirPaises();
    this.reset();
  } else {
    alert("País não encontrado!!");
  }
});

// Mostrar os países ao abrir a página
window.onload = function(){
  exibirPaises()
}
