let todoTitle;
let todoContent;
let saveTODOBtn;
let deleteTODOBtn;
let todoList;

todoTitle = document.querySelector("#todo-title");
todoContent = document.querySelector("#todo-content");
saveTODOBtn = document.querySelector("#save-todo");
deleteTODOBtn = document.querySelector("#delete-todo");
todoList = document.querySelector("#add-TODO");

let todoArray = [];
let todoString = '';

init();

function addTODO() {
  let title = todoTitle.value.trim();
  let content = todoContent.value.trim();

  todoArray.push({
    title: title,
    content: content,
  });

  todoTitle.value = "";
  todoContent.value = "";

  saveTODO();
  listTODO();
}

function listTODO() {
  todoString = " ";
  for (let i = 0; i < todoArray.length; i++) {
    todoString = todoString.concat(
        `<div>
            <h2>${todoArray[i].title}</h2>
            <p>${todoArray[i].content}</p>
        </div>`
    );

    }
    todoList.innerHTML = todoString;
}

function saveTODO() {
  localStorage.setItem("todoArray", JSON.stringify(todoArray));
}

function init() {
  let storedTODOs = JSON.parse(localStorage.getItem("todoArray"));

  if (storedTODOs !== null) {
    todoArray = storedTODOs;
  }

  listTODO();
}

saveTODOBtn.addEventListener("click", addTODO);
