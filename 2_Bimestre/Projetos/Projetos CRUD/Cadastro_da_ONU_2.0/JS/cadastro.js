let paises = [] 

function cadastrarPaises() {
  let nomeInput = document.querySelector("#nome").value.trim()
  let mensagem = document.querySelector("#mensagem")
  let url = `https://restcountries.com/v3.1/translation/${nomeInput}`;
  let cod = Number(document.querySelector("#cod").value)

  fetch(url)
    .then(resp => {
      if (!resp.ok) throw new Error("País não encontrado!");
      return resp.json();
    })
    .then(dados => {
        
      let paisData = dados[0];
      let nome = paisData.name.common;
      let capital = paisData.capital ? paisData.capital[0] : "Desconhecida";
      let regiao = paisData.region;
      let bandeira = paisData.flags.png;
      let pngalt = paisData.flags.alt;


      let DadosSalvos = {cod, nome, capital, regiao, bandeira, pngalt };
      paises.push(DadosSalvos);

      document.querySelector("#cap").value = capital;
      document.querySelector("#con").value = regiao;

      mensagem.innerHTML = "<h2 class='msg'>País Cadastrado com sucesso!!</h2>"

      localStorage.setItem("cadastro", JSON.stringify(paises))


    })

    .catch(err => {
      mensagem.innerHTML = `<p style='color: red;'>${err.message}</p>`;
    });





}
