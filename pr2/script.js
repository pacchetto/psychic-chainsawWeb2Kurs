function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function updateTime() {
    const d = new Date();
    
    // Використовуємо функцію з Завдання 1
    let hours = addZero(d.getHours());
    let minutes = addZero(d.getMinutes());
    let seconds = addZero(d.getSeconds());
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock-display').innerText = timeString;
}

updateTime();


let currentTimer = null;

function startTypewriterInterval() {
    const input = document.getElementById('typewriter-input').value;
    const text = input.trim() === "" ? "Це ефект друкарської машинки через setInterval!" : input;
    const output = document.getElementById('typewriter-output');
    
    output.innerText = "";
    if (currentTimer) clearInterval(currentTimer);

    let i = 0;
    currentTimer = setInterval(function() {
        output.innerText += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(currentTimer);
            currentTimer = null;
        }
    }, 100);
}

function startTypewriterTimeout() {
    const input = document.getElementById('typewriter-input').value;
    const text = input.trim() === "" ? "Це ефект друкарської машинки через setTimeout!" : input;
    const output = document.getElementById('typewriter-output');
    
    if (currentTimer) clearInterval(currentTimer); 
    output.innerText = "";

    let i = 0;

    function type() {
        if (i < text.length) {
            output.innerText += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    type(); 
}


function playGame() {
    const betInput = document.getElementById('bet-amount');
    const statusDiv = document.getElementById('game-status');
    const resultDiv = document.getElementById('game-result');
    
    const bet = parseFloat(betInput.value);

    if (isNaN(bet) || bet <= 0) {
        alert("Будь ласка, введіть коректну суму ставки (більше 0).");
        return;
    }

    resultDiv.style.display = 'none';
    statusDiv.innerText = "Генеруємо результат... Зачекайте 1 секунду.";
    betInput.disabled = true; 

    setTimeout(function() {
        const randomNum = Math.floor(Math.random() * 11) - 5;
        
        let message = "";
        let color = "";

        if (randomNum <= 0) {
            message = `Випало число ${randomNum}. Ви не вгадали (число ≤ 0). Ви програли ставку.`;
            color = "red";
        } else {
            const winAmount = bet * randomNum;
            message = `Випало число ${randomNum}. Ви виграли! Ваш виграш: ${winAmount} грн.`;
            color = "green";
        }

        statusDiv.innerText = ""; 
        resultDiv.innerText = message;
        resultDiv.style.color = color;
        resultDiv.style.display = 'block';
        
        betInput.disabled = false;
    }, 1000);
}