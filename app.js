const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.appendChild(document.createTextNode(taskText));

    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger btn-sm';
    removeBtn.appendChild(document.createTextNode('Remove'));

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
  } 
}

function removeTask(event) {
  if (event.target.classList.contains('btn-danger')) {
    const listItem = event.target.parentNode;
    taskList.removeChild(listItem);
  }
}