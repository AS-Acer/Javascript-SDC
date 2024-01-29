//arrays

//index starts from 0
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[6] = "Ahmet";
numbers[numbers.length - 1] = "Said"; //9-->Said
console.log(numbers[6]);



let names = ["Ahmet", "Enes", "Nuri"];
console.log(names);

let mixedArray = [1, "Ahmet", 5.7, true, null, undefined];
console.log(mixedArray);

let array1 = new Array("Ahmet", 3, 4);



//foreach loop
let personal = ["Ahmet", "Nuri", "Enes", "Nihat", "Eyüp", "Yasin"];

console.log("foreach loop--------------------");
personal.forEach(function (personalNames) {
    console.log(personalNames);
});

console.log("for loop--------------------");
//If we do it with if loop
for (let i = 0; i < personal.length; i++) {
    console.log(personal[i]);
}

console.log("while loop--------------------");
//If we do it with while loop
let counter = 0;
while (counter<personal.length) {
    console.log(personal[counter]);
    counter++;
}

//Array methods : 

/*

push : adds an element to the end of the array, returns the length of the array
unshift : adds an element to the beginning of the array, returns the number of elements of the array

pop : deletes elements from the beginning of the array, returns the number of elements
shift : deletes elements at the end of the array, returns the number of elements

splice(index,incdex) : used to add and delete elements

toString : translates the array in string
join : translates the loop in string, aditioanlly you can add element

concat : used to merge arrays
slice : is used to create a new array by splitting the array at the desired location
length : gives the length of the array
reverse : inverts the elements of the array
split : divide by a given expression and convert to an array
indexof : gives index number of element
includes : checks if the array contains the given element







*/
let cars =["Bmw","Audi","Renault","Mercedes","Porsche"];
let cars2 = ["TOGG","Volkswagen","Subaru","Toyota"]
//push method
// cars.push("Ford");
// console.log(cars);

//unshift method
// cars.unshift("Dodge");
// console.log(cars);

//pop method
// let removedElement = cars.pop();
// console.log(cars);
// console.log(removedElement);

// shift method
// let removedElement = cars.shift();
// console.log(cars);
// console.log(removedElement);

//splice method
// console.log(cars);
// cars.splice(0,0,"Cherlovet"); from 0th index, 0 element remove, add cherlovet
// cars.splice(1,2) remove elements between index 1 to 2 
// console.log(cars);


//toString method
// console.log(cars);
// let stringCars = cars.toString();
// console.log(stringCarscars);
// console.log(typeof stringCars);

//join method
// let joinedCars = cars.join("^");
// console.log(joinedCars );

//concat method
// let mergedCars = cars.concat(cars2);
// console.log(mergedCars);

// slice method
// console.log(cars);
// let slicedArray = cars.slice(2) 
// console.log(slicedArray);

//length method
// console.log(cars.length);

//reverse method
// console.log(cars);
// cars.reverse();
// console.log(cars);

//split method
//  let newCars = cars.split(",")
//  console.log(cars);
//  console.log(typeof newCars);

 //indexof method
//  let index = cars.indexOf("Bmw") 
//  if(index==0){
//     console.log("the array contains this element");
//  }else{
//     console.log("the array does not contain this element");
//  }

//includes method
// let isThere = cars.includes("Bmw") 
// if(isThere==true){
//    console.log("the array contains this element");
// }else{
//    console.log("the array does not contain this element");
// }
