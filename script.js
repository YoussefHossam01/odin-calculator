const display = document.querySelector(".display");
const nine = document.querySelector(".button.number.nine");

let num1;
let operator;
let num2;

function add(a, b){
    return a + b;
    
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return b !== 0? a / b : Nan;
}
nine.addEventListener("click", () => {
    display.innerHTML = "9";
})