const operationsBtns = document.querySelectorAll('.outer .inner');
const numbersBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const smallText = document.querySelector('.small');
const bigText = document.querySelector('.big');
const equalBtn = document.querySelector('#equal');


const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstOperator;
let secondOperator;
let operand = null;



function operate (a, b, operand) {
  if (operand === '+')
    return add(a, b);
  if (operand === '-')
    return substract(a, b);
  if (operand === 'X')
    return multiply(a, b);
  if (operand === '&#247')
    return divide(a, b);
}


operationsBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    smallText.textContent += e.target.innerHTML;
  });
});

numbersBtns.forEach(num => {
  num.addEventListener('click', e => {
    if (bigText.textContent === '0')
      bigText.textContent = e.target.innerHTML;
    else
      bigText.textContent += e.target.innerHTML;
  });
});

operatorBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    operand = e.target.innerHTML;
    firstOperator = bigText.textContent;
    bigText.textContent = 0;
  });
});

equalBtn.addEventListener('click', () => {
  secondOperator = bigText.textContent;
  bigText.textContent = operate(firstOperator, secondOperator, operand);
}); 




