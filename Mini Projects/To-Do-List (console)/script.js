const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.className = todo.completed ? "completed" : "";
    li.addEventListener("click", () => toggleComplete(index));
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => deleteTodo(index));
    
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;
  todos.push({ text, completed: false });
  saveAndRender();
  input.value = "";
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveAndRender();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

addBtn.addEventListener("click", addTodo);
renderTodos();
