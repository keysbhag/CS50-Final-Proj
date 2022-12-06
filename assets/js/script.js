let todoTitle;
let todoContent;
let saveTODOBtn;
let deleteTODOBtn;
let todoList;

todoTitle = document.querySelector("#todo-title");
todoContent = document.querySelector("#todo-content");
saveTODOBtn = document.querySelector("#save-todo");
todoList = document.querySelector("#add-TODO");

let todoArray = [];
let todoString = "";

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
  [...document.querySelectorAll(".del-btn")].forEach((el) =>
    el.addEventListener("click", deleteTODO)
  );
}

function listTODO() {
  todoString = " ";
  for (let i = todoArray.length - 1; i >= 0; i--) {
    todoString = todoString.concat(
      `
        <div class="card todo m-2">
            <div class="card-body d-flex flex-column pt-2 pb-2">
                <div class="d-flex justify-content-between">
                    <h2 class="card-title">${todoArray[i].title}</h2>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </div>
                <div class="d-flex justify-content-between pt-2 pb-2">
                    <p class="card-text">${todoArray[i].content}</p>
                    <button id="${i}" class="del-btn btn btn-danger"> Delete</button>
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

function deleteTODO(event) {
  console.log(todoArray);
  let delID = event.target.id;
  console.log(delID);
  todoArray.splice(delID, 1);
  console.log(todoArray);
  saveTODO();
  listTODO();
  [...document.querySelectorAll(".del-btn")].forEach((el) =>
    el.addEventListener("click", deleteTODO)
  );
}

function init() {
  let storedTODOs = JSON.parse(localStorage.getItem("todoArray"));

  if (storedTODOs !== null) {
    todoArray = storedTODOs;
  }

  listTODO();
}

saveTODOBtn.addEventListener("click", addTODO);

[...document.querySelectorAll(".del-btn")].forEach((el) =>
  el.addEventListener("click", deleteTODO)
);
