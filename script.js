// Part 1: Mastering JavaScript Basics

let age = 34;
let ageMessage = document.getElementById("ageMessage");

if (age >= 18) {
    ageMessage.textContent = "You are an adult.";
} else {
    ageMessage.textContent = "You are a minor.";
}


// Function 1: Greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Function 2: Calculate sum
function calculateSum(a, b) {
    return a + b;
}

let functionMessage = document.getElementById("functionMessage");
functionMessage.textContent = greetUser("Jimmy") + " Sum of 5 + 10 is: " + calculateSum(5, 10);

// Part 3: Loops


let fruits = ["Apple", "Banana", "Cherry"];
let fruitList = document.getElementById("fruitList");

// Using for loop
for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
}

// Part 4: DOM Manipulation


let btn = document.getElementById("myButton");
let message = document.getElementById("message");

btn.addEventListener("click", function() {
    message.textContent = "Button clicked! 🎉";
    message.style.color = "green";
});
