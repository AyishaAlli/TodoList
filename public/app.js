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

    todoList.innerHTML += `
            <li class="task">
                <span id="todoName">
                    ${userInput.value}
                </span>
                    <i class="far fa-trash-alt"></i>
            </li>
        `;
  } else {
    alert("Please enter a new todo")
  }
});

// for (let i = 0; i < todo.length; i++) {

//   todo[i].addEventListener("click", () => {
//     //todo[i].style.textDecoration = "line-through";
//     todo[i].style.color = "green";
//     todo[i].classList.toggle("complete");
//   });
// }
for (let i = 0; i < todo.length; i++) {

todo.addEventListener("click", () => {

  todo.forEach((listItem)=>{
    listItem.style.color ="green"
    listItem.classList.toggle("complete");
 
})})}
// Above code only works on todos that are already there, but not new ones 
// Need to figure out how to add a trash icon with every todo
