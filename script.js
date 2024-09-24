/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let num1 = "";
let num2 = "";
let currentOperator = "";
let result = "";

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.display');



/*----------------------------- Event Listeners -----------------------------*/

for (const button of buttons) {
    button.addEventListener("click", calculator);
}





/*-------------------------------- Functions --------------------------------*/

function calculator(event) {
    screen.innerText = event.target.innerText

    if (event.target.classList.contains('number')) {

        if (result) {
            num1 = result
        }

        if (!currentOperator && !result) {
            num1 += event.target.innerText
            screen.innerText = num1
        }
        else if (num1 && currentOperator) {
            num2 += event.target.innerText
            screen.innerText = num2

        }


    }
    if (event.target.innerText === ('+')) {
        currentOperator = "+"
        screen.innerText = "+"

    }
    if (event.target.innerText === ('-')) {
        currentOperator = "-"
        screen.innerText = "-"
    }

    if (event.target.innerText === ('*')) {
        currentOperator = "*"
        screen.innerText = "*"
    }

    if (event.target.innerText === ('/')) {
        currentOperator = "/"
        screen.innerText = "/"
    }
    if (event.target.innerText === ('=')) {
        if (currentOperator === "+") {
            result = parseInt(num1) + parseInt(num2)
            screen.innerText = result
        }
        if (currentOperator === "-") {
            result = parseInt(num1) - parseInt(num2)


            screen.innerText = result
        }
        if (currentOperator === "*") {
            result = parseInt(num1) * parseInt(num2)

            screen.innerText = result
        }
        if (currentOperator === "/") {
            result = parseInt(num1) / parseInt(num2)

            screen.innerText = result
        }
        num1 = result
        num2 = ""
    }
    if (event.target.innerText === ('C')) {
        num1 = ""
        num2 = ""
        result = ""
        currentOperator = ""
        screen.innerText = "Clear"
    }




}