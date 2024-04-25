// Begin Basic Functions
const add = function (a,b) {
    return a + b;
};

const subtract = function (a,b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a,b) {
    return a / b;
};

// Three Variables

let x;
let operator;
let y;

// Operate

function operate(x,operator,y) {
    if (operator == "+") {
        return add(x,y);
    } else if (operator == "-") {
        return subtract(x,y);
    } else if (operator == "*") {
        return multiply(x,y);
    } else if (operator == "/") {
        return divide(x,y);
    };
};

