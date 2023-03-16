// ===== task #1 ===== 
console.log('\n===== task #1 =====');

let arr = [1, 5, 4, 10, 0, 3]; // исользую let потому что в следущих заданиях буду переопределять этот массив, чтобы не создавать новый
for (item of arr) {
    console.log(item);
    if (item === 10) break;
}

// ===== task #2 =====
console.log('\n===== task #2 =====');

console.log(arr.indexOf(4));

// ===== task #3 =====
console.log('\n===== task #3 =====');

arr = [1, 3, 5, 10, 20];
console.log(arr.join(' ')); // через пробел
console.log(arr.join('')); // через пустую строку

// ===== task #4 =====
console.log('\n===== task #4 =====');

arr = [];
for (let i = 0; i < 3; i++) {
    arr.push([]);
    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}
console.log(arr);

// ===== task #5 =====
console.log('\n===== task #5 =====');

arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// ===== task #6 =====
console.log('\n===== task #6 =====');

// version 1
arr = [9, 8, 7, 'a', 6, 5];
arr.sort().splice(arr.indexOf('a'), 1);
console.log(arr);

// version 2
arr = [9, 8, 7, 'a', 6, 5];
arr = arr.filter(item => item !== 'a').sort();
console.log(arr);

// ===== task #7 =====
console.log('\n===== task #7 =====');

arr = [9, 8, 7, 6, 5];

// console.log(arr.includes(Number(prompt('Введите число'))));
console.log(arr.includes(9));

// ===== task #8 =====
console.log('\n===== task #8 =====');

let string = 'abcdef';
string = string.split('').reverse().join('');
console.log(string);

// ===== task #9 =====
console.log('\n===== task #9 =====');

arr = [[1, 2, 3,],[4, 5, 6]];
arr = [...arr[0], ...arr[1]];
console.log(arr);

// ===== task #10 =====
console.log('\n===== task #10 =====');

arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random(1) * 10 + 1));
}
console.log(arr);

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}

// ===== task #11 =====
console.log('\n===== task #11 =====');

const sqr = arr => arr.map(item => item ** 2);

arr = [1, 2, 3, 4, 5];
console.log(sqr(arr));

// ===== task #12 =====
console.log('\n===== task #12 =====');

const stringLength = arr => arr.map(item => item.length);

arr = ['hello', 'how', 'are', 'you', 'my', 'friends'];
console.log(stringLength(arr));

// ===== task #13 =====
console.log('\n===== task #13 =====');

const onlyNegative = arr => arr.filter(item => item < 0);

arr = [-2, 1, 5, 6, -4, 3, -2, 3, 1, -5, 2];
console.log(onlyNegative(arr));

// ===== task #14 =====
console.log('\n===== task #14 =====');

arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random(1) * 10));
}
const arrEven = arr.filter(item => item % 2 === 0);

console.log(arr);
console.log(arrEven);

// ===== task #15 =====
console.log('\n===== task #15 =====');

arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random(1) * 10));
}
console.log(arr);

average = arr.reduce((prev, item) => prev + item) / arr.length;
console.log(average);