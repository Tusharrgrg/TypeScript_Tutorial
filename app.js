var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var proces = document.querySelector("button");
function add(a, b) {
    return a + b;
}
var element = document.getElementById("add_result");
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
var person = {
    name: "Tushar",
    age: 21,
    hobbies: ["Sports", "Music", "Art & Craft"]
};
console.log(person.name);
