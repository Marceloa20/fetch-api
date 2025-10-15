// endpoint da API
const URL = "https://restcountries.com/v3.1/name/";

// arrow function para usar o fetch com um parametro para colocar o nome dinamicamente do país
const fetchAPI = (name) => {
    const result = fetch(`${URL}${name}`) // pega a url da api e o nome do país
    .then(res => res.json()) // a resposta transforma em json 
    .then(data => { // dados da API
        const nameCountry = data[0].name.common; // pega o nome do país
        const capital = data[0].capital[0]; // a capital do país
        const currencyObj = data[0].currencies; // pega o obj da moeda
        const currencyCode = Object.keys(currencyObj)[0]; // acessa o código do obj da moeda
        const currencyDetails = currencyObj[currencyCode]; // usa o código para acessar o nome e o simbolo da moeda
        const currencyName = currencyDetails.name; // nome da moeda
        const currencySymbol = currencyDetails.symbol; // simbolo da moeda

        console.log("--- Detalhes do País ---");
        console.log(`Nome: ${nameCountry}`);
        console.log(`Capital: ${capital}`);
        console.log(`Moeda: ${currencyName}/${currencySymbol}`)
    })
    .catch(error => {
        console.error("❌ Ocorreu um erro na requisição: ", error) // tratamento básico de erro
    }) 
}

fetchAPI('canada') // chama a função 