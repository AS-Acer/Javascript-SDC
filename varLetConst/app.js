//Var - Let - Const

// var: makes function scope (takes more memory)
//let/const : makes block scope (take less memory)
//! With var you can define the same variable two times, but this is not possible with let.
//! The value assigned to const can never be changed, but let can be changed.

var varName= "Ahmet";
console.log(varName);

let letNumber= 12;
console.log(letNumber);

function sayHello() {
    var Hello = "Hello world !!!"; //funciton scope
    console.log(Hello)

    if(true){
        var b = 10; // still function scope cause of "var"
    }
}




/*
scope(kapsam);

-global scope: you can access from everywhere
-function scope: you can access just form function that defined
-block scope: 

*/

var a= 5;//global scope 

function method1(){
    var number1 =10; //function scope
    console.log(number1);
}

function method2() {
    var c=21; //funciton scope
while(true){
    var b = 20; //block scope

}


}