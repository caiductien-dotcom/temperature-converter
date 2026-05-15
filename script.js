const tempInput = document.getElementById('tempInput');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// 1. Logic kiểm tra để bật/tắt nút Convert
function checkInputs() {
    const isFilled = tempInput.value !== '' && fromUnit.value !== '' && toUnit.value !== '';
    convertBtn.disabled = !isFilled;
}

[tempInput, fromUnit, toUnit].forEach(el => {
    el.addEventListener('input', checkInputs);
});

// 2. Logic chuyển đổi
convertBtn.addEventListener('click', () => {
    const val = parseFloat(tempInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    let result;

    if (from === to) {
        result = val;
    } else if (from === 'Celsius') {
        result = (to === 'Fahrenheit') ? (val * 9/5) + 32 : val + 273.15;
    } else if (from === 'Fahrenheit') {
        result = (to === 'Celsius') ? (val - 32) * 5/9 : (val - 32) * 5/9 + 273.15;
    } else if (from === 'Kelvin') {
        result = (to === 'Celsius') ? val - 273.15 : (val - 273.15) * 9/5 + 32;
    }

    // Làm tròn 2 chữ số thập phân cho đẹp
    const finalResult = Number.isInteger(result) ? result : result.toFixed(2);
    resultDiv.innerText = `${val} ${from} is ${finalResult} ${to}`;
});