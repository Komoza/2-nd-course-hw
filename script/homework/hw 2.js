// ===== task 1 ===== 
let a = 10;
// alert(`a = ${a}`);
console.log(`a = ${a}`);
a = 20;
// alert(`a = ${a}`);
console.log(`a = ${a}`);

// ===== task 2 ===== 
const yearOfFirstIphone = 2007;
// alert(`The first iPhone was released in ${YearOfFirstIphone}`);
console.log(`The first iPhone was released in ${yearOfFirstIphone}`);

// ===== task 3 =====
const jsCreatorName = 'Brendan Eich';
// alert(`JavaScript was created by ${jsCreatorName}`);
console.log(`JavaScript was created by ${jsCreatorName}`);

// ===== task 4 =====
const firstVariable = 10;
const secondVariable = 2; 
// alert(`10 + 2 = ${firstVariable + secondVariable} \n10 - 2 = ${firstVariable - secondVariable} \n10 * 2 = ${firstVariable * secondVariable} \n10 / 2 = ${firstVariable / secondVariable}`);
console.log(`10 + 2 = ${firstVariable + secondVariable} \n10 - 2 = ${firstVariable - secondVariable} \n10 * 2 = ${firstVariable * secondVariable} \n10 / 2 = ${firstVariable / secondVariable}`);

// ===== task 5 =====
const result = 2 ** 5;
// alert(`2 ** 5 = ${result}`);
console.log(`2 ** 5 = ${result}`);

// ===== task 6 =====
a = 9;
const b = 2;
// alert(`9 % 2 = ${9 % 2}`);
console.log(`9 % 2 = ${9 % 2}`);

// ===== task 7 =====
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
// alert(num);
console.log(num);

// ===== task 8 =====
const age = prompt('Сколько вам лет?', '25');
// alert(age);
console.log(`Вам ${age} лет`);

// ===== task 9 =====
const user = {
    name: 'Adam Smasher',
    age: 30,
    isAdmin: true,
}

// 9.1
user['city of residence'] = 'Night City';

// 9.2
user.age = 42;

// 9.3
delete user['city of residence'];

// 9.4 
const info = prompt("Какую информацию хотите узнать о пользователе?", 'name');
// alert(user[info]);
console.log(user[info]);


// ===== task 10 =====
const userName = prompt('What is your name?', 'Alexander');
// alert(`Hello, ${userName}`);
console.log(`Hello, ${userName}`);

let spending = prompt('Сколько вы хотите потратить?');
console.log(spending);