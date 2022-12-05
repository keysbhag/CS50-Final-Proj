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
        `
        <div class="card todo m-2">
            <div class="card-body d-flex flex-column">
                <h2 class="card-title">${todoArray[i].title}</h2>
                <div class="d-flex justify-content-between">
                    <p class="card-text">${todoArray[i].content}</p>
                    <button class="del-btn btn btn-danger"> Delete</button>
                </div>
            </div>
        </div>
        `
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
