// ЗАВДАННЯ 2: Змінні та функції
let task2State = { total: 0, correct: 0, currentAnswer: 0 };

function task2NextQuestion() {
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * 9) + 1;
    task2State.currentAnswer = a * b;

    document.getElementById('quiz2-area').style.display = 'block';
    document.getElementById('quiz2-question').innerText = `${a} x ${b} = `;
    document.getElementById('quiz2-answer').value = '';
    document.getElementById('quiz2-result').innerText = '';
    document.getElementById('quiz2-answer').focus();
}

function task2Check() {
    let userAns = parseInt(document.getElementById('quiz2-answer').value);
    let resultDiv = document.getElementById('quiz2-result');
    if (isNaN(userAns)) return;

    task2State.total++;
    if (userAns === task2State.currentAnswer) {
        task2State.correct++;
        resultDiv.innerHTML = '<span class="success">Правильно!</span>';
    } else {
        resultDiv.innerHTML = `<span class="error">Помилка, правильна відповідь «${task2State.currentAnswer}»</span>`;
    }
    
    let percent = task2State.total === 0 ? 0 : Math.round((task2State.correct / task2State.total) * 100);
    document.getElementById('quiz2-score').innerText = 
        `Загальний рахунок ${percent}% (${task2State.correct} правильних відповідей з ${task2State.total})`;
}

// ЗАВДАННЯ 3: Змінні та функції
let task3State = { total: 0, correct: 0, currentAnswer: 0, answered: false };

function task3NextQuestion() {
    task3State.answered = false;
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * 9) + 1;
    task3State.currentAnswer = a * b;
    let correct = task3State.currentAnswer;

    // Генеруємо варіанти
    let options = new Set([correct]);
    while(options.size < 4) {
        let wrong = (Math.floor(Math.random() * 9) + 1) * (Math.floor(Math.random() * 9) + 1);
        if(wrong !== correct) options.add(wrong);
    }
    let optionsArray = Array.from(options);
    // Перемішуємо
    optionsArray.sort(() => Math.random() - 0.5);

    document.getElementById('quiz3-area').style.display = 'block';
    document.getElementById('quiz3-question').innerText = `${a} x ${b} =`;
    document.getElementById('quiz3-result').innerText = '';
    
    const optionsDiv = document.getElementById('quiz3-options');
    optionsDiv.innerHTML = '';

    optionsArray.forEach(opt => {
        let label = document.createElement('label');
        label.style.display = 'block';
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'q3';
        radio.value = opt;
        radio.onclick = function() { checkTask3(this); };
        
        label.appendChild(radio);
        label.appendChild(document.createTextNode(' ' + opt));
        optionsDiv.appendChild(label);
    });
}

function checkTask3(radioBtn) {
    if (task3State.answered) return;
    task3State.answered = true;
    
    let val = parseInt(radioBtn.value);
    let resultDiv = document.getElementById('quiz3-result');
    task3State.total++;

    const radios = document.querySelectorAll('input[name="q3"]');
    radios.forEach(r => r.disabled = true);

    if (val === task3State.currentAnswer) {
        task3State.correct++;
        resultDiv.innerHTML = '<span class="success">Правильно!</span>';
    } else {
        resultDiv.innerHTML = `<span class="error">Помилка, правильна відповідь «${task3State.currentAnswer}»</span>`;
    }

    let percent = task3State.total === 0 ? 0 : Math.round((task3State.correct / task3State.total) * 100);
    document.getElementById('quiz3-score').innerText = 
        `Загальний рахунок ${percent}% (${task3State.correct} правильних відповідей з ${task3State.total})`;
}

// ЗАВДАННЯ 5: Капча (глобальні змінні)
let captchaValue = "";
const digitMaps = {
    '0': [1,1,1, 1,0,1, 1,0,1, 1,0,1, 1,1,1],
    '1': [0,1,0, 1,1,0, 0,1,0, 0,1,0, 1,1,1],
    '2': [1,1,1, 0,0,1, 1,1,1, 1,0,0, 1,1,1],
    '3': [1,1,1, 0,0,1, 1,1,1, 0,0,1, 1,1,1],
    '4': [1,0,1, 1,0,1, 1,1,1, 0,0,1, 0,0,1],
    '5': [1,1,1, 1,0,0, 1,1,1, 0,0,1, 1,1,1],
    '6': [1,1,1, 1,0,0, 1,1,1, 1,0,1, 1,1,1],
    '7': [1,1,1, 0,0,1, 0,0,1, 0,0,1, 0,0,1],
    '8': [1,1,1, 1,0,1, 1,1,1, 1,0,1, 1,1,1],
    '9': [1,1,1, 1,0,1, 1,1,1, 0,0,1, 1,1,1]
};

