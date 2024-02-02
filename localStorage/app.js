//!Session storage

//where :
console.log(window);

//To add value
localStorage.setItem("1453","Fatih");
localStorage.setItem("2003","ASacer");
localStorage.setItem(546,6846);//save as string string value

//To remove item
localStorage.removeItem("2003");


//To find item's value
let value = localStorage.getItem("1453");
if (value==null) {
    console.log("Value not found");
} else {
    console.log("The value is : "+value);
}


//to remove all
localStorage.clear();

//to add array
let names = ["Ahmet","Enes","Nuri","Said"];
localStorage.setItem("names",JSON.stringify(names));

let namesValue = JSON.parse(localStorage.getItem("names"));
console.log(typeof namesValue);
namesValue.forEach(function(name) {
    console.log(name);
});
