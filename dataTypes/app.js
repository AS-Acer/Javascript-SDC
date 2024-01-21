/*

?Data types:

string = everything just in "  "
number =  just numbers(like 10, 46135, 1563.46 ) without "  "
boolean = true/false
null = no value
undefined = let a; (a has ne values and its type undefined)

object example:
let a={
   name: "Ahmet",
   age:20; 
}

function example :

let func = function(){
    console.log("Hello");
}

func();


*/

// data type conversions



//string to number :
let b = "b";
let a = Number (b);
console.log(typeof b);

let c = Number("15");
console.log(typeof c);

//with parseInt, parseFloat
let d = parseInt("12");
let e = parseFloat("12.46");
console.log(typeof d);
console.log(typeof e);




//number to string 

let x = String(46);
console.log(typeof x);

let y =(47).toString();
console.log(typeof y);

let result = true.toString();
console.log(typeof result);

//object to string
let numbers = [1,2,3,4].toString();
console.log(typeof numbers);


