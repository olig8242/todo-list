//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list"); //we will append all the list items

//event listeners
todoButton.addEventListener("click", addToDo);

//functions

function addToDo(event) {
  //prevent form from submitting
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey!";
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

  //APEND TO LIST
  todoList.appendChild(todoDiv);
}
