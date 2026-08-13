const buttonToConvert = document.querySelector(".botao")
const moedaDeConverter = document.querySelector(".moeda-de-converter")
const moedaParaConverter = document.querySelector(".moeda-para-converter")
const currencyNameConverted = document.querySelector(".currency-name")
const currencyNameToConvert = document.querySelector(".currency-name-to-convert")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")

async function conerterDoReal() {
    if (moedaDeConverter.value == "real") {
        const valor = document.querySelector(".valor")

        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())

        const dolarToday = data.USDBRL.high
        const euroToday = data.EURBRL.high
        const libraToday = data.BTCBRL.high

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


async function converterDoDolar() {
    if (moedaDeConverter.value === "dolar") {
        const valor = document.querySelector(".valor")

        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())

        const realToday = data.USDBRL.high
        const euroToday = data.EURBRL.high
        const libraToday = data.BTCBRL.high

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

async function converterDoEuro() {
    if (moedaDeConverter.value === "euro") {
        const valor = document.querySelector(".valor")
        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())
        const realToday = data.USDBRL.high
        const dolarToday = data.EURBRL.high
        const libraToday = data.BTCBRL.high

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

async function converterDaLibra() {
    if (moedaDeConverter.value === "libra") {
        const valor = document.querySelector(".valor")
        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())
        const realToday = data.USDBRL.high
        const dolarToday = data.EURBRL.high
        const euroToday = data.BTCBRL.high

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

async function converterValor() {
    await conerterDoReal()
    await converterDoDolar()
    await converterDoEuro()
    await converterDaLibra()
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

mudarBandeiraParaConverter();