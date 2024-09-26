let currentInput = '';
let operator = '';
let previousInput = '';

function inputNumber(num) {
    if (currentInput.length < 12) {  // Membatasi input maksimal 12 digit
        currentInput += num;
        updateDisplay(currentInput);
    }
}

function inputOperator(op) {
    if (currentInput === '' && previousInput === '') return;  // Tidak ada input
    if (operator !== '') calculateResult();  // Jika ada operator sebelumnya, hitung hasilnya
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;  // Tidak ada angka yang bisa dihitung
    // Hasil tetap "I have crush on you" terlepas dari perhitungan apa pun
    updateDisplay("I have crush on you");
    currentInput = '';
    previousInput = '';
    operator = '';
}

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}
function inputNumber(num) {
    console.log(`Tombol ${num} ditekan`); // Menampilkan pesan di console setiap tombol angka ditekan
    if (currentInput.length < 12) {
        currentInput += num;
        updateDisplay(currentInput);
    }
}

function inputOperator(op) {
    console.log(`Operator ${op} ditekan`); // Menampilkan pesan di console setiap tombol operator ditekan
    if (currentInput === '' && previousInput === '') return;
    if (operator !== '') calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}
