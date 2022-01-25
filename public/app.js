const userInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const markTodoDone = document.querySelector(".fa-check");
const deleteTodo = document.querySelector(".fa-trash-alt");
const todoList = document.getElementById("todoList");
const todo = document.querySelectorAll(".todo");

const todoArray = [];

// i type mt todo action
// when i click the add btn it adds the todo to my todo list

addTodoBtn.addEventListener("click", () => {
  if (userInput.value != "") {
    const newTodo = document.createElement("li");
    newTodo.setAttribute("class", "todo");
    todoArray.push(userInput.value);
    newTodo.appendChild(document.createTextNode(userInput.value));
    todoList.appendChild(newTodo);
    
  }
});

for (let i = 0; i < todo.length; i++) {
  todo[i].addEventListener("click", () => {
    //todo[i].style.textDecoration = "line-through";
    todo[i].style.color = "green";
    todo[i].classList.toggle("complete");
  });
}

// Above code only works on todos that are already there, but not new ones 
// Need to figure out how to add a trash icon with every todo