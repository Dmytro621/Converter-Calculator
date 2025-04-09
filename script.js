const calcValue = document.querySelector('#calc-value');
const buttons = document.querySelectorAll('[data-value]');
const operators = ['+', '-', '*', '/'];
const allCurrency = {
    AED: 4.028314,
    AFN: 78.964422,
    ALL: 98.870534,
    AMD: 429.677242,
    ANG: 1.963377,
    AOA: 1005.176197,
    ARS: 1180.499538,
    AUD: 1.785233,
    AWG: 1.974116,
    AZN: 1.858135,
    BAM: 1.942641,
    BBD: 2.212692,
    BDT: 133.145671,
    BGN: 1.959549,
    BHD: 0.413446,
    BIF: 3207.938094,
    BMD: 1.096731,
    BND: 1.475948,
    BOB: 7.572773,
    BRL: 6.41544,
    BSD: 1.095877,
    BTC: 0.000013398272,
    BTN: 95.131958,
    BWP: 15.545697,
    BYN: 3.586195,
    BYR: 21495.927054,
    BZD: 2.201408,
    CAD: 1.548113,
    CDF: 3153.101355,
    CHF: 0.93725,
    CLF: 0.028052,
    CLP: 1076.474784,
    CNH: 8.067712,
    CNY: 8.061027,
    COP: 4721.152652,
    CRC: 563.681737,
    CUC: 1.096731,
    CUP: 29.063371,
    CVE: 110.769903,
    CZK: 25.066912,
    DJF: 194.911341,
    DKK: 7.467318,
    DOP: 68.438875,
    DZD: 146.605497,
    EGP: 56.657783,
    ERN: 16.450965,
    ETB: 142.519884,
    EUR: 1,
    FJD: 2.539371,
    FKP: 0.859147,
    GBP: 0.855839,
    GEL: 3.021474,
    GGP: 0.859147,
    GHS: 17.009832,
    GIP: 0.859147,
    GMD: 78.414533,
    GNF: 9492.205897,
    GTQ: 8.452398,
    GYD: 229.279002,
    HKD: 8.510051,
    HNL: 28.252121,
    HRK: 7.543757,
    HTG: 143.39605,
    HUF: 403.175821,
    IDR: 18475.47512,
    ILS: 4.191817,
    IMP: 0.859147,
    INR: 94.500378,
    IQD: 1436.717574,
    IRR: 46172.37445,
    ISK: 145.108646,
    JEP: 0.859147,
    JMD: 173.274693,
    JOD: 0.777472,
    JPY: 161.838003,
    KES: 142.028238,
    KGS: 95.84453,
    KHR: 4403.374558,
    KMF: 492.976774,
    KPW: 987.064114,
    KRW: 1588.417612,
    KWD: 0.337552,
    KYD: 0.913313,
    KZT: 568.872858,
    LAK: 23755.192578,
    LBP: 98267.095003,
    LKR: 329.882437,
    LRD: 218.934937,
    LSL: 20.574136,
    LTL: 3.238362,
    LVL: 0.663402,
    LYD: 6.081427,
    MAD: 10.471041,
    MDL: 19.452235,
    MGA: 5110.76623,
    MKD: 61.536838,
    MMK: 2302.595683,
    MNT: 3854.175308,
    MOP: 8.758711,
    MRU: 43.704788,
    MUR: 49.24487,
    MVR: 16.900489,
    MWK: 1905.021715,
    MXN: 22.265054,
    MYR: 4.930904,
    MZN: 70.084036,
    NAD: 20.574811,
    NGN: 1722.421557,
    NIO: 40.305192,
    NOK: 11.836683,
    NPR: 152.218515,
    NZD: 1.941652,
    OMR: 0.422242,
    PAB: 1.095887,
    PEN: 4.113288,
    PGK: 4.527031,
    PHP: 62.728074,
    PKR: 307.790795,
    PLN: 4.236381,
    PYG: 8769.596574,
    QAR: 3.992651,
    RON: 4.97803,
    RSD: 117.18129,
    RUB: 94.484383,
    RWF: 1551.874326,
    SAR: 4.118335,
    SBD: 9.12837,
    SCR: 15.741771,
    SDG: 658.5905,
    SEK: 10.906359,
    SGD: 1.470289,
    SHP: 0.861858,
    SLE: 24.961418,
    SLL: 22997.901308,
    SOS: 626.784162,
    SRD: 40.515986,
    STD: 22700.116832,
    SVC: 9.589046,
    SYP: 14259.620059,
    SZL: 20.574187,
    THB: 37.486212,
    TJS: 11.907053,
    TMT: 3.849526,
    TND: 3.376286,
    TOP: 2.568657,
    TRY: 41.644083,
    TTD: 7.432653,
    TWD: 35.783076,
    TZS: 2937.862632,
    UAH: 45.25376,
    UGX: 4047.509203,
    USD: 1.096731,
    UYU: 46.981755,
    UZS: 14230.084101,
    VES: 80.353014,
    VND: 28504.037966,
    VUV: 138.20404,
    WST: 3.161593,
    XAF: 651.372501,
    XAG: 0.035687,
    XAU: 0.000357,
    XCD: 2.963971,
    XDR: 0.81222,
    XOF: 656.395762,
    XPF: 119.331742,
    YER: 269.002136,
    ZAR: 21.238267,
    ZMK: 9871.885922,
    ZMW: 30.784751,
    ZWL: 353.146926
};


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
            alert('Error')
        } else {
            calcValue.value += button.dataset.value;
        }
    });
});

const currencyValue = document.querySelector('#currency-value')
const fromCurrency = document.querySelector('#from-currency')
const toCurrency = document.querySelector('#to-currency');
const convertResult = document.querySelector('#conversion-result')
const access_key = '997e84774fcb1a7db1a525b3738b782f'

function convert() {
    fetch(`https://data.fixer.io/api/latest?access_key=${access_key}`)
        .then((response) => { return response.json() })
        .then((data) => {
            console.log(data)
            if (currencyValue.value == '') {
             return convertResult.textContent = 'Whrite an amount'
            } else if (toCurrency.value ==  `/` || fromCurrency.value == `/`) {
             return  convertResult.textContent = 'Choose a currency'
            } else {
            let to = data.rates[toCurrency.value]
            let from = data.rates[fromCurrency.value]
            const amount = parseFloat(currencyValue.value);
            
            convertResult.textContent = `${amount.toFixed(2)} ${fromCurrency.value} = ${((amount / from) * to).toFixed(2)} ${toCurrency.value}`
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


