console.log('Decimal To Binary');

let deci = document.getElementById('decimalIN');
let Decimal = document.getElementById('decimal');
let hexadecimal = document.getElementById('hexaDecimal');
let Octal = document.getElementById('octal');

let convert = document.getElementById('convert');
convert.addEventListener('click', function () {
    let number = parseInt(deci.value);
    let decimal = number.toString(2); // binary
    let hexa = number.toString(16); // hexadecimal
    let octal = number.toString(8); // ocatal
    
    Decimal.innerHTML = `<output>${decimal}</output>`;
    hexadecimal.innerHTML = `<output>${hexa}</output>`;
    Octal.innerHTML = `<output>${octal}</output>`;
});

let clear = document.getElementById('clear');

clear.addEventListener('click', function () {
    window.location.reload();

    deci.value = '';
    Decimal.innerHTML = '';
    hexadecimal.innerHTML = '';
    Octal.innerHTML = '';
})
