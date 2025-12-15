let Input = Number(process.argv[2])
if(Input >= 101 || Input < 0){
  console.log('Invalid Input')
}
else if (Input >= 80){
  console.log('A')
}
else if (Input >= 70){
  console.log('B')
}
else if (Input >= 60){
  console.log('C')
}
else if (Input >= 50){
  console.log('D')
}
else if (Input < 50){
  console.log('F')
}
else {
  console.log('Invalid Input')
}
export{};

