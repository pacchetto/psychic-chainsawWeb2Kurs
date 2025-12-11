function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num1 > num2) {
                resolve("Перше число більше");
            } else if (num1 < num2) {
                resolve("Друге число більше");
            } else {
                reject("Числа рівні");
            }
        }, 1000);
    });
}

function runTask4() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('task4-result');
    const btn = document.querySelector('button[onclick="runTask4()"]');

    if (isNaN(n1) || isNaN(n2)) {
        output.innerText = "Будь ласка, введіть обидва числа.";
        output.className = "output-box error";
        return;
    }

    output.innerText = "Аналізуємо... (чекайте 1 сек)";
    output.className = "output-box";
    btn.disabled = true;

    compareNumbers(n1, n2)
        .then((message) => {
            output.innerText = `Успіх: ${message}`;
            output.className = "output-box success";
        })
        .catch((error) => {
            output.innerText = `Відхилено: ${error}`;
            output.className = "output-box error";
        })
        .finally(() => {
            btn.disabled = false;
        });
}

function createRandomPromise(delay, name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Випадкове число від 1 до 10
            const randomNum = Math.floor(Math.random() * 10) + 1;
            
            const logDiv = document.getElementById('task5-log');
            logDiv.innerHTML += `<div>Promise (${delay}ms) завершено. Число: ${randomNum}</div>`;
            
            resolve(randomNum);
        }, delay);
    });
}

function runTask5() {
    const resultDiv = document.getElementById('result');
    const logDiv = document.getElementById('task5-log');
    const btn = document.querySelector('button[onclick="runTask5()"]');
    
    resultDiv.innerText = "Обчислення...";
    logDiv.innerHTML = "";
    btn.disabled = true;

    const promises = [
        createRandomPromise(1000, "1 сек"),
        createRandomPromise(2000, "2 сек"),
        createRandomPromise(3000, "3 сек")
    ];

    Promise.all(promises)
        .then((values) => {
            console.log("Отримані значення:", values);

            const sum = values.reduce((total, num) => total + num, 0);

            resultDiv.innerText = `Сума всіх значень: ${sum} (числа: ${values.join(', ')})`;
        })
        .catch((err) => {
            resultDiv.innerText = "Сталася помилка при виконанні.";
        })
        .finally(() => {
            btn.disabled = false;
        });
}