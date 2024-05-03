const display = document.querySelector('#display');
const numBtn = document.querySelectorAll('.numBtn');
numBtn.forEach(button => button.addEventListener('click', handleNum));
const operateBtn = document.querySelectorAll('.operateBtn');
operateBtn.forEach(button => button.addEventListener('click', handleOp));
const equals = document.querySelector('#equals');
equals.addEventListener('click', inputEquals);
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
    firstNum = '';
    lastNum = '';
    operator = '';
});

// Inputs
let firstNum = "";
let lastNum = "";
let operator = "";

// Begin Basic Functions
const add = function (a,b) {
    return a + b;
};
const subtract = function (a,b) {
    return b - a;
};
const multiply = function (a, b) {
    return a * b;
};
const divide = function (a,b) {
    if (a === 0) {
        return "LOL";
    } else {
        return b / a;
    }
};
// ------------->

// Operate

function operate() {
    let result;

    a = parseFloat(firstNum);
    b = parseFloat(lastNum);

    if (operator == "+") {
       result = add(a,b);
    } else if (operator == "-") {
        result = subtract(a,b);
    } else if (operator == "*") {
        result = multiply(a,b);
    } else if (operator == "/") {
        result = divide(a,b);
    };

    if(a === '' || b === '' || operator === '') {
        firstNum = '';
        lastNum = '';
        operator = '';
        result = 0
    }

    if(isNaN(result) && result != "LOL") {result = 0;}

    display.textContent = result;
    return result;
};
// ------------->

let isEqualsPressed = false;

function inputEquals() {
    operate();
    firstNum = operate();
    isEqualsPressed = true;
}


function handleNum (event) {

    if (isEqualsPressed && !isNaN(event.target.textContent)) {
        display.textContent = '';
        isEqualsPressed = false;
        firstNum = '';
        lastNum = '';
        operator = '';
    } else if (display.textContent == 0) {
        display.textContent = '';
        isEqualsPressed = false;
    }
    display.textContent += event.target.textContent;
    let input = event.target.textContent;
    firstNum += input;
}

function handleOp(event) {
    if (firstNum === '' && (event.target.textContent === '-' || event.target.textContent === '+')) {
        firstNum += event.target.textContent;
        operator = '';
        display.textContent = firstNum;
        return;
    }

    function isOperator(char) {
        const operators = ["+", "-", "*", "/"];
        return operators.includes(char);
    }
    
    if (isEqualsPressed && isOperator(event.target.textContent)) {
        display.textContent += `${operator}`;
        lastNum = firstNum;
        operator = event.target.textContent;
        firstNum = '';
        isEqualsPressed = false;
    }

    if (operator === "") {
        operator = event.target.textContent;
        if (display.textContent == 0) {display.textContent = '';}
        display.textContent += `${operator}`;
        lastNum = firstNum;
        firstNum = "";
    } else {
        const lastChar = display.textContent.slice(-1);
        if (isOperator(lastChar)) {
            display.textContent = display.textContent.slice(0, -1) + event.target.textContent;
            operator = event.target.textContent;
        } else {
            operate();
            lastNum = operate();
            operator = event.target.textContent;
            display.textContent += `${operator}`;
            firstNum = "";
        }
    }
}


// Create a display function to separate the operator
