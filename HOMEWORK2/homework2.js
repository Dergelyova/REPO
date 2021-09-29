// task 1

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x) || Boolean(y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x / String(y);
console.log(res4); // NaN
console.log(typeof res4); // "number"



//task 2

let num = prompt("Enter the number");

if (num % 2 === 0 && num > 0) {
    console.log(`Number ${num} is even positive number`);
} else {
    console.log(`Number ${num} isn't even positive number`);
}

if (num % 7 === 0) {
    console.log(`Number ${num} is multiple of 7`);
} else {
    console.log(`Number ${num} isn't multiple of 7`);
}



//task 3

const array = [];
array.push(230);
array.push("Mazda");
array.push(true);
array.push(null);
console.log(array.length);
array.push(prompt("What is your age?"));
console.log(array[4]);
array.shift();
console.log(array);


//task 4

let cities = ["Rome", "Lviv", "Warsaw"];
let joinedCities = cities.join('*');
console.log(joinedCities);


//task 5

let isAdult = confirm("Are you of legal age?");
isAdult ? console.log("You are adult enough") : console.log("You are too young");


//task 6

let a, b, c;
let checkPositive, checkExisting;

do {
    a = +prompt("What is the length of the first side of the triangle?");
    b = +prompt("What is the length of the second side of the triangle?");
    c = +prompt("What is the length of the third side of the triangle?");
    checkPositive = a > 0 && b > 0 && c > 0;
    checkExisting = a + b > c && a + c > b && b + c > a;
    if (checkPositive && checkExisting)
        console.log("Triangle exists");
    else console.log("Data is incorrect, please, try one more time");
} while (!(checkPositive && checkExisting));

let p = (a + b + c) / 2;
let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log("Area of triangle is " + area.toFixed(3));

let max = Math.max(a, b, c);
max = max * max;
if (a * a + b * b == max || b * b + c * c == max || c * c + a * a == max)
    console.log("This is right triangle");
else console.log("This is not right triangle");

//task 7

let date = new Date();
let now = date.getHours();

switch (true) {
    case now >= 5 && now < 11:
        alert("Доброго ранку");
        break;
    case now >= 11 && now < 17:
        alert("Доброго дня");
        break;
    case now >= 17 && now < 23:
        alert("Доброго вечора");
        break;
    default:
        alert("Доброї ночі");
}

if (now >= 5 && now < 11) {
    alert("Доброго ранку");
} else if (now >= 11 && now < 17) {
    alert("Доброго дня");
} else if (now >= 17 && now < 23) {
    alert("Доброго вечора");
} else {
    alert("Доброї ночі");
}