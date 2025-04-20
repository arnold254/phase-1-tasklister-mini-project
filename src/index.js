document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  let taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let taskInput = document.getElementById('new-task-description');
    let taskText = taskInput.value;
    let task = document.createElement('li');
    task.textContent = taskText;
    taskList.appendChild(task);
    taskInput.value = '';

  });
  
});
