const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const negativeToggle = document.getElementById('negativeToggle');
const backspace = document.getElementById('backspace');
const clear = document.getElementById('clear');
let result = NaN;

const outputNumbers = document.getElementById('outputNumbers');

const operand1Display = document.getElementById('operand1');
const operatorDisplay = document.getElementById('operator');
const operand2Display = document.getElementById('operand2');
const equalsDisplay = document.getElementById('equalsDisplay');

let operand1 = NaN;
let operand2 = NaN;
let operator = '';
let previousButton = '';


outputNumbersToZero();





makeNumberListeners();
makeDecimalListener();
makeNegativeToggleListener();


makeClearListener();
makeBackspaceListener();
makeEqualsListener()



function operand1IsNaN() {
  if (operand1 != operand1) {
    return true;
  } else {
    return false;
  }
}

function operand2IsNaN() {
  if (operand2 != operand2) {
    return true;
  } else {
    return false;
  }
}

function previousButtonIsOperator() {
  if (previousButton == 'operator') {
    return true;
  } else {
    return false;
  }
}
 
function previousButtonIsEquals() {
  if (previousButton == 'equals') {
    return true;
  } else {
    return false;
  }
}


function makeNegativeToggleListener() {
  negativeToggle.addEventListener('click', function(e) {
    if (outputNumbers.textContent.startsWith('-')) {
      outputNumbers.textContent = outputNumbers.textContent.substring(1);
    } else {
      outputNumbers.textContent = '-' + outputNumbers.textContent;
    }
  })
}

function makeBackspaceListener() {
  backspace.addEventListener('click', function(e) {
    outputNumbers.textContent = outputNumbers.textContent.substring(0, outputNumbers.textContent.length - 1);
    if (outputNumbers.textContent == '') {
      outputNumbers.textContent = '0';
    }
    if (outputNumbers.textContent == '-') {
      outputNumbers.textContent = '0';
    }
  })
}

function makeClearListener() {
  clear.addEventListener('click', function(e) {
    resetOperand1OperatorOperand2Equals();
    outputNumbers.textContent = '0';
  })
}

function makeDecimalListener() {
  decimal.addEventListener('click', function(e) {
    if (outputNumbers.textContent.includes('.')) {
      return;
    } else {
      outputNumbers.textContent = outputNumbers.textContent + '.';
    }
  })
}

function setOperand1() {
  operand1 = parseFloat(outputNumbers.textContent);
}

function setOperand2() {
  operand2 = parseFloat(outputNumbers.textContent);
}

function printOperand1() {
  operand1Display.textContent = `${operand1}`;
}

function printOperand2() {
  operand2Display.textContent = `${operand2}`;
}

function makeNumberListeners() {
  zero.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '0';
  })
  one.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '1';
  })
  two.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '2';
  })
  three.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '3';
  })
  four.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '4';
  })
  five.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '5';
  })
  six.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '6';
  })
  seven.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '7';
  })
  eight.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '8';
  })
  nine.addEventListener('click', function(e) {
    numbersExceptions();
    ignoreLoneZero();
    resetPreviousButton();
    outputNumbers.textContent = outputNumbers.textContent + '9';
  })
}

function numbersExceptions() {
  if (previousButtonIsOperator()) {
    setOperand1();
    printOperand1();
    resetOutputNumbers();
  } else if (previousButtonIsEquals()){
    resetOperand1OperatorOperand2Equals();
    resetOutputNumbers();
  } else {
    return;
  }
}

function makeEqualsListener() {
  equals.addEventListener('click', function(e) {
    equalsExceptions()
    printEquals();
    previousButton = 'equals';
  } )
}

function equalsExceptions() {
  if (operator == '') {
    setOperand1();
    printOperand1();
  } else if (previousButtonIsEquals()) { {
    if (operand2 != operand2) {
      setOperand1();
      //math
    } else {
      setOperand2();
      //math
    }
  }
  printResult();
  printOperand2();
  printOperand1();
  }
}
      
function printEquals() {
  equalsDisplay.textContent = '=';
}

function printResult() {
  outputNumbers.textContent = `${result}`;
}


function ignoreLoneZero() {
  if (outputNumbers.textContent == '0') {
    outputNumbers.textContent = '';
  }
  if (outputNumbers.textContent == '-0') {
    outputNumbers.textContent = '-';
  }
}

function outputNumbersToZero() {
  outputNumbers.textContent = ('0');
}

function resetOperand1OperatorOperand2Equals() {
  operand1Display.textContent = '';
  operand2Display.textContent = '';
  operatorDisplay.textContent = '';
  equalsDisplay.textContent = '';
  operand1 = NaN;
  operand2 = NaN;
  operator = '';
}

function resetPreviousButton() {
  previousButton = '';
}

function resetOutputNumbers() {
  outputNumbers.textContent = '0';
}