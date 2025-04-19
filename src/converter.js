export function exportConverter() {
    const currencyValue = document.querySelector('#currency-value')
    const fromCurrency = document.querySelector('#from-currency')
    const toCurrency = document.querySelector('#to-currency');
    const convertResult = document.querySelector('#conversion-result')

    function convert() {
        fetch(`https://v6.exchangerate-api.com/v6/9d29ce8ace4724e543feecee/latest/USD`)
            .then((response) => { return response.json() })
            .then((data) => {
                console.log(data)
                if (currencyValue.value == '') {
                 return convertResult.textContent = 'Whrite an amount'
                } else if (toCurrency.value ==  `/` || fromCurrency.value == `/`) {
                 return  convertResult.textContent = 'Choose a currency'
                } else {
                let to = data.conversion_rates[toCurrency.value]
                let from = data.conversion_rates[fromCurrency.value]
                const amount = parseFloat(currencyValue.value);
                
                convertResult.textContent = `${amount.toFixed(2)} ${fromCurrency.value} = ${((amount * to) / from).toFixed(2)} ${toCurrency.value}`
                }
            }).catch((error) => { console.log(error) }) 
    }

    currencyValue.addEventListener('input', () => {
        convert()
    })

    toCurrency.addEventListener('change', () => {
        convert()
    })

    fromCurrency.addEventListener('change', () => {
        convert()
    })

}
