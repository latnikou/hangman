const readlineSync = require('readline-sync');
const words = ['лот', 'парез', 'танк'];
const word = words[Math.floor(Math.random() * words.length)]
const letters = word.split('');
let underscores = [];
for (let letter of word) {
    underscores.push('_');
}
let mistakes = 0;
let isWinner;
while (mistakes < 6) {
    console.log(underscores);
    let answer = readlineSync.question('Введите букву: ');
    for (let i = 0; i < word.length; i += 1) {
        if (letters[i] === answer) {
            underscores[i] = answer;
        } else if (answer.length > 1) {
            console.log('Введите одну букву');
        } 
    }
    if (letters.toString() == underscores.toString()) {
        console.log('Поздравляем! Вы победили, это и правда было слово:' + String(word))
        isWinner = true;
        break
    };

    mistakes += 1;
    continue
}   
if (!isWinner) {
    console.log('Вы проиграли или у вас закончились попытки.');
}
