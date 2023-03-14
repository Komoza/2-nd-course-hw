// ===== task #1 ===== 
console.log('===== task #1 =====');

let min = (a, b) => a < b ? a : b;

console.log(min(5, 2)); 

// ===== task #2 =====
console.log('===== task #2 =====');

let parity = (num) => num % 2 === 0 ? 'even' : 'odd';

console.log(parity(3));

// ===== task #3 =====
console.log('===== task #3 =====');

// 3.1
let squareConsole = (num) => console.log(num ** 2);
squareConsole(5);

// 3.2
let square = (num) => num ** 2;
console.log(square(4));

// ===== task #4 =====
console.log('===== task #4 =====');

let greeting = (yearsOld) => {
    if (yearsOld >= 0 && yearsOld <= 12) {
        console.log('Привет, друг!');
    
    } else if(yearsOld > 12) {
        console.log('Добро пожаловать!');
    } else {
        console.log('Неправильное значение');
    }
    // Также выведет неправильное значение при вводе букв
}
// greeting(Number(prompt('Сколько вам лет?')));
greeting(26);

// ===== task #5 =====
console.log('===== task #5 =====');

let mult = (a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

console.log(mult(10, 5));

// test
console.log(mult('10', 5));
console.log(mult(10, '5'));
console.log(mult(true, 5));
console.log(mult('i', 5));
console.log(mult(NaN, 5));
console.log(mult('10', '5'));


// ===== task #6 =====
console.log('===== task #6 =====');

let cube = (num) => {
    if (!isNaN (num)) {
        console.log(`${num} в кубе равняется ${num ** 3}`);
    } else {
        console.log('Переданный параметр не является числом');
    }
}

// test
for (let i = 1; i <= 10; i++) {
    cube(i);
}
cube('i');

// ===== task #7 =====
console.log('===== task #7 =====');

function getArea() {
    return 3.14 * this.radius ** 2;
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

let circle1 = {
    radius: 15,
    getArea: getArea,
    getPerimeter: getPerimeter
}

let circle2 = {
    radius: 8,
    getArea: getArea,
    getPerimeter: getPerimeter
}

console.log(`r = ${circle1.radius}, S = ${circle1.getArea()}`);
console.log(`r = ${circle1.radius}, С = ${circle1.getPerimeter()}`);
console.log(`r = ${circle2.radius}, S = ${circle2.getArea()}`);
console.log(`r = ${circle2.radius}, C = ${circle2.getPerimeter()}`);
