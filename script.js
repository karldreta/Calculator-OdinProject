const display = document.querySelector('#display');
const numBtn = document.querySelectorAll('.numBtn');
numBtn.forEach(button => button.addEventListener('click', handleNum));
const operateBtn = document.querySelectorAll('.operateBtn');
operateBtn.forEach(button => button.addEventListener('click', handleOp));
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', inputDecimal);
const equals = document.querySelector('#equals');
equals.addEventListener('click', inputEquals);
const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', removeLastChar)
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.setAttribute("style", "border-color: #333333;");
    display.textContent = '0';
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
    } else if (operator == "x") {
        result = multiply(a,b);
    } else if (operator == "÷") {
        result = divide(a,b);
    };

    if(a === '' || b === '' || operator === '') {
        firstNum = '';
        lastNum = '';
        operator = ''; 
        result = 0
    }

    if (result.toString().includes(".")) {
        result = parseFloat(result.toFixed(2));
    }

    if(isNaN(result) && result != "LOL") {
        result = 0
    };

    display.textContent = result;
    return result;
};
// ------------->

let isEqualsPressed = false;

function inputEquals() {
    operate();
    firstNum = operate();
    lastNum = '';
    isEqualsPressed = true;
    display.setAttribute("style", "border-color: #333333;");
}


function handleNum (event) {
    let displayContent = display.textContent.replace(/\./g, '');
    if (displayContent.length >= 8) {
        display.setAttribute("style", "border-color: #8b0000; transform: scale(1.02);");
        return
    }
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

function isOperator(char) {
    const operators = ["+", "-", "x", "÷"];
    return operators.includes(char);
}

function handleOp(event) {
    let displayContent = display.textContent.replace(/\./g, '');
    if (displayContent.length >= 7 && !isOperator(event.target.textContent)) {
        return
    }

    if ((firstNum === '' && lastNum === '')&& (event.target.textContent === '-' || event.target.textContent === '+')) {
        firstNum += event.target.textContent;
        operator = '';
        display.textContent = firstNum;
        return;
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
        lastNum = firstNum; // Sets the first operand equal to the numbers before the operator
        firstNum = "";
    } else {
        const lastChar = display.textContent.slice(-1);
        if (isOperator(lastChar)) {
            display.textContent = display.textContent.slice(0, -1) + event.target.textContent;
            operator = event.target.textContent;
        } else {
            operate();
            display.setAttribute("style", "border-color: #333333;");
            lastNum = operate();
            operator = event.target.textContent;
            display.textContent += `${operator}`;
            firstNum = "";
        }
    }
}

function inputDecimal() {
    if (display.textContent.includes('.') && firstNum.includes('.')) {return;};
    if (firstNum.includes('.') && lastNum.includes('.')) {return;};
    if (display.textContent == 0) {display.textContent = '';};
    firstNum += event.target.textContent;
    display.textContent += event.target.textContent;
}

function removeLastChar() {
    if (display.textContent == 0) {return} else {
        firstNum = firstNum.toString().slice(0, -1);
    }

    if (isOperator(display.textContent.slice(-1))){
        operator = '';
        firstNum = lastNum; // Reverses the last operand back to the numbers before the operator (see handleOP()).
        lastNum = '';
        display.textContent = firstNum;
    } else if (lastNum != '') {
        display.textContent = `${lastNum}${operator}${firstNum}`;
    } else {
        display.textContent = firstNum;
    }

    display.setAttribute("style", "border-color: #333333;");
}


// Keyboard shortcuts

const body = document.querySelector("body");

body.addEventListener("keydown", (event) => {
    let key = event.key;
    // console.log(key);
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operators = ["+", "-", "*", "/"];
    switch (true) {
        case numbers.includes(key):
            handleNumFromKeyboard(key);
            break;
        case operators.includes(key):
            handleOpFromKeyboard(key);
            break;
        case key == ".":
            console.log(key);
            inputDecimalFromKeyboard(key);
            break;
        case key == "=" || key == "Enter":
            operate();
            break;
        case key == "Backspace":
            removeLastChar();
            break;
    }

});

function handleNumFromKeyboard(key) {
    let displayContent = display.textContent.replace(/\./g, '');
    if (displayContent.length >= 8) {
        display.setAttribute("style", "border-color: #8b0000; transform: scale(1.02);");
        return
    }
    if (isEqualsPressed && !isNaN(key)) {
        display.textContent = '';
        isEqualsPressed = false;
        firstNum = '';
        lastNum = '';
        operator = '';
    } else if (display.textContent == 0) {
        display.textContent = '';
        isEqualsPressed = false;
    }
    display.textContent += key;
    let input = key;
    firstNum += input;
}

function handleOpFromKeyboard(key) {
    if(key == "/" ) {key = "÷"};
    if(key == "*" ) {key = "x"};

    let displayContent = display.textContent.replace(/\./g, '');
    if (displayContent.length >= 7 && !isOperator(key)) {
        return
    }

    if ((firstNum === '' && lastNum === '')&& (key === '-' || key === '+')) {
        firstNum += key;
        operator = '';
        display.textContent = firstNum;
        return;
    }
    
    if (isEqualsPressed && isOperator(key)) {
        display.textContent += `${operator}`;
        lastNum = firstNum;
        operator = key;
        firstNum = '';
        isEqualsPressed = false;
    }

    if (operator === "") {
        operator = key;
        if (display.textContent == 0) {display.textContent = '';}
        display.textContent += `${operator}`;
        lastNum = firstNum; // Sets the first operand equal to the numbers before the operator
        firstNum = "";
    } else {
        const lastChar = display.textContent.slice(-1);
        if (isOperator(lastChar)) {
            display.textContent = display.textContent.slice(0, -1) + key;
            operator = key;
        } else {
            operate();
            display.setAttribute("style", "border-color: #333333;");
            lastNum = operate();
            operator = key;
            display.textContent += `${operator}`;
            firstNum = "";
        }
    }
}

function inputDecimalFromKeyboard(key) {
    if (display.textContent.includes('.') && firstNum.includes('.')) {return;};
    if (firstNum.includes('.') && lastNum.includes('.')) {return;};
    if (display.textContent == 0) {display.textContent = '';};
    firstNum += key;
    display.textContent += key;
}