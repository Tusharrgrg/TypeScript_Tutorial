var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var proces = document.querySelector("button");
function add(a, b) {
    return a + b;
}
var element = document.getElementById("add_result");
// this shows button's behaviour on clich that button
proces === null || proces === void 0 ? void 0 : proces.addEventListener('click', function () {
    if (element) {
        element.textContent = " The Result is : " + add(+input1.value, +input2.value).toString();
    }
});
