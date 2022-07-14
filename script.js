const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.center');

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

function clearInput(){
    screen.innerText = "";
}