
/*without parameter */
function writeName() {
    console.log("AHmet");
}
writeName();

/*with parameter */
function WriteFullname(name,surname) {
    console.log(name+ " "+ surname);
}
WriteFullname("Ahmet","Acer");

/*With return, we send the result of the method to the place where the method is called*/

let returningValue = cube(3);
console.log(returningValue);

function cube(number) {
    let result = number*number*number;
    return result;
}


/*Example Project*/

let text = "I am learning Javascript from online course ."

let letter = prompt("Enter a letter");

let result = find(letter);
alert("Number of letter "+letter+" is "+result  );


function find(letter) {
    let totalNumber =0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i).toLowerCase()===letter.toLowerCase()) {
            totalNumber++;
        }
       
    }
     return totalNumber;
}


