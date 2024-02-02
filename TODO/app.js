
//selecting all elemenets

const form = document.querySelector("#todoAddForm");
const form2 = document.querySelector(".form2");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];
runEvents();



function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allTodos);
    filterInput.addEventListener("keyup", filter)
}

function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoList = document.querySelectorAll(".list-group-item");
    if (todoList.length > 0) {
        todoList.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display : block");
            } else {
                todo.setAttribute("style", "display : none !important");
            }
        })
    } else {      
        showAlert("warning", "At least one todo is required for filtering!")
    }
}

function allTodos() {
    const todoList = document.querySelectorAll(".list-group-item");
    if (todoList.length > 0) {
        todoList.forEach(function (todo) {
            todo.remove();
            showAlert("success", "All todos succesfuly removed")
        })
    } else {
        showAlert("warning", "There is already no todo to delete !")
    }

    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
}


function pageLoaded() {
    checkTodosFromStrage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}

function removeTodoToUI(e) {
    //find in location
    // console.log(e.target);
    if (e.target.className === "fa fa-remove") {
        //picked element li
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        //removing form local storage: 
        removeTodoToStorage(todo.textContent);
        showAlert("success", "Todo succesfuly removed");
    }


}

function removeTodoToStorage(removeTodo) {
    checkTodosFromStrage();
    todos.forEach(function (todo, index) {
        if (removeTodo === todo) {
            //remove one element from the index number 
            todos.splice(index, 1);
        }
        //updated local storaged  
        localStorage.setItem("todos", JSON.stringify(todos));
    })
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("danger", "Please Type Todo Name !")
    } else {

        //adding to ui
        addTodoToUI(inputText);
        //adding to storage
        addtoStorage(inputText);
        //adding message
        showAlert("info", "Todo successfully added");

    }

    e.preventDefault();
}

function addTodoToUI(newTodo) {

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";

}

function addtoStorage(newTodo) {
    checkTodosFromStrage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function checkTodosFromStrage(newTodo) {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
}

function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    firstCardBody.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 2500);
}