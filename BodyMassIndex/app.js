//body mass index 


let weight = Number(prompt("Type your Weight : "));
let tall = Number(prompt("Type your height in meter : "));

let result = weight / (tall**2);

if(result<18.5){
    alert("You are under the ideal index, your index : "+ result);
    console.log("You are under the ideal index, your index : "+ result);
}else if(result>=18.5 && result < 30){
    alert("You are at the ideal index, your index : "+ result);
    console.log("You are at the ideal index, your index : "+ result);
}else if(result>=30){
    alert("You are above the ideal index, your index : "+ result);
    console.log("You are above the ideal index, your index : "+ result);
}
