const input =  +process.argv[2];
if (Number.isNaN(input)|| input <=0){
  process.exit
}
for (let i = 1; i <= input; i++){
    let result = '*';
    for (let j = 1; j < i; j++){
        result += j % 2 === 0 ? '*' : ' ';
    }
    
    console.log(result)
}