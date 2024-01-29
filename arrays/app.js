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

