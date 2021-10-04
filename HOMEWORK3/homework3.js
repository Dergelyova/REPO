//***********************************task 1***********************************

//1.1
const arr = [2, 3, 4, 5];
let mult = 1;
for (let i in arr) {
    mult *= arr[i];
}
console.log(mult);

//1.2
const arr = [2, 3, 4, 5];
let mult = 1;
let i = 0;
while (i < arr.length) {
    mult *= arr[i];
    i++;
}
console.log(mult);



//***********************************task 2***********************************
for (let i = 0; i <= 15; i++) {
    let parity;
    i % 2 === 0 ? parity = "even" : parity = "odd";
    console.log(`${i} is ${parity}`);
}


//***********************************task 3***********************************

function randArray(k) {
    let arr = [];
    while (arr.length < k) {
        arr.push(Math.floor(Math.random() * 500) + 1);
    }
    console.log(arr);
}

//***********************************task 4***********************************

function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        alert(Math.pow(a, b));
    } else {
        alert("Arguments should be integer correct numbers");
    }
}

raiseToDegree(+prompt("What is base number?"), +prompt("What is exponent?"));


//***********************************task 5***********************************

function findMin() {
    return Math.min(...arguments);
}
findMin(12, 14, 4, -4, 0.2);


//***********************************task 6***********************************

function findUnique(arr) {
    uniqueArr = [...new Set(arr)];
    return uniqueArr.length === arr.length;
}


//***********************************task 7***********************************

function lastElem(arr, n = 1) {
    return arr.slice(-n);
}


//***********************************task 8***********************************

function toTitleCase(str) {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}