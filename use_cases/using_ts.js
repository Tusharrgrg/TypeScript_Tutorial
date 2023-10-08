"use strict";
const button = document.querySelector("button");
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
function sum(number1, number2) {
    return number1 + number2;
}
if (button) {
    button.addEventListener('click', function () {
        console.log(sum(+number1.value, +number2.value));
    });
}
