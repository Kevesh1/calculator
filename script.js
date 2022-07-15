const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.center');
const operators = document.querySelectorAll('.right-side');
let currentValue = 0;
let noProcess = false;
let lastOperator = '';
let selectedOperator = '';

function add(a,b){
    currentValue = a + b;

    return a + b;
}

function subtract(a,b){
    currentValue = a - b;
    return a - b;
}

function multiply(a,b){
    currentValue = a * b;
    return a * b;
}

function divide(a,b){
    currentValue = a / b;
    return a / b;
}

function operate(e, a, b){
    switch(e.id){
        case 'add':
            return add(a,b);
        case 'subtract':
            return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'divide':
            return divide(a,b);
    }
}

function registerInput(e){
    screen.innerText = e.target.innerText;

    console.log('ftft')
}


buttons.forEach(button => {
    button.addEventListener('click', e => {
        screen.innerText += e.target.innerText;
        if(selectedOperator !== '') {
            selectedOperator.style.backgroundColor = 'orange';
        }
        console.log('button pressed')
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {

        if(lastOperator !== ''){
            lastOperator.style.backgroundColor = 'orange';
        }

        selectedOperator = e.target;
        selectedOperator.style.backgroundColor = 'red';
        lastOperator = selectedOperator;
        if(currentValue !== 0){
            screen.innerText = operate(selectedOperator ,currentValue,parseInt(screen.innerText));
            console.log(screen.innerText);
        }
        else{
            currentValue = parseInt(screen.innerText);
            screen.innerText = "";
        }
    });
});

function clearInput(){
    screen.innerText = "";
    currentValue = 0;
}