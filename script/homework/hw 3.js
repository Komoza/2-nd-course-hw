// ===== task #1 ===== 
// const checkPassword = prompt('Введите пароль');
const password = 'qwerty1234';
let checkPassword = 'qwerty';
if (password === checkPassword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// ===== task #2 =====
const c = 2;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// ===== task #3 =====
const d = 12;
const e = 70;

console.log(d > 100 || e > 100 ? 'Верно' : 'Неверно');

// ===== task #4 =====
const a = 2;
const b = 3;
console.log(a + b);

// ===== task #5 =====
const monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Winter');
        break;

    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
        
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;

    case 9:
    case 10:
    case 11:
        console.log('Fall');
        break;

    default:
        console.log('Ошибка');
}

// ===== task #7 =====
const checkEven = 2;

if (checkEven % 2 === 0) {
    console.log('Even');
} else if (checkEven % 2 === 1) {
    console.log('Odd');
} else {
    console.log('Not a number');
}

// ===== task #8 =====
const clientOS = 0;

if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
}
// На случай если будет Windows Phone ничего не предложит :)


// ===== task #9 =====
const clientDeviceYear = 2014;

// Банальное решение
if (clientOS === 1) {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
} else if (clientOS === 0) {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для IOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для IOS по ссылке');
    }
}

// Интересное решение
let light = clientDeviceYear >= 2015 ? '' : ' облегченную';

if (clientOS === 1) {
    console.log(`Установите${light} версию приложения для Android по ссылке`);
} else if (clientOS === 0) {
    console.log(`Установите${light} версию приложения для iOS по ссылке`);
}