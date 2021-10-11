//***********************************task 1***********************************

function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Parametrs should be numbers");
    } else if (width <= 0 || height <= 0) {
        throw new Error("Parametrs should be positive numbers");
    }
    return width * height;
}
let a = +prompt('What is width of rectangle?');
let b = +prompt('What is height of rectangle?');
try {
    let result = calcRectangleArea(a, b);
    alert(result);
} catch (e) {
    alert('Error:' + e.message);
}



//***********************************task 2***********************************.

(function checkAge() {
    let age = +prompt('What is your age?');
    try {
        if (age === 0) {
            throw new Error('The field is empty! Please enter your age');
        } else if (isNaN(age)) {
            throw new TypeError('Information you entered is not a number! Please enter your age in numbers');
        } else if (age < 14) {
            throw new Error('You are too young to watch this video!Please come back later');
        }
        alert('Welcome to watch video!')
    } catch (e) {
        alert(`${e.name}: ${e.message}`);
    }
})();



//***********************************task 3***********************************

class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    if (isNaN(month) || month < 1 || month > 12) {
        throw new MonthException('Incorrect month number');
    }
    const date = new Date(2021, month - 1);
    return date.toLocaleString('en-US', { month: 'long' });
}

try {
    console.log(showMonthName(5));
    //console.log(showMonthName(14))
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}



//***********************************task 4***********************************

function showUser(a) {
    if (a < 0) {
        throw new Error("ID must not be negative");
    }
    return { id: a };
}

function showUsers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        try {
            let user = showUser(arr[i]);
            result.push(user);
        } catch (e) {
            console.log(`${e.name} : ${e.message} : ${arr[i]}`);
        }
    }
    console.log(result);
}

showUsers([7, -12, 44, 22]); // Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]