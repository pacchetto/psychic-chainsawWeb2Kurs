const task1Date = new Date(2021, 1, 20, 3, 12);
document.getElementById('task1-result').innerText = task1Date.toString();


function getWeekDay(date) {
    const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

const today = new Date();
document.getElementById('task2-date').innerText = today.toDateString();
document.getElementById('task2-result').innerText = `Сьогодні: ${getWeekDay(today)}`;


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

const lastDay2020 = getLastDayOfMonth(2020, 1); 
const lastDay2021 = getLastDayOfMonth(2021, 1); 

document.getElementById('task3-result').innerText = 
    `Лютий 2020 (високосний): ${lastDay2020} днів\n` +
    `Лютий 2021 (звичайний): ${lastDay2021} днів`;


function getSecondsToTomorrow() {
    let now = new Date();
    
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    
    let diff = tomorrow - now;
    
    return Math.round(diff / 1000);
}

function updateSeconds() {
    document.getElementById('task4-result').innerText = 
        `${getSecondsToTomorrow()} секунд до завтра`;
}
updateSeconds();


function formatDate(date) {
    let diff = new Date() - date; 

    if (diff < 1000) { 
        return 'прямо зараз';
    }

    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000); 
    if (min < 60) {
        return min + ' хв. назад';
    }


    let d = date;
    let day = d.getDate().toString().padStart(2, '0');
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let year = d.getFullYear().toString().slice(-2); // Беремо останні 2 цифри року
    let hours = d.getHours().toString().padStart(2, '0');
    let minutes = d.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

// Тест (щоб оновити дані на сторінці)
let output5 = "";
output5 += "new Date(): " + formatDate(new Date()) + "\n";
output5 += "30 сек назад: " + formatDate(new Date(new Date - 30 * 1000)) + "\n";
output5 += "5 хв назад:   " + formatDate(new Date(new Date - 5 * 60 * 1000)) + "\n";
// Вчорашня дата
output5 += "Вчора:        " + formatDate(new Date(new Date - 86400 * 1000));

document.getElementById('task5-result').innerText = output5;