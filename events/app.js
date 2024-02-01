//!EVENTS 

//!addEventListener()

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", changeTitle);


function changeTitle(e) {
    document.querySelectorAll('.card-title')[1].textContent = 'TODO List Modified';
    console.log(e.target.textContent);
}

//e.target : to find which element
//e.type : to find event type

//! Mouse events

//load : runs when page load 
// onclick A user clicks on an element
// oncontextmenu	A user right-clicks on an element
// ondblclick	A user double-clicks on an element
// onmousedown	A mouse button is pressed over an element
// onmouseenter	The mouse pointer moves into an element
// onmouseleave	The mouse pointer moves out of an element
// onmousemove	The mouse pointer moves over an element
// onmouseout	The mouse pointer moves out of an element
// onmouseover	The mouse pointer moves onto an element
// onmouseup	A mouse button is released over an element


window.addEventListener("load", run);

function run() {
    console.log("page loaded");
}

const cardTitle = document.querySelectorAll(".card-title")[1];
cardTitle.addEventListener("click", runclck);

function runclck(e) {
    console.log(e.type);
}

const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("mouseout", runOver);
cardBody.addEventListener("mouseenter", runOver);
cardBody.addEventListener("mouseleave", runOver);



function runOver(e) {
    console.log(e.type);
}


//!Keyboard Events

 //keypress : triggered when pressed numbers or letter
 //keydown : triggered when pressed everything on board
 //keyup : triggered when you take your hand off the button

//  document.addEventListener("keydown",run)

//  function run(e){
     
//     console.log(e.keyCode);
//     if(e.keyCode ==116){
//         alert("Page refresh blocked !");
//     }

//     e.preventDefault();
    //prevents default settings like f5 for reolad
 // } 


 const cardTitleKe = document.querySelectorAll(".card-title")[0];
 const input = document.querySelector("#todoName");

 console.log(input);
 input.addEventListener("keyup",run);

 function run(e){
    cardTitleKe.textContent = e.target.value;}
    