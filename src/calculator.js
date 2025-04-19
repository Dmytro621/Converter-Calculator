export function exportCalculator() {
    const calcValue = document.querySelector('#calc-value');
    const buttons = document.querySelectorAll('[data-value]');
    const operators = ['+', '-', '*', '/'];


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let lastValue = calcValue.value.slice(-1)
            let newValue = button.dataset.value

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
            } else if (operators.includes(newValue) && operators.includes(lastValue)) {
                alert('You cannot select two operators')
            } else {
                calcValue.value += button.dataset.value;
            }
        });
    });
}

