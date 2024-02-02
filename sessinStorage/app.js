//!Session storage

//where :
console.log(window);

//To add value
sessionStorage.setItem("1453","Fatih");
sessionStorage.setItem("2003","ASacer");
sessionStorage.setItem(546,6846);//save as string string value

//To remove item
sessionStorage.removeItem("2003");


//To find item's value
let value = sessionStorage.getItem("1453");
if (value==null) {
    console.log("Value not found");
} else {
    console.log("The value is : "+value);
}


//to remove all
sessionStorage.clear();

//to add array
let names = ["Ahmet","Enes","Nuri","Said"];
sessionStorage.setItem("names",JSON.stringify(names));

let namesValue = JSON.parse(sessionStorage.getItem("names"));
console.log(typeof namesValue);
namesValue.forEach(function(name) {
    console.log(name);
});
