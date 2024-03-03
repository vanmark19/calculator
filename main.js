const operationsBtns = document.querySelectorAll('.outer .inner');
const numbersBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const smallText = document.querySelector('.small');
const bigText = document.querySelector('.big');
const equalBtn = document.querySelector('#equal');
const pointBtn = document.querySelector('#point');
const backSpaceBtn = document.querySelector('#backspace');
const clearBtn = document.querySelector('#clear');

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (+b !== 0)
    return a / b
  else
    return 'Nuh uh';
};

let firstOperator;
let secondOperator;
let operand = null;

let hasPoint = false;
let ignoreBackSpace = false;
let resetBig = false;


function operate (a, b, operand) {
  if (operand === '+')
    return add(a, b);
  if (operand === '-')
    return substract(a, b);
  if (operand === 'x')
    return multiply(a, b);
  if (operand === document.querySelector('#div').innerHTML);
    return divide(a, b);
}


operationsBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (e.target.innerHTML !== '.' && bigText.textContent.length <= 11)
      smallText.textContent += e.target.innerHTML;
  });
});


numbersBtns.forEach(num => {
  num.addEventListener('click', e => {
    if (bigText.textContent === '0' || resetBig)
      bigText.textContent = e.target.innerHTML;
    else if (bigText.textContent.length <= 11)
      bigText.textContent += e.target.innerHTML;
  });
});

operatorBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (operand !== null){
      bigText.textContent = operate(+firstOperator, +bigText.textContent, operand.trim()).toString().slice(0, 11);
      firstOperator = bigText.textContent;
      secondOperator = null;
      operand = e.target.innerHTML;
      resetBig = true;
      hasPoint = false;
    } else {
      operand = e.target.innerHTML;
      firstOperator = bigText.textContent;
      bigText.textContent = 0;
      ignoreBackSpace = false;
      hasPoint = false;
    }
   
   
  });
});

equalBtn.addEventListener('click', () => {
  secondOperator = bigText.textContent;
  bigText.textContent = operate(+firstOperator, +secondOperator, operand.trim()).toString().slice(0, 11);
  hasPoint = false;
  ignoreBackSpace = true;
  operand = null;
}); 

pointBtn.addEventListener('click', () => {
  if (!hasPoint){
    bigText.textContent += '.';
    smallText.textContent += '.';
    hasPoint = true;
  }
});

backSpaceBtn.addEventListener('click', () => {
  if (bigText.textContent[bigText.textContent.length - 1] === '.')
    hasPoint = false;

  bigText.textContent = bigText.textContent.slice(0, -1);
  if (!ignoreBackSpace)
    smallText.textContent = smallText.textContent.slice(0, -1);
});

clearBtn.addEventListener('click', () => {
    bigText.textContent = 0;
    smallText.textContent = '';
    firstOperator = null;
    secondOperator = null;
    operand = null;
    hasPoint = false;
    resetBig = false;
});

window.addEventListener('keydown', e => {
  if (e.key === '0')
    document.querySelector('#zero').click();
  if (e.key === '1')
    document.querySelector('#one').click();
  if (e.key === '2')
    document.querySelector('#two').click();
  if (e.key === '3')
    document.querySelector('#three').click();
  if (e.key === '4')
    document.querySelector('#four').click();
  if (e.key === '5')
    document.querySelector('#five').click();
  if (e.key === '6')
    document.querySelector('#six').click();
  if (e.key === '7')
    document.querySelector('#seven').click();
  if (e.key === '8')
    document.querySelector('#eight').click();
  if (e.key === '9')
    document.querySelector('#nine').click();
  if (e.key === '+')
    document.querySelector('#add').click();
  if (e.key === '-')
    document.querySelector('#substract').click();
  if (e.key === '*')
    document.querySelector('#times').click();
  if (e.key === '/')
    document.querySelector('#div').click();
  if (e.key === 'Enter' || e.key === '=')
    document.querySelector('#equal').click();
  if (e.key === '.')
    document.querySelector('#point').click();
  if (e.key === 'Backspace')
    document.querySelector('#backspace').click();
  if (e.key === 'c' || e.key === 'C')
    document.querySelector('#clear').click();
});