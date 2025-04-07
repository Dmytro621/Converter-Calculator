const calcValue = document.querySelector('#calc-value');
const buttons = document.querySelectorAll('[data-value]');
const currencyValue = document.querySelector('#currency-value')
const fromCurrency = document.querySelector('#from-currency')
const toCurrency = document.querySelector('#to-currency');
const convertResult = document.querySelector('#conversion-result')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.value == '=') {
            if (calcValue.value === '') {
                return;
            }
            let result = eval(calcValue.value);
            calcValue.value = result;
        } else if (button.dataset.value == 'C') {
            calcValue.value = '';
        } else if (calcValue.value === '' && (button.dataset.value == '*' || button.dataset.value == '+' || button.dataset.value == '-' || button.dataset.value == '/')) {
            return;
        } else {
            calcValue.value += button.dataset.value;
        }
    });
});

// convertButton.addEventListener('click', () => {
//     convertResult.textContent = toCurrency.value
// })

currencyValue.addEventListener('input', () => {
    console.log(currencyValue.value)
})

