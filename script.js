document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading time
    setTimeout(() => {
        document.getElementById('loading-page').style.display = 'none';
    }, 3000);

    const taskForm = document.getElementById('taskForm');
    const showCompletedCheckbox = document.getElementById('showCompleted');
    const taskList = document.getElementById('taskList');
    let tasks = []; // Array to store tasks

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskTitle = document.getElementById('taskTitle').value.trim();
        const taskAuthor = document.getElementById('taskAuthor').value.trim();
        const taskDescription = document.getElementById('taskDescription').value.trim();
        const taskDate = document.getElementById('taskDate').value;

        if (taskTitle !== '' && taskAuthor !== '' && taskDescription !== '' && taskDate !== '') {
            addTask(taskTitle, taskAuthor, taskDescription, taskDate);
            taskForm.reset();
        }
    });

    showCompletedCheckbox.addEventListener('change', function() {
        toggleCompletedTasks();
    });

    function addTask(title, author, description, date) {
        const task = { title, author, description, date, completed: false };
        tasks.push(task);
        renderTask(task);
    }

    function renderTask(task) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.innerHTML = `
            <div class="task-info">
                <h3>${task.title}</h3>
                <p><strong>Author:</strong> ${task.author}</p>
                <p><strong>Description:</strong> ${task.description}</p>
                <p><strong>Date:</strong> ${task.date}</p>
            </div>
            <button class="complete-btn">${task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}</button>
            <button class="modify-btn">Modify</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskCard);

        const completeButton = taskCard.querySelector('.complete-btn');
        completeButton.addEventListener('click', function() {
            if (task.completed) {
                taskCard.innerHTML = '<p class="done">Done!</p>';
                setTimeout(() => {
                    const index = tasks.indexOf(task);
                    tasks.splice(index, 1);
                    taskCard.remove();
                }, 2000);
            } else {
                task.completed = true;
                completeButton.textContent = 'Mark as Incomplete';
                renderTasks();
            }
        });

        const modifyButton = taskCard.querySelector('.modify-btn');
        modifyButton.addEventListener('click', function() {
            if (!task.completed) {
                modifyTask(task);
            } else {
                alert('You cannot modify completed tasks.');
            }
        });

        const deleteButton = taskCard.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            taskCard.remove();
        });
    }
    function modifyTask(task) {
        const newTitle = prompt('Enter new title:', task.title);
        const newAuthor = prompt('Enter new author:', task.author);
        const newDescription = prompt('Enter new description:', task.description);
        const newDate = prompt('Enter new date:', task.date);

        if (newTitle !== null && newAuthor !== null && newDescription !== null && newDate !== null) {
            task.title = newTitle.trim();
            task.author = newAuthor.trim();
            task.description = newDescription.trim();
            task.date = newDate;
            renderTasks();
        }
    }

    
    function renderTasks() {
        taskList.innerHTML = '';
        const showCompleted = showCompletedCheckbox.checked;
        tasks.forEach(task => {
            if (!showCompleted && task.completed) {
                return;
            }
            renderTask(task);
        });
    }

    function toggleCompletedTasks() {
        const showCompleted = showCompletedCheckbox.checked;
        const taskCards = document.querySelectorAll('.task-card');

        taskCards.forEach(taskCard => {
            const completed = tasks.find(task => taskCard.textContent.includes(task.title)).completed;
            taskCard.style.display = showCompleted || !completed ? 'block' : 'none';
        });
    }
    
});

