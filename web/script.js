const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render all tasks on page load
const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(${index})">Remove</button>`;
    taskList.appendChild(li);
  });
};

// Add task
const addTask = () => {
  const task = taskInput.value.trim();
  if (!task) return;

  tasks.push(task);
  taskInput.value = "";
  saveTasks();
  renderTasks();
};

// Remove task
const removeTask = (index) => {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
};

// Save tasks to localStorage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Event listener
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

renderTasks(); // Initial render
