// ===== task #1 =====
console.log("\n===== task #1 =====");

console.log('Hello, world!'.toUpperCase());


// ===== task #2 =====
console.log("\n===== task #2 =====");

const searchStart = (arr, str) => {
    let result = [];
    arr.forEach(item => {
        if (item.toUpperCase().startsWith(str.toUpperCase())) {
            result.push(item);
        }
    });
    return result;
}

console.log(searchStart(['John', 'Sam', 'Jess', 'Max', 'Henry', 'Sandy', 'Scarlett'], 'Sa'));


// ===== task #3 =====
console.log("\n===== task #3 =====");

const num = 32.58884;

console.log(Math.floor(num)); // До меньшего целого
console.log(Math.ceil(num)); // До большего целого
console.log(Math.round(num)); // До ближайшего целого


// ===== task #4 =====
console.log("\n===== task #4 =====");

console.log(`min: ${Math.min(52, 53, 49, 77, 21, 32)}`);
console.log(`max: ${Math.max(52, 53, 49, 77, 21, 32)}`);


// ===== task #5 =====
console.log("\n===== task #5 =====");

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(getRandom(1, 10));


// ===== task #6 =====
console.log("\n===== task #6 =====");

const getRandomArrNumbers = (num) => {
    arr = [];
    for (let i = 1; i <= num / 2; i++) {
        arr.push(getRandom(0, num));
    }
    return arr;
}

console.log(getRandomArrNumbers(14));


// ===== task #7 =====
console.log("\n===== task #7 =====");

const getRandomRange = (min, max) => {
    // на случай если первое число передадут больше чем второе, мы меняем их местами
    if (min > max) {        // swapped value
        min = min + max;
        max = min - max;
        min = min - max;
    }

    return getRandom(min, max);
}

console.log(getRandomRange(1, 8));


// ===== task #8 =====
console.log("\n===== task #8 =====");

const currentDate = new Date();
console.log(currentDate);


// ===== task #9 =====
console.log("\n===== task #9 =====");

let date = new Date();
date.setDate(currentDate.getDate() + 73)

console.log(date);


// ===== task #10 =====
console.log("\n===== task #10 =====");

const showDate = (date) => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}\n${date.toTimeString()}`;
}

console.log(showDate(currentDate));