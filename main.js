let num1 = ''; 
let num2 = ''; 
let operator = ''; 
let finish  = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '÷'];

// display
const out = document.querySelector('.display');

document.querySelector('.buttons').onclick = (event) => {
    // no button pressed
    if(!event.target.classList.contains('btn')) return;
    
    // pressed clearAll c
    if(event.target.classList.contains('c')) {
        num1 = ''; 
        num2 = ''; 
        operator = ''; 
        finish = false;
        out.textContent = 0;
    }

    // getting pressed button
    const key = event.target.textContent;

    // pressed 0-9 or .
    
    if (digit.includes(key)) {
        if (num2 === '' && operator === '') {
            if (key === '.' && num1.includes('.')) {
                num1 += '';
                out.textContent = num1;
            } else if (num1 === '0' && key !=='.'){
                num1 += '';
                out.textContent = num1;
            } else {
                num1 += key;
                out.textContent = num1;
            }
        } else if (num1 !== '' && num2 !== '' && finish) {
            num2 = key;
            finish = false;
            out.textContent = num2;
        } else {
            if (key === '.' && num2.includes('.')) {
                num2 += '';
                out.textContent = num2;
            } else if (num2 === '0' && key !=='.'){
                num2 += '';
                out.textContent = num2;
            } else {
                num2 += key;
                out.textContent = num2;
            }
        }
        return;
    }

     // pressed + − ÷ ×
     if (action.includes(key)) {
        if (operator !==''){
            out.textContent = "Error. Click =";
            return;
        } else {
        operator = key;
        out.textContent = operator;
        console.log(num1, num2 , operator);
        return;  
    }}

    // pressed =
    if (key === '=') {
        switch (operator) {
            case "+":
                num1 = (+num1) + (+num2);
                break;
            case "-":
                num1 = num1 - num2;
                break;
            case "x":
                num1 = num1 * num2;
                break;
            case "÷":
                if (num2 == 0) {
                    out.textContent = 'Impossible!';
                    num1 = '';
                    num2 = '';
                    operator = '';
                    return;
                }
                num1 = num1 / num2;
                break;
        }
        finish = true;
        out.textContent = num1.toFixed(2);
        console.log(num1, num2 , operator);
    }
    
}

// adding keyboard input (only numbers)

const numbers = document.querySelectorAll('.number'); 

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickButton(e.key);
    }
    });

    function clickButton(key) {
        numbers.forEach(button => {
            if (button.innerText === key) {
                button.click();
            }
        })
    }   

