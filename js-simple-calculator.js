

let sign, resultText, resultNumber, number1, number2, resultButton, count, clearButton;

resultText = document.querySelector('.result-text');
resultNumber = document.querySelector('.result-number');
number1 = document.querySelector('.number-1');
number2 = document.querySelector('.number-2');
sign = document.querySelector('#sign');
resultButton = document.querySelector('.show-result');
articleBack = document.querySelector('article');
clearButton = document.querySelector('.clear');
count = 0;

resultButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clearFields);




function calculate () {

    num1 = Number(number1.value);
    num2 = Number(number2.value);

    if(num1 === Number(num1) && num2 === Number(num2) && num1 != 0) {
        switch (sign.value) {
            case 'summarized':
                resultNumber.textContent = num1 + num2;
                showResultToUser()
                break;
            case 'difference':
                resultNumber.textContent = num1 - num2;
                showResultToUser()
                break;
            case 'multiplication':
                resultNumber.textContent = num1 * num2;
                showResultToUser()
                break;
            case 'division':
                if (num2 != 0) {
                resultNumber.textContent = num1 / num2;
                showResultToUser()
                } else {
                    resultNumber.textContent = 'На ноль делить нельзя'
                }
                break;
            default:
                resultNumber.textContent = 'Выберите Знак';
                resultNumber.style.display = 'block';
                resultText.style.display = 'none';
                articleBack.style.height = '15rem';
        }

    } else {
        resultNumber.textContent = 'Введите число!';
        resultText.style.display = 'none';
        resultNumber.style.display = 'block';
        articleBack.style.height = '15rem';

    }

}

function showResultToUser() {
    resultText.style.display = 'block';
    resultNumber.style.display = 'block';
    articleBack.style.height = '21rem';
}

function clearFields() {
    number1.value = '';
    number2.value = '';
    sign.value = 'choose'
}