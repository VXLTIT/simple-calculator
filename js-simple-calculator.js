

// declaration of variables and values


let sign, resultText, resultNumber, number1, historyCalc, articleBack,
    number2, resultButton, count, clearButton, div, para, historyCalcText;

resultText = document.querySelector('.result-text');
resultNumber = document.querySelector('.result-number');
number1 = document.querySelector('.number-1');
number2 = document.querySelector('.number-2');
sign = document.querySelector('#sign');
resultButton = document.querySelector('.show-result');
articleBack = document.querySelector('article');
clearButton = document.querySelector('.clear');
historyCalc = document.querySelector('.calculation-history');
historyCalcText = document.querySelector('h3');
count = 0;

// button operation

resultButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clearFields);




// functions responsible for the operation of the calculator

function calculate () {

    num1 = Number(number1.value);
    num2 = Number(number2.value);

    if(num1 === Number(num1) && num2 === Number(num2) && num1 != 0) {
        switch (sign.value) {
            case 'summarized':
                resultNumber.textContent = num1 + num2;
                showResultToUser()
                addCalculationToHistory();
                break;

            case 'difference':
                resultNumber.textContent = num1 - num2;
                showResultToUser()
                addCalculationToHistory();
                break;

            case 'multiplication':
                resultNumber.textContent = num1 * num2;
                showResultToUser()
                addCalculationToHistory();
                break;

            case 'division':
                if (num2 != 0) {
                resultNumber.textContent = num1 / num2;
                showResultToUser()
                addCalculationToHistory();
                } else {
                    resultNumber.textContent = 'На ноль делить нельзя'
                }
                break;

            default:
                resultNumber.textContent = 'Выберите Знак';
                resultNumber.style.display = 'block';
                resultText.style.display = 'none';
        }

    } else {
        resultNumber.textContent = 'Введите число!';
        resultText.style.display = 'none';
        resultNumber.style.display = 'block';
    }

}

function showResultToUser() {
    resultText.style.display = 'block';
    resultNumber.style.display = 'block';
}

function clearFields() {
    number1.value = '';
    number2.value = '';
    sign.value = 'choose'
}

// functions for calculation history

function addCalculationToHistory() {
    switch (sign.value) {
        case 'summarized':
            createParagraph();
            para.textContent = `${num1} + ${num2} = ${resultNumber.textContent}`;
            break;

        case 'difference':
            createParagraph();
            para.textContent = `${num1} - ${num2} = ${resultNumber.textContent}`;
            break;

        case 'multiplication':
            createParagraph();
            para.textContent = `${num1} \u00D7 ${num2} = ${resultNumber.textContent}`;
            break;

        case 'division':
            createParagraph();
            para.textContent = `${num1} \u00F7 ${num2} = ${resultNumber.textContent}`;
            break;
    };
}

function createParagraph() {
    div = document.createElement('div');
    para = document.createElement('p');
    historyCalc.appendChild(div);
    div.appendChild(para);
    historyCalcText.style.display = 'block';
    div.style.backgroundColor = 'grey';
    articleBack.style.paddingBottom = '1rem';
}