// --- Константи та змінні ---
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const filterButtons = document.querySelectorAll('.filters button');

let tasks = [];
let currentFilter = 'all'; // Можливі значення: 'all', 'active', 'completed'

// --- Запуск при завантаженні сторінки ---
document.addEventListener('DOMContentLoaded', () => {
    // 7. Завантаження з LocalStorage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    renderTasks();
});

// --- Додавання завдання (Enter) ---
// 1. Додавання завдання при натисканні Enter
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const text = taskInput.value.trim();
        if (text !== "") {
            addTask(text);
            taskInput.value = ""; // Очистити поле
        }
    }
});

function addTask(text) {
    // 2. Форматування дати: DD.MM.YY, HH:mm
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const formattedDate = `${day}.${month}.${year}, ${hours}:${minutes}`;

    const newTask = {
        id: Date.now(), // Унікальний ID
        text: text,
        date: formattedDate,
        completed: false
    };

    tasks.push(newTask);
    saveAndRender();
}

// --- Основна функція рендерингу ---
function renderTasks() {
    taskList.innerHTML = "";

    // 8. Сортування/фільтрація
    let filteredTasks = [];
    if (currentFilter === 'all') {
        filteredTasks = tasks;
    } else if (currentFilter === 'active') {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        
        // 4. Додавання класу виконаного (сірий колір, закреслення)
        if (task.completed) {
            li.classList.add('completed');
        }

        // --- Ліва частина (Чекбокс + Текст) ---
        const leftDiv = document.createElement('div');
        leftDiv.className = 'task-left';

        // 3. Checkbox (зникає, якщо виконано - вимога п.4)
        if (!task.completed) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox-custom';
            checkbox.onclick = () => toggleTask(task.id);
            leftDiv.appendChild(checkbox);
        }

        const contentDiv = document.createElement('div');
        contentDiv.className = 'task-content';

        // Текст завдання
        const spanText = document.createElement('span');
        spanText.className = 'task-text';
        spanText.textContent = task.text;
        
        // 6. Редагування по подвійному кліку
        spanText.addEventListener('dblclick', () => {
            if (!task.completed) { // Редагуємо тільки активні
                enableEditMode(li, task);
            }
        });

        // Дата додавання
        const spanDate = document.createElement('span');
        spanDate.className = 'task-date';
        spanDate.textContent = task.date;

        contentDiv.appendChild(spanText);
        contentDiv.appendChild(spanDate);
        leftDiv.appendChild(contentDiv);

        // --- Права частина (Кнопка видалення) ---
        // 5. Хрестик для видалення
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&times;'; // Символ "X"
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteTask(task.id);

        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// --- Функції управління станом ---

// 4. Зміна статусу (виконано/не виконано)
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveAndRender();
    }
}

// 5. Видалення завдання
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveAndRender();
}

// 6. Режим редагування
function enableEditMode(liElement, task) {
    const contentDiv = liElement.querySelector('.task-content');
    const originalText = task.text;

    // Замінюємо контент на input
    contentDiv.innerHTML = '';
    
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = originalText;
    editInput.className = 'edit-input';
    
    contentDiv.appendChild(editInput);
    editInput.focus();

    // Збереження при натисканні Enter
    editInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const newText = editInput.value.trim();
            if (newText !== "") {
                task.text = newText;
                saveAndRender();
            }
        }
    });

    // Вихід з редагування при втраті фокусу (опціонально)
    editInput.addEventListener('blur', () => {
        saveAndRender(); // Поверне старий вигляд або збереже
    });
}

// 8. Логіка фільтрів
function setFilter(filterType) {
    currentFilter = filterType;
    
    // Оновлення активного класу кнопок
    filterButtons.forEach(btn => btn.classList.remove('active-filter'));
    document.getElementById(`filter-${filterType}`).classList.add('active-filter');
    
    renderTasks();
}

// 7. Збереження в LocalStorage
function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}