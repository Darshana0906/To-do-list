<<<<<<< HEAD
// Select elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Add task
addBtn.addEventListener("click", addTodo);

function addTodo() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark complete
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Add elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // Clear input
=======
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

>>>>>>> script-js
    input.value = "";
}