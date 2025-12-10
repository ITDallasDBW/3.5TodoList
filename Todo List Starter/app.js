//create var to manipulate DOM
const list = document.querySelector(".list");
//create var to work with user input
const input = document.querySelector("input");


let todoList = [
    //hypothetical To-Do List Items
    //include id so delete knows which 
  //   {
  //     id: 1,
  //     task: "Finish Frontend Simplified",
  //   },
  //   {
  //     id: 2,
  //     task: "Finish Interview Questions",
  //   },
  //   {
  //     id: 3,
  //     task: "Land $100k Job",
  //   },
];

//Get typed input from text box
let todoInputValue = "";
let counter=0;//establish counter for task id's


function onInputChange(event) {
  todoInputValue = event.target.value;
}

//Add new list items
function addTodo() {
  if (!todoInputValue) {
    return;//If nothing input, don't allow Add
  }
  //Add toDo 
  const task = {
    //Math.random returns random between 1-10000.
    id: counter++,
    task: todoInputValue,
  };
  //Add new task to todoList
  todoList.push(task);
  //show new list
  renderTodos();
  //reset textbox to blank
  input.value = "";
  //reset textbox value var. Prevent artifact
  todoInputValue = "";
}

//delete item with id corresponding to x button
function deleteTodo(id) {
    
  todoList = todoList.filter((todo) => {
    return todo.id !== id;//show whatever is NOT deleted id
  });
  renderTodos();  //show new list
}

//show list
function renderTodos() {
  list.innerHTML = todoList
  //map todoList array into html data
    .map(
      (element) =>
        `<li>
        ${element.id}.${element.task}
        <button class="todo__delete" onclick="deleteTodo(${element.id})">
        x
        </button>
        </li>`
    )
    .join(""); //remove commas previously in array
}

//Show list on load
renderTodos();
