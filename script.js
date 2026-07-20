const buttonToConvert = document.querySelector(".botao")
const moedaDeConverter = document.querySelector(".moeda-de-converter")
const moedaParaConverter = document.querySelector(".moeda-para-converter")
const currencyNameConverted = document.querySelector(".currency-name")
const currencyNameToConvert = document.querySelector(".currency-name-to-convert")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")

function conerterDoReal() {
    if (moedaDeConverter.value == "real") {
        const valor = document.querySelector(".valor")
        const dolarToday = 5.69
        const euroToday = 7.67
        const libraToday = 6.87

        if (moedaParaConverter.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valor.value / dolarToday)
        }

        if (moedaParaConverter.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valor.value / euroToday)
        }

        if (moedaParaConverter.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(valor.value / libraToday)
        }

        if (moedaParaConverter.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valor.value)
        }


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor.value)

    }
}

function converterDoDolar() {
    if (moedaDeConverter.value === "dolar") {
        const valor = document.querySelector(".valor")
        const realToday = 5.69
        const euroToday = 0.92
        const libraToday = 0.79

        if (moedaParaConverter.value === "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valor.value * realToday)
        }

        if (moedaParaConverter.value === "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valor.value * euroToday)
        }

        if (moedaParaConverter.value === "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(valor.value * libraToday)
        }

        if (moedaParaConverter.value === "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valor.value)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valor.value)
    }
}

function converterDoEuro() {
    if (moedaDeConverter.value === "euro") {
        const valor = document.querySelector(".valor")
        const realToday = 7.67
        const dolarToday = 1.08
        const libraToday = 1.18

        if (moedaParaConverter.value === "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valor.value * realToday)
        }

        if (moedaParaConverter.value === "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valor.value * dolarToday)
        }

        if (moedaParaConverter.value === "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(valor.value * libraToday)
        }

        if (moedaParaConverter.value === "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valor.value)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valor.value)
    }
}

function converterDaLibra() {
    if (moedaDeConverter.value === "libra") {
        const valor = document.querySelector(".valor")
        const realToday = 6.87
        const dolarToday = 1.27
        const euroToday = 0.85

        if (moedaParaConverter.value === "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valor.value * realToday)
        }

        if (moedaParaConverter.value === "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valor.value * dolarToday)
        }

        if (moedaParaConverter.value === "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valor.value * euroToday)
        }

        if (moedaParaConverter.value === "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(valor.value)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valor.value)
    }
}

function converterValor() {
    conerterDoReal()
    converterDoDolar()
    converterDoEuro()
    converterDaLibra()
}

function mudarBandeiraParaConverter() {
    const bandeiraParaConverter = document.querySelector(".bandeira-para-converter")

    if (moedaDeConverter.value == "dolar") {
        bandeiraParaConverter.src = "./assets/estados-unidos (1) 1.png"
        currencyNameToConvert.innerHTML = "Dólar Americano"
    }

    if (moedaDeConverter.value == "euro") {
        bandeiraParaConverter.src = "./assets/euro.png"
        currencyNameToConvert.innerHTML = "Euro"
    }

    if (moedaDeConverter.value == "libra") {
        bandeiraParaConverter.src = "./assets/libra.png"
        currencyNameToConvert.innerHTML = "Libra Estrelina"
    }

    if (moedaDeConverter.value == "real") {
        bandeiraParaConverter.src = "./assets/brasil.png"
        currencyNameToConvert.innerHTML = "Real"
    }

    converterValor()
}

function mudarBandeiraConvertida() {
    const bandeiraConvertida = document.querySelector(".bandeira-convertida")

    if (moedaParaConverter.value == "dolar") {
        bandeiraConvertida.src = "./assets/estados-unidos (1) 1.png"
        currencyNameConverted.innerHTML = "Dólar Americano"
    }

    if (moedaParaConverter.value == "euro") {
        bandeiraConvertida.src = "./assets/euro.png"
        currencyNameConverted.innerHTML = "Euro"
    }

    if (moedaParaConverter.value == "libra") {
        bandeiraConvertida.src = "./assets/libra.png"
        currencyNameConverted.innerHTML = "Libra Estrelina"
    }

    if (moedaParaConverter.value == "real") {
        bandeiraConvertida.src = "./assets/brasil.png"
        currencyNameConverted.innerHTML = "Real"
    }

    converterValor()
}

moedaDeConverter.addEventListener("change", mudarBandeiraParaConverter)
moedaParaConverter.addEventListener("change", mudarBandeiraConvertida)
buttonToConvert.addEventListener("click", converterValor)

mudarBandeiraParaConverter()