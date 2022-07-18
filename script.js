const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.center');
const operators = document.querySelectorAll('.right-side');
let lastOperator = '';
let selectedOperator = '';
let stack = [];
let reset = false;
let pressed = true;
let equals = false;


function add(a,b){
    stack[0] = a + b;

    return a + b;
}

function subtract(a,b){
    stack[0] = a - b;
    return a - b;
}

function multiply(a,b){
    stack[0] = a * b;
    return a * b;
}

function divide(a,b){
    stack[0] = a / b;
    return a / b;
}

function operate(e, a, b){
    if(isNaN(a)|isNaN(b)){
        stack = [];
        return 'Error';
    }
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

    if(reset){
        if(screen.innerText !== '')
        stack.push(parseInt(screen.innerText));

        reset = false;
        screen.innerText = '';

    }

    screen.innerText += e.target.innerText;

    if(lastOperator !== '') {
        selectedOperator.style.backgroundColor = 'orange';
    }
}

function getPercentage(){
    screen.innerText = parseInt(screen.innerText)/100;
}

function getInverse(){
    screen.innerText = -parseInt(screen.innerText);
}



buttons.forEach(button => {
    button.addEventListener('click', registerInput)});

operators.forEach(operator => {
    operator.addEventListener('click', e => {

        if(lastOperator !== ''){
            lastOperator.style.backgroundColor = 'orange';
        }
        selectedOperator = e.target;
        selectedOperator.style.backgroundColor = 'red';


        if(stack.length < 2) {
            stack.push(parseInt(screen.innerText));
            screen.innerText = "";
        }

        console.log(stack)

        if(stack.length === 2){
            screen.innerText = '';
            screen.innerText = operate(lastOperator ,stack[0],stack[1]);
            stack = [];
            reset = true;
            console.log(stack);
        }

        lastOperator = selectedOperator;



    });
});

function clearInput(){
    screen.innerText = "";
    stack = [];
    lastOperator.style.backgroundColor = 'orange'
    lastOperator = '';

}