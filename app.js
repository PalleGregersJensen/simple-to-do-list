"use strict";

console.log("JS kører");

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
  console.log("Start");
}

// function addToDo() {
//   console.log("adToDo");

//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const deleteButton = document.createElement("button");

//   console.log(li);
//   console.log(span);
//   console.log(deleteButton);

//   span.textContent = newToDo.value;
//   deleteButton.textContent = "Delete";

//   li.appendChild(span);
//   li.appendChild(deleteButton);

//   document.querySelector("#to-do-list").appendChild(li);

    
//   deleteButton.addEventListener("click", removeToDo);
// }

function addToDo() {
    const html = /*html*/
         `<li>
            <span>${newToDo.value}</span> 
            <button>Delete</button> 
        </li>`

    list.insertAdjacentHTML("beforeend", html);
    list.querySelector("li:last-child button").addEventListener("click", removeToDo);

    newToDo.value = "";
    newToDo.focus();

}


function removeToDo() {
  console.log("remove");

  console.log(this);
  console.log(this.parentNode);

  this.parentNode.remove();
}
