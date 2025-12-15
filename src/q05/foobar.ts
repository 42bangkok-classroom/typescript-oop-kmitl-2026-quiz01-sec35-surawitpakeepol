const input = process.argv[2];
const point = Number(input);
if ( input === ""){
  console.log('Invalid Input');  
} 
else if (point == point/3 || point == point/7){
  console.log('FooBar');  
} 
else if (point == point/3){
  console.log('Foo');   
}
else if (point == point/7){
      console.log('Bar');  
}
 
else {
  console.log('Invalid Input');
}
export {};