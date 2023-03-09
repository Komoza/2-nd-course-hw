// ===== task #1 ===== 
for (let i = 0; i < 2; i++) {
    console.log('Hello');
}

// ===== task #2 =====
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ===== task #3 =====
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// ===== task #4 =====
let workers = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (worker in workers) {
    console.log(`${worker} - зарплата ${workers[worker]} долларов`);
}
// ===== task #5 =====
let num = 0;
let n = 1000;

while (n > 50) {
    n /= 2;
    num++;
}
console.log ("n = " + n);
console.log('num = ' + num);

// ===== task #6 =====
const firstFriday = 3;
for (let i = firstFriday; i <= 31; i = i + 7) {
    console.log(`Сегодня пятница ${i}-е число. Необходимо подготовить отчет.`);
}