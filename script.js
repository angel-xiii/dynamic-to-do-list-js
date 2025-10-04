document.addEventListener('DOMContentLoaded', function () {
  
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addButton = document.getElementById('add-task-btn');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            tasks.push(li.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add = "remove-btn";

        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    taskInput.value = "Task Example";
    addTask()
});
