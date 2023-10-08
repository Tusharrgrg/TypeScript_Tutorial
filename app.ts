const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement
const proces = document.querySelector("button")

function add(a: number, b: number) {
    return a + b;
}

const element = document.getElementById("add_result");

// this shows button's behaviour on clich that button
// proces?.addEventListener('click', function () {
//     if (element) {
//         element.textContent = " The Result is : " + add(+input1.value, +input2.value).toString();
//     }
// })

// also we can define a object like this in typescript
// const personDemo : {
//     name : string,
//     age : number
// } ={
//     name : "Tushar",
//     age : 21
// }

// this sis an object datatype in typescript
const person = {
    name : "Tushar",
    age : 21,
    hobbies : ["Sports", "Music", "Art & Craft"]
}

console.log(person.name);
