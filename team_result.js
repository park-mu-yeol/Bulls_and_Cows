const readline = require('readline');
 //콘솔에서 입력받기 위한 코드
const rl = readline.createInterface({ //r1 -> readline모듈로 만든 인터페이스 객체
    input: process.stdin,
    output: process.stdout
});

function RandomNumber() { //무작위 숫자 만들기
    let numbers = []; //무작위 숫자 저장할 변수 선언
    while (numbers.length < 3) { //3자리 숫자가 될때까지
    let randomNumber = Math.floor(Math.random() * 10); //0~1까지의 무작위 숫자 생성 후 10곱하고 소숫점 버리기
    if (!numbers.includes(randomNumber)) { //만약 중복된 숫자가 아니라면
    numbers.push(randomNumber); //numbers변수에 숫자 저장
}
}
return numbers; //생성된 무작위 숫자 반환
}

const answer = RandomNumber(); //answer변수에 함수로 무작위 숫자 저장
console.log(answer); //무작위 숫자 출력(정답을 빨리 알기 위해 임시적으로 집어넣은 코드)

function StrikeBallcount(answer, guess) { //S,B개수 파악 함수
    let strike = 0; //S개수 저장할 변수 선언
    let ball = 0; //B개수 저장할 변수 선언
    for (let i = 0; i < answer.length; i++) { //무작위 숫자(매개변수 answer)의 길이만큼 반복
        if (answer[i] === guess[i]) { //만약 무작위 숫자(매개변수 answer)와 입력한 숫자(매개변수 guess)가 자릿수까지 같다면
        strike++; //strike변수 1증가
        } else if (answer.includes(guess[i])) { //자릿수는 다르지만 포함되어 있다면
        ball++; //ball변수 1증가
        }
    }
return { strike, ball }; //strike, ball 개수 반환
}

let attempts = 1; //시도 횟수 측정하기 위한 변수 1로 초기화

console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!'); //문제의 첫줄 출력

function Startgame() { //게임시작 함수
    rl.question(attempts + '번째 시도 : ', (input) => { //r1.question()을 사용하여 (attempts)번째 시도 : 출력 후 input입력받기
    attempts++; //시도횟수인 attempts 증가
    const guess = input.split('').map(Number);
    const result = StrikeBallcount(answer, guess);
    if (result.strike === 3) { //3strike일때
        console.log('3S'); //3S만 출력해주고
        console.log(attempts-1 + `번만에 맞히셨습니다.`);
        console.log('게임을 종료합니다.'); //시도한 횟수와 게임 종료 문구 출력해주기
        rl.close(); //게임 종료
        } else if(result.ball===3){ //ball만 3번일때에는
        console.log("3B"); // 3B만 출력해주기
        Startgame(); //다시 함수 호출하여 게임 반복
        } else { //3strike, 3ball이 아닐때는
        console.log(`${result.strike}S${result.ball}B`); //s,b의 갯수 출력후
        Startgame(); //다시 함수 호출하여 게임 반복
        }
    });
}

Startgame(); //게임 시작