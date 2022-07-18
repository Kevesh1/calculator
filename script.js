const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.center');
const operators = document.querySelectorAll('.right-side');
let lastOperator = '';
let selectedOperator = '';
let stack = [];
let reset = false;


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
        screen.innerText = 'aa'
        stack = [];
        return;
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

    screen.innerText += e.target.innerText;
    console.log(stack);
    console.log(screen.innerText);

    if(!stack[1] & screen.innerText !== '' & !reset){
        console.log('buzz')
        reset = true;
        screen.innerText = '';
    }
    

    if(lastOperator !== '') {
        selectedOperator.style.backgroundColor = 'orange';
    }


    console.log('button pressed')
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


        //const newValue = parseInt(screen.innerText);

        console.log(stack)

        if(stack.length === 2){
            screen.innerText = '';
            screen.innerText = operate(lastOperator ,stack[0],stack[1]);
            stack.pop();
            reset = false;
            console.log(stack);
        }    
        lastOperator = selectedOperator;
        
            //currentValue = parseInt(screen.innerText);

    });
});

function clearInput(){
    screen.innerText = "";
    stack = [];
    lastOperator.style.backgroundColor = 'orange'
    lastOperator = '';

}