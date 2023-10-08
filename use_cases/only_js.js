const button = document.querySelector("button")
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");

function sum(number1, number2){
    return number1+number2;
}

button.addEventListener('click', function(){
    console.log(sum(number1.value, number2.value));
})

// so here what happpens in sum input element always input take as a string so if we perform sum function over the input
// then it concatinate strings rathen then sum of number so this is defualt behaviour of javascript so overcome that problem 
// we can use if else but it make code complex and lengthy so we will use typescript.