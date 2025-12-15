const input = Number(process.argv[2]);

if (Number.isNaN(input) || input <= 0) {
    console.log("Invalid Input");
} else {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    console.log(sum);
}

export {};