// ===== task #1 =====
console.log("\n===== task #1 =====");

const sum = (arr) => arr.reduce((prev, item) => prev + item);
const mult = (arr) => arr.reduce((prev, item) => prev * item);

const getResult = (arr, callback) => callback(arr);

console.log(getResult([3, 4, 1, 9], mult));
console.log(getResult([3, 4, 1, 9], sum));


// ===== task #2 =====
console.log("\n===== task #2 =====");

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
const getSortedArrayObj = (users) => users.sort((a, b) => a.age - b.age);

getSortedArrayObj(users);
console.log(users);


// ===== task #3 =====
console.log("\n===== task #3 =====");

const reversArr = (arr) => arr.reverse();
const toNumberArr = (arr) => arr.map(item => Number(item)).filter(item => !isNaN(item));

const each = (arr, callback) => callback(arr);

let arr = [1, '4', 9, 'two'];
console.log(each(arr, reversArr));

arr = [1, '4', false, 9, 'two'];
console.log(each(arr, toNumberArr));


// ===== task #4 =====
const timer = (deadline) => {
	const idDateTimer = setInterval(() => {
		console.log(new Date());
	}, 3000);
	
	setTimeout(() => {
		clearInterval(idDateTimer);
		console.log(`${deadline} секунд прошло`);
	}, deadline * 1000)
}

timer(30);


// ===== task #5 =====
function calling() {
    console.log('Звоню!');
	beeps(talk);
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...'),
		callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();