function initCaptcha(digitsCount) {
    const container = document.getElementById('captcha-display');
    if (!container) return;

    container.innerHTML = '';
    captchaValue = "";

    for(let i=0; i<digitsCount; i++) {
        let digit = Math.floor(Math.random() * 10).toString();
        captchaValue += digit;
        
        let digitContainer = document.createElement('div');
        digitContainer.className = 'digit-grid';
        
        let map = digitMaps[digit];
        map.forEach(pixelVal => {
            let pixel = document.createElement('span');
            pixel.className = 'pixel' + (pixelVal ? ' active' : '');
            digitContainer.appendChild(pixel);
        });
        
        container.appendChild(digitContainer);
    }
    
    document.getElementById('captcha-result').innerText = '';
    document.getElementById('captcha-input').value = '';
}

function checkCaptcha() {
    let userVal = document.getElementById('captcha-input').value;
    let resultDiv = document.getElementById('captcha-result');

    if (userVal === captchaValue) {
        resultDiv.innerHTML = '<span class="success">Вірно!</span>';
    } else {
        resultDiv.innerHTML = '<span class="error">Помилка</span>';
    }
}

 document.addEventListener('DOMContentLoaded', () => {
    
    // --- ЗАВДАННЯ 1: Підключення подій ---
    const inputF = document.getElementById('inputF');
    const inputC = document.getElementById('inputC');

    if(inputF && inputC) {
        inputF.addEventListener('input', () => {
            if(inputF.value === '') { inputC.value = ''; return; }
            let f = parseFloat(inputF.value);
            inputC.value = Math.round(((5/9) * (f - 32)) * 100) / 100;
        });

        inputC.addEventListener('input', () => {
            if(inputC.value === '') { inputF.value = ''; return; }
            let c = parseFloat(inputC.value);
            inputF.value = Math.round(((c * 9/5) + 32) * 100) / 100;
        });
    }

    // --- ЗАВДАННЯ 4: Ротатор ---
    const imagesArray = [
        { path: 'https://placehold.co/600x400/orange/white?text=Img+1', title: 'Фото 1', description: 'Опис фотографії 1' },
        { path: 'https://placehold.co/600x400/black/white?text=Img+2', title: 'Фото 2', description: 'Опис фотографії 2' },
        { path: 'https://placehold.co/600x400/grey/white?text=Img+3', title: 'Фото 3', description: 'Опис фотографії 3' }
    ];
    initPhotoRotator('rotator-container', imagesArray);

    // --- ЗАВДАННЯ 5: Запуск капчі ---
    initCaptcha(3);
});


function initPhotoRotator(containerId, images) { 
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const wrapper = document.createElement('div');
    wrapper.id = 'rotator';

    const navTop = document.createElement('div');
    navTop.className = 'rotator-nav';
    
    const btnBack = document.createElement('span');
    btnBack.innerText = 'Назад';
    btnBack.className = 'nav-link';
    
    const counter = document.createElement('span');
    counter.style.fontWeight = 'bold';
    
    const btnForward = document.createElement('span');
    btnForward.innerText = 'Вперед';
    btnForward.className = 'nav-link';

    navTop.appendChild(btnBack);
    navTop.appendChild(counter);
    navTop.appendChild(btnForward);

    const imgBlock = document.createElement('img');
    imgBlock.className = 'rotator-img';

    const infoBlock = document.createElement('div');
    infoBlock.style.marginTop = '10px';
    const titleEl = document.createElement('div');
    titleEl.style.fontWeight = 'bold';
    const descEl = document.createElement('div');
    
    infoBlock.appendChild(titleEl);
    infoBlock.appendChild(descEl);

    wrapper.appendChild(navTop);
    wrapper.appendChild(imgBlock);
    wrapper.appendChild(infoBlock);
    container.appendChild(wrapper);

    let currentIndex = 0;

    function render() {
        const item = images[currentIndex];
        imgBlock.src = item.path;
        imgBlock.alt = item.title;
        titleEl.innerText = item.title;
        descEl.innerText = item.description;
        counter.innerText = `Фотографія ${currentIndex + 1} з ${images.length}`; 

        btnBack.classList.toggle('hidden', currentIndex === 0);
        btnForward.classList.toggle('hidden', currentIndex === images.length - 1);
    }

    btnBack.onclick = () => { if (currentIndex > 0) { currentIndex--; render(); } };
    btnForward.onclick = () => { if (currentIndex < images.length - 1) { currentIndex++; render(); } };

    render();
}