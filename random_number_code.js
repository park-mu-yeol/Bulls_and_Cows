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
