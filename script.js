const buttonToConvert = document.querySelector(".botao")
const moedaParaConverter = document.querySelector(".moeda-para-converter")
const currencyNameConverted = document.querySelector(".currency-name")

function converterValor() {
    const valor = document.querySelector(".valor")
    const dolarToday = 5.69
    const euroToday = 7.67

    const currencyNameToConvert = document.querySelector(".currency-name-to-convert")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const currencyValueConverted = document.querySelector(".currency-value")


    if (moedaParaConverter.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valor.value / dolarToday)
    }

    if (moedaParaConverter.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valor.value / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor.value)


}

function mudarBandeira(){
    const bandeiraConvertida = document.querySelector(".bandeira-convertida")

    if (moedaParaConverter.value == "dolar"){
        bandeiraConvertida.src = "./assets/estados-unidos (1) 1.png"
        currencyNameConverted.innerHTML = "Dólar Americano"
    }

    if (moedaParaConverter.value == "euro"){
        bandeiraConvertida.src = "./assets/euro.png"
        currencyNameConverted.innerHTML = "Euro"
    }

    converterValor()
}

moedaParaConverter.addEventListener("change", mudarBandeira)
buttonToConvert.addEventListener("click", converterValor)