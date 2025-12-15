const input = process.argv[2];
const point = Number(input);
if (Number.isNaN(point) || input === "" || point < 0) {
    console.log("Invalid Input");
} else {
    let sum = 0;
    for (let i = 1; i <= point; i++) {
        sum += i;
    }
    console.log(sum);
}

export {};