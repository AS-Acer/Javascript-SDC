//navigation on html elements

// const todo = document.querySelector(".list-group-item");
// const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
// const todoList = document.querySelector("list-group");
// const card = document.querySelector(".card");

// let value;

// //!parent to child access

// value = todoList;
// value = todoList.children[0];
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[3].textContent = "Modified";

// value = Array.from(todoList.children);
// value.forEach(function (todo) {
//     console.log(todo);
// })



// console.log("-----------------------------");


// //! child to parent access

// value = todo;
// value = todo.parentElement;
// value = todo.parentElement.parentElement;
// value = todo.parentElement.parentElement.parentElement;
// value = todo.parentElement.parentElement.parentElement.parentElement;

// //? or

// value = todo;
// let ul = todo.parentElement;
// let cardBody = ul.parentElement;
// let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
// let container = row.parentElement;

// console.log(container);


// //!child to child access

// value = todo;
// value= todo.nextElementSibling.nextElementSibling;

// value =todoLastChild;
// value = todoLastChild.previousElementSibling.previousElementSibling;


// console.log(value);



//!creating elements dynamically

const cardBody2 = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");


const link = document.createElement("a")
link.id = "goBlogWebSite";
link.className = "btn btn-info btn-sm mt-3";
link.href = "http://youtube.com";
link.target = "_blank";
link.innerHTML = "go my website"


//appendChild adds to end 
cardBody2.appendChild(link);



// <li class="">Todo 1
//     <a href= class=>
//         <i class=></i>
//     </a>
// </li>

const todo =document.createElement("li");
todo.className =  "list-group-item d-flex justify-content-between";
todo.innerHTML= "Todo 5";

const todoLink = document.createElement("a");
todoLink.href="#";
todoLink.className= "delete-item";

const i = document.createElement("i");
i.className="fa fa-remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);
todoList.appendChild(todo);




//!Removing element

const todos = document.querySelectorAll(".list-group-item");
const todo5 =  document.querySelectorAll(".list-group-item")[4];
todos[0].remove();
todos[3].remove();
todo5.remove();
//---------------------
//it must be node type (with adress)
todoList.removeChild(todos[2]);


//!replacing elements

const cardBody = document.querySelectorAll(".card-body")[1];
const newTitle = document.createElement("h4");
newTitle.className="card-title";
newTitle.textContent= "New TODO List";

//finding node 
//console.log(cardBody.childNodes);

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);