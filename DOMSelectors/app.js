//selectors /style properties

//classname, id, tag name

//getElementById : selects by id
//getElementByClasName: selects by className
//getElementByTagName : selects by tag name




//! let value;

// const button = document.getElementById("todoAddButton");
// console.log(button);

// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const IclassList = button.classList[3];

// IclassList.forEach(function(className) {
//     console.log(className);
// });

// console.log(IclassList);




// button.innerHTML= "<b>Add TODO<b/>"
// button.textContent = "<b>Add TODO<b/>"

// let buttonText = button.textContent;
// console.log(buttonText);

// let buttonText2 = button.innerHTML;
// console.log(buttonText2);



// const todoList  = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })

// console.log(todoList);

// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[0]);



//! querySelector - querySelectorAll

// const clearbutton = document.querySelector("#todoClearButton");
// console.log(clearbutton);

// const todoList = document.querySelector(".list-group");
// console.log(todoList);

// const todoListItem = document.querySelectorAll(".list-group-item")["li:nth-child(odd)"];

// const todoListItem = Array.from(document.querySelectorAll("li:nth-child(odd)"));
// todoListItem.forEach(function(todo) {
//     todo.style.backgroundColor= "lightgrey";
// });
// console.log(todoListItem);



//!style
//for more w3schools.com


const todo = document.querySelectorAll(".list-group-item")[0];
const todoList= document.querySelector(".list-group"); 
todo.style.color="#fff";
todo.style.backgroundColor = "blue";
todo.stylw.fontWeight="bold";
todo.style.paddingTop="20px";

todoList.style.marginTop="60px";



