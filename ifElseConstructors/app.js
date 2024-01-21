/*  same with c# */


let md1 = Number(prompt("Type your midterm 1 score"));
let md2 = Number(prompt("Type your midterm 2 score"));
let final = Number(prompt("Type your final exam score:"));

let score =(md1*0.3) + (md2*0.3)+ (final*0.4) ;

if(score>40){
    alert("Result successful score : "+ score);
    console.log("Result successful score : "+ score);
}else if(score==40){
    alert("Result passed responsible score : "+ score);
    console.log("Result passed responsible score : "+ score);
}else if(score<50){
    alert("Result unsuccessful score : "+ score);
    console.log("Result unsuccessful score : "+ score);
}

