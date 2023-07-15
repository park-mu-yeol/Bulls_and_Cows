let numbers = "";
while (numbers.length < 3) {
    let num = Math.floor(Math.random ()*10);
    if (!numbers.includes(num)) {
        numbers += num;
    }
}

console.log(numbers);
console.log(numbers.split("").map(Number));
