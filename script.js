const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.center');
const operators = document.querySelectorAll('.right-side');
let currentValue = 0;

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b
}

function operate(operator, a, b){
    return operator(a,b);
}

function registerInput(e){
    screen.innerText = e.target.innerText;
    console.log('ftft')
}


buttons.forEach(button => {
    button.addEventListener('click', e => {
        screen.innerText += e.target.innerText;
        console.log('button pressed')
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        if(currentValue !== 0){
            screen.innerText = operate(e.target.id ,currentValue,parseInt(screen.innerText));
            console.log(e.target.id);
            console.log(screen.innerText);
        }
        currentValue = parseInt(screen.innerText);
        screen.innerText = "";
    });
});

function clearInput(){
    screen.innerText = "";
    currentValue = 0;
}