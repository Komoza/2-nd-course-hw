let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
words = words.sort(() => Math.random() - 0.5);

const rememberWords = () => {
    alert (`Внимательно посмотрите на слова и запомните их:\n${words.join(', ')}`);

    const firstWord = prompt('Какое было первое слово?').toUpperCase();
    const lastWord = prompt('Какой было последнее слово?').toUpperCase();

    if (firstWord === words[0].toUpperCase() && lastWord === words[words.length - 1].toUpperCase()) {
        alert('Поздравляю! Вы угадали оба слова!');
    } else if (firstWord === words[0].toUpperCase() || lastWord === words[words.length - 1].toUpperCase()) {
        alert('Вы угадали только 1 слово! Вы были близки к победе!');
    } else {
        alert('К сожалению вы не угадали ни одного слова!')
    }
}