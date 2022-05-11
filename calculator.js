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

const outputNumbers = document.getElementById('outputNumbers');

outputNumbers.textContent = ('0');

addNumberListeners()
addDecimalListener()
addClearListener()
addBackspaceListener()
addNegativeToggleListener()


 


function addNegativeToggleListener() {
  negativeToggle.addEventListener('click', function(e) {
    if (outputNumbers.textContent.startsWith('-')) {
      outputNumbers.textContent = outputNumbers.textContent.substring(1);
    } else {
      outputNumbers.textContent = '-' + outputNumbers.textContent;
    }
  })
}

function addBackspaceListener() {
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

function addClearListener() {
  clear.addEventListener('click', function(e) {
    outputNumbers.textContent = '0';
  })
}

function addDecimalListener() {
  decimal.addEventListener('click', function(e) {
    if (outputNumbers.textContent.includes('.')) {
      return;
    } else {
      outputNumbers.textContent = outputNumbers.textContent + '.';
    }
  })
}

function addNumberListeners() {
  zero.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '0';
  })
  one.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '1';
  })
  two.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '2';
  })
  three.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '3';
  })
  four.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '4';
  })
  five.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '5';
  })
  six.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '6';
  })
  seven.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '7';
  })
  eight.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '8';
  })
  nine.addEventListener('click', function(e) {
    addIgnoreLoneZero()
    outputNumbers.textContent = outputNumbers.textContent + '9';
  })
}

function addIgnoreLoneZero() {
  if (outputNumbers.textContent == '0') {
    outputNumbers.textContent = '';
  }
  if (outputNumbers.textContent == '-0') {
    outputNumbers.textContent = '-';
  }
}
