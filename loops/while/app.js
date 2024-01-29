
let counter = 1;


while (counter<=10) {
    console.log(counter);
    counter++;
 }

//break: finishes by breaking the loop 
 let counter2 = 0;
 while (true) {
    console.log(counter2)
    if (counter2==8) {
        break;
    }
 }

 //continue: passes the selected condition in the loop
 let counter3 =1;
 while (true) {
    
    if (counter2==8) {
        continue;
    }
    console.log(counter2)
 }
