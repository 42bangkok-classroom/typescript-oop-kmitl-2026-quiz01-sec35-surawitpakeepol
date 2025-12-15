const number = Number(process.argv[2]);
if (number == number/3 || number == number/7){
  console.log('FooBar');  
} 
else if (number == number/3){
  console.log('Foo');   
}
else if (number == number/7){
      console.log('Bar');  
}
 
else {
  console.log('Invalid Input');
}