//***********************************task 1***********************************

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

propsCount(mentor);



//***********************************task 2***********************************

let course = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    name: "Peter Peterson",
    cost: "300 USD"
};

function showProps(obj) {
    console.log(Object.keys(obj), Object.values(obj));
}

showProps(course);



//***********************************task 3***********************************

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        alert(`${this.name} ${this.surname}`);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return `${this.name} ${this.surname} ${middleName}`;
    }

    showCourse() {
        let date = new Date();
        let course = date.getFullYear() - this.year;
        return course;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6



//***********************************task 4***********************************



class Worker {

    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    get showExp() {
        return this.#experience;
    }

    set setExp(value) {
        if (value <= 0) throw new Error("Value is negative");
        this.#experience = value;
    }

    showSalary() {
        console.log(`${this.fullName} salary: ${this.workingDays * this.dayRate}`);
    }

    showSalaryWithExperience() {
        let salaryWithExperience = this.workingDays * this.dayRate * this.#experience;
        console.log(`${this.fullName} salary: ${salaryWithExperience}`);
    }

    get salary() {
        return this.workingDays * this.dayRate * this.#experience;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

// Output example:
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

// Output example:
// Tom Tomson
// Tom Tomson salary: 1056
// New experience: 1.2
// Tom Tomson salary: 1267.2
// New experience: 1.5
// Tom Tomson salary: 1584

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

// Output example:
// Andy Ander
// Andy Ander salary: 667
// New experience: 1.2
// Andy Ander salary: 800.4
// New experience: 1.5
// Andy Ander salary: 1000.5

let workers = [worker1, worker2, worker3];
function sortedSalary(arr) {
    arr.sort(function (a, b) {
        return a.salary - b.salary;
    });
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].fullName + ':' + arr[i].salary);
    }
}

console.log('Sorted salary: ');
sortedSalary(workers);
// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584




//***********************************task 5***********************************
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(height, side) {
        super();
        this.height = height;
        this.side = side;
    }

    getArea() {
        let triangleArea = 0.5 * this.side * this.height;
        return triangleArea;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        let squareArea = this.side * this.side;
        return squareArea;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }

    getArea() {
        let circleArea = Math.PI * this.r * this.r;
        return circleArea;
    }
}

function handleFigures(arr) {
    let totalArea = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof GeometricFigure) {
            totalArea += arr[i].getArea();
            console.log(`Geometric figure: ${arr[i].toString()} - area: ${arr[i].getArea()}`);
        }
    }
    return totalArea;
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));

// Приклад результату:
// 	Geometric figure: Triangle - area: 10
// Geometric figure: Square - area: 49
// Geometric figure: Circle - area: 78.53981633974483
// 137.53981633974485 // total area