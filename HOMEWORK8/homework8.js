// ******************task1*********************

function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}

upperCase('regexp');
upperCase('RegExp');


// ******************task2*********************
function checkEmail(email) {
    return /^(.+)@(.+)/.test(email);
}
checkEmail("Qmail2@gmail.com");

// ******************task3*********************

let regexp = /d(b+)(d)/i;
let str = "cdbBdbsbz"
console.log(str.match(regexp));


//******************task4*********************

let regexp = /(\w+)\s(\w+)/i;
let str = "Java Script";
console.log(str.replace(regexp, '$2, $1'));

//******************task5*********************

function checkCard(num) {
    let regexp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!regexp.test(num)) {
        console.log("Card number is not valid");
    } else {
        console.log("Card number is valid");
    }
}

checkCard("9999-9999-9999-9999");
// Card number is valid
checkCard("v999-9999-9999-9999");
// Card number is not valid
checkCard("9999999999999999");
// Card number is not valid

//******************task6*********************

function checkEmail(mail) {
    let regexp = /^[A-Za-z\d](?!.*--)([-_a-zA-Z0-9]+)?@.+\..+/;
    if (regexp.test(mail)) {
        console.log("Email is correct!");
        return true;
    } else {
        console.log("Email is not correct!");
        return false;
    }
}

checkEmail('my_mail@gmail.com');
// Email is correct!
checkEmail('#my_mail@gmail.com');
// Email is not correct!
checkEmail('my_ma--il@gmail.com');
// Email is not correct!


//******************task7*********************

function checkLogin(login) {
    let regexp = /^[a-zA-Z]([A-Za-z]|(\d+\.\d+)|(\d*))+$/;
    if (regexp.test(login)) {
        console.log(true);
    } else {
        console.log(false);
    }
    let regex = /(\d+\.\d+)|\d+/g;
    console.log(login.match(regex));
}

checkLogin('ee1.1ret3');
// true 
// 1.1, 3

checkLogin('ee1*1ret3');
// false 
// 1, 1, 3