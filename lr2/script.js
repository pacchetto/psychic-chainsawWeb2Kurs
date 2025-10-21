const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const btn3 = document.getElementById("myBtn3");

function calculate() {
    let result = 10;
    console.log("result поза if:", result);

    if (true) {
        let result = 20;
        console.log("result всередині if:", result);
    }

    console.log("result після if:", result);
}

btn1.addEventListener("click", calculate);

function secretNumb(){
    const secretNumber = 6 % 10;
    const userNum = prompt("Введіть число від 0 до 9:");
        if (Number(userNum) === secretNumber) {
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
}

btn2.addEventListener("click", secretNumb);

btn3.addEventListener("click", function(){
    const name = prompt("Введіть своє ім'я:");
    const num1 = prompt("Введіть перше число:");
    const num2 = prompt("Введіть друге число:");
    const sum = Number(num1) + Number(num2);
    
    console.log("Hello, " + name + "! The sum of " + num1 + " and " + num2 + " is " + sum);   
});