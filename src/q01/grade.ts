let Input = Number(process.argv[2])
if(Input >= 101 || Input < 0){
  console.log('Invalid Input')
}
else if (Input >= 80){
  console.log('Grade is A')
}
else if (Input >= 70){
  console.log('Grade is B')
}
else if (Input >= 60){
  console.log('Grade is C')
}
else if (Input >= 50){
  console.log('Grade is D')
}
else if (Input < 50){
  console.log('Grade is F')
}
else {
  console.log('Invalid Input')
}
export{};

