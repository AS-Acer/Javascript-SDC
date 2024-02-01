//!EVENTS 

//!addEventListener()

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle);


function changeTitle(e){
   document.querySelectorAll('.card-title')[1].textContent='TODO List Modified';
   console.log(e.target.textContent);
}

//e.target : to find which element
//e.type : to find event type