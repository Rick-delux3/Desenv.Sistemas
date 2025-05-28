let paises = [
  {
    cod: 1,
    nome: "FRANÇA",
    presi: "DESCONHECIDO",
    conti: "EUROPA"
  }
];

function exibirPaises() {
    let output = document.querySelector(".exibir"); // Corrigido
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

  // Adiciona um novo país ao vetor e salva no localStorage
  function adicionarPais() {
    let input_cod = document.querySelector("#cod").value;
    let nome = document.querySelector("#nome").value;
    let presi = document.querySelector("#presi").value;
    let cont = document.querySelector("#Contin").value;

    if (nome && presi && cont && input_cod) {
      paises.push({
        cod: Number(input_cod),
        nome: nome,
        presi: presi,
        conti: cont
      });

      console.log(paises)

      // Atualiza o localStorage
      localStorage.setItem("paises", JSON.stringify(paises));

      alert("País adicionado com sucesso!");
      exibirPaises();
      limparCampos();
    } else {
      alert("Dados inválidos!");
    }
  }

  // Exibir os países ao carregar a página
  window.onload = exibirPaises;



function limparCampos(){
    document.querySelector("#cod").value = "";
    document.querySelector("#nome").value = "";
    document.querySelector("#presi").value = "";
    document.querySelector("#contin").value = "";


};

window.onload = function(){
  exibirPaises()
}








