 //!value types
 let a = 7;
 let b = a;

 console.log("a : "+a);
 console.log("b : "+b);
//a = 7 , b = 7

 console.log("-----------------------");

 b= 10;
 console.log("a : "+ a);
 console.log("b : "+b);
//a= 7, b=10




 
//!refernace types

let array1 = [1,2,3];
let array2 =[1,2,3];
let array3 = array1;
//they have same values but they dont have same adresses

if (array1==array2) {
    console.log("they are equal");
}else{
    console.log("they are not equal");
}
//print: they are not equal
 
if (array1==array3) {
    console.log("they are equal");
}else{
    console.log("they are not equal");
}
//print: they are equal 

let array4= [1,2,3];
let array5 = array4;

array5.push(4);
console.log(array4);
//print: [1,2,3,4];
