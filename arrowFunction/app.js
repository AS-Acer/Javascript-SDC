//arrow function

const print = ()=>{
    console.log("Hello ");
}
print();


const sayHello = (firstname)=>{
    console.log("Hello",firstname);
}
 
sayHello("Ahmet");

//can be used like this in blocks of code consisting of a single line
const sayGB =(fulName) =>console.log("GoodBy",fulName);

sayGB("ASAcer");


const takeCube = (x)=> {
    return x*x*x;
}

takeCube(3);
//or

const takeCubeShort = (x)=> x*x*x;
takeCubeShort(3);