const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let numbers = "";
while (numbers.length < 3) {
    let num = Math.floor(Math.random ()*10);
    if (!numbers.includes(num)) {
        numbers += num;
    }
}

numbers = numbers.split("").map(Number);
console.log(numbers);

function solution(numbers, guess) {
    let numS = 0;
    let numB = 0;
    
    for (let i = 0; i < numbers.length; i++){ 
        if (numbers[i] === guess[i]) {
            numS++;
        } else if (numbers.includes(guess[i])) {
            numB++;
        }
    }
    return {numS, numB};
}

let count = 1;
console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');

function Game() {
    rl.question(`${count}번째 시도 : `, (input) => {
    count++;
    const guess = input.split("").map(Number);
    const result = solution(numbers, guess);
    if (result.numS === 3) {
        console.log('3S');
        console.log(`${count-1}번만에 맞히셨습니다.`);
        console.log('게임을 종료합니다');
        rl.close();
    } else {
        console.log(`${result.numS}S${result.numB}B`);
        Game()
    }
    })
}

Game();





    







