function getCountry(){
    let input_search = document.querySelector("#input-search").value.trim();
    //função trim() remove espaços 
    let url = `https://restcountries.com/v3.1/name/${input_search}`;
    let output= document.querySelector("#country-info");

    output.innerHTML = "<h3>Carregando...</h3>";

    fetch(url)
     .then(resp=>{
       if(!resp.ok) throw  new Error("pais não encontrado");
       return resp.json();     

    })
    .then(dados=>{
        let exibir = dados.map(pais=>{
            return `<div>
            <h2>${pais.name.official}</h2>
            <h2>${pais.capital}</h2>
            <img src="${pais.flags.png}" alt="${pais.flags.alt}">`
            
        }).join("");
        output.innerHTML = exibir;
    })
    .catch(erro => {
        output.innerHTML = `<h1>${erro.message}</h1>`;
    })
};

function filtroRegiao(){
    let select = document.querySelector("#region-select");
    let region = select.value;
    let output = document.querySelector("#country-info");


    //Limpando Busca anterior (caso tenha sido feita)

    output.innerHTML = " ";

    output.innerHTML = "<h2>Carregando...</h2>";

    //Se nenhuma região for selecionada, não retorna nada

    if(!region){
        return;
    }

    let url = `https://restcountries.com/v3.1/region/${region}`;

    fetch(url)
     .then(resp=>{
       if(!resp.ok) throw  new Error("Região não encontrado");
       return resp.json();     

    })
    .then(dados=>{
        let exibir = dados.map(pais=>{
            return `<div>
            <h2>${pais.name.common}</h2>
            <p>Região:${pais.region}</p>
            <img src="${pais.flags.png}" alt="${pais.flags.alt}">`
            
        }).join("");
        output.innerHTML = exibir;
    })
    .catch(erro => {
        output.innerHTML = `<h1>${erro.message}</h1>`;
    })

}