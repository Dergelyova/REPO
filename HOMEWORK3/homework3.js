// 1. Заданий масив з елементами[2, 3, 4, 5].За допомогою циклу
// for знайдіть добуток елементів цього масиву.Також реалізуйте завдання через
// while.

// task 1

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


//task 2

for (let i = 0; i <= 15; i++) {
    let parity;
    i % 2 === 0 ? parity = "even" : parity = "odd";
    console.log(`${i} is ${parity}`);
}


//task 3

// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.Випадкові числа генеруються із діапазону 1 - 500.
// Sample Output:
//     randArray(5); // 399,310,232,379,40

let k = [];

function randArray(k) {
    Math.random()
}


// 4. Напишіть функцію raiseToDegree(a, b), яка повертає результат піднесення числа a до степеня b.Функція працює тільки з цілими числами.Реалізувати інтерфейс введення чисел a, b з клавіатури.

// Sample Output:
//     raiseToDegree(3, 4); // 81

// 5. Реалізуйте функцію– findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення.Порада: для розв’ язку можете скористатися спеціальним масивом arguments.
// Sample Output:
//     findMin(12, 14, 4, -4, 0.2); // => -4

// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.Якщо всі елементи масиву унікальні(не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
//     findUnique([1, 2, 3, 5, 3]); // => false
// findUnique([1, 2, 3, 5, 11]); // => true



// 7. Напишіть функцію, яка повертає останній елемент масиву.Функція може приймати 2 параметра: 1 - ий масив, 2 - ий числовий параметр, що відповідає кількості 'х'
// останніх елементів масиву, які треба вивести.

// Sample Output:
//     console.log(lastElem([3, 4, 10, -5])); // -5
// console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
// console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]


// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

// Input string: 'i love java script'
// Output string: 'I Love Java Script'