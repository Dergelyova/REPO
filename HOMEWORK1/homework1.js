// task2
console.log("Dergelyova");

// task3

let x = 3; // оголосіть дві змінні, запишіть у змінні будь-які значення
let y = 12;
alert(`${x}, ${y}`); //виведіть на екран значення змінних
x = y; //скопіюйте значення однієї змінної в іншу;
alert(`${x}, ${y}`); //виведіть на екран значення змінних


// task4

const user = {
    string: "Kristina",
    number: 24,
    boolean: true,
    undefined: undefined,
    null: null
};

// task5
let isAdult = confirm("Are you an adult?");
console.log(isAdult);

// task6
// В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
// 	- ваше ім’я
// 	- ваше прізвище
// 	- навчальна група
// 	- ваш рік народження.
let myName = "Kristina";
let mySurname = "Dergelyova";
let studyGroup = "Lv-636.JS Core";
let birthYear = 1997;
let isMarried = confirm("Are you married?");
console.log(typeof myName); //string
console.log(typeof mySurname); //string
console.log(typeof studyGroup); //string
console.log(typeof birthYear); //number
console.log(typeof isMarried); //boolean

// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
console.log(birthYear, isMarried, myName, mySurname, studyGroup);

// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
let i = null;
let r;
console.log(typeof i); //object
console.log(typeof r); //undefined

//task7
let username = prompt("What is your username?", );
let email = prompt("What is your email address?", );
let password = prompt("What is your password?", );
alert(`Dear ${username}, your email is ${email}, your password is ${password}.`);


//task8
let daysInMonth = prompt("How many days in Month?", );
let secInHour = 60;
let secInDay = secInHour * 24;
let secInMonth = secInDay * daysInMonth;
alert(`${secInHour}, ${secInDay}, ${secInMonth}`);