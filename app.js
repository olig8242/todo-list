//selectors
const todoInput = document.querySelector(".todo-input"); //targets the input box when adding todo items
const todoButton = document.querySelector(".todo-button"); //targets the + button
const todoList = document.querySelector(".todo-list"); //targets the parent container of the list items
const filterOption = document.querySelector(".filter-todo"); //gives access to dropdown box for completed/notcomplete/all

//event listeners
todoButton.addEventListener("click", addToDo); //EL for adding list items
todoList.addEventListener("click", deleteCheck); //EL for deleting list items
filterOption.addEventListener("click", filterTodo); //EL for filtering list items

//functions

function addToDo(event) {
  //prevent form from submitting
  event.preventDefault();
  //creates the todo div item, which will then take the value of the text input, the completed button and delete button appended, then lastly appended to the ul list storing all todo items
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //CHECK trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //APPEND TO LIST
  todoList.appendChild(todoDiv);
  //clear input value
  todoInput.value = ""; //clears the text box so it's empty after submitting a todo item
}

//delete check
function deleteCheck(e) {
  const item = e.target;
  //DELETE TODO
  //if the first element of the item which we have clicked is the trash button - then we will target the parent element of the trash-btn, which is the todo div, then we will remove the div after the interal EL has ran, to ensure the transition finishes then the blocks will fill up.
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    todo.classList.add("fall");
    //add the below eventlistener so that it waits for the animation to end before removing the list item
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //CHECK MARK - this will allow us to toggle completed CSS which gives it a line through and opacity of 0.5.
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//this function will run a foreach method to iterate through the todolist items - first selects all and gives their display to flex, 2nd will select only completed, changing their display to flex and changing the uncompleted display to hidden, this will only reveal the completed, the 3rd is the reverse of the 2nd.
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
