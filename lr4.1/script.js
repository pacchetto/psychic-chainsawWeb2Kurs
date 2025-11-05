//Завдання 1
let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    autor:"J. K. Rowling",
    year: 1997,
    isRead: true,
    bookInfo(){
        console.log(`Назва: ${this.title}, Автор: ${this.autor}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`)
    }
}
book.isRead = !book.isRead
book.bookInfo()


//Завдання 2
let library = [
    {
        title: "Harry Potter and the Sorcerer's Stone", 
        autor:"J. K. Rowling", 
        year: 1997, 
        isRead: true,
        markAsRead() {
            this.isRead = true;
            console.log(`Книга "${this.title}" позначена як прочитана`)
        }
    },

    {
        title: "The Hobbit",
        autor:"J. R. R. Tolkien",
        year: 1937,
        isRead: false,
        markAsRead() {
            this.isRead = true;
            console.log(`Книга "${this.title}" позначена як прочитана`)
        }
    },

    {
        title: "1984", 
        autor:"George Orwell",
        year: 1949,
        isRead: true,
        markAsRead() {
            this.isRead = true;
            console.log(`Книга "${this.title}" позначена як прочитана`)
        }
    }
];


function displayLibrary(){
    library.forEach(book => {
        console.log(`Назва: ${book.title}, Автор: ${book.autor}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`)
    })
}


console.log("===Поточна бібліотека===")
displayLibrary()


library.push(
    {
        title: "The Great Gatsby",
        autor:"F. Scott Fitzgerald",
        year: 1925,
        isRead: false,
        markAsRead() {
            this.isRead = true;
            console.log(`Книга "${this.title}" позначена як прочитана`)
        }
    }
)


console.log("\n===Поточна бібліотека після оновлення===")
displayLibrary()


//Завдання 3
library.sort((a, b) => a.year - b.year);
console.log("\nВідсортовані книги за роком видання: ", library)


let unreadBooks = library.filter(book => !book.isRead);
console.log("\nНепрочитані книги: ", unreadBooks)


let tolkienBook = library.find(book => book.autor === "J. R. R. Tolkien");
console.log("\nКнига Толкіна: ", tolkienBook)


//Завдання 4
function calculateAverageYear(libraryArray) {
    if (libraryArray.length === 0) {
        return 0;
    }
    
    const totalYears = libraryArray.reduce((sum, book) => sum + book.year, 0);
    return totalYears / libraryArray.length;
}

console.log("\n===Середній рік видання книг===")
console.log("Середній рік:", calculateAverageYear(library))


//метод markAsRead
console.log("\n===Позначення книги як прочитаної===")
console.log("До позначення:")
displayLibrary()

let hobbitBook = library.find(book => book.title === "The Hobbit");
if (hobbitBook) {
    hobbitBook.markAsRead();
}

console.log("\nПісля позначення:")
displayLibrary()


// Перевірка непрочитаних книг після позначення
let updatedUnreadBooks = library.filter(book => !book.isRead);
console.log("\nНепрочитані книги після оновлення:", updatedUnreadBooks)


console.log("-------------------------------------------")
console.log("===========Індивідуальне завдання==========")
console.log("-------------------------------------------")

let exercises = [
    {
        name: "Віджимання",
        sets: 3,
        reps: 15,
        group: "Грудні",
        isDone: false,
        markAsDone() {
            this.isDone = true;
            console.log(`Вправа "${this.name}" виконана!`);
        }
    },
    {
        name: "Присідання",
        sets: 4,
        reps: 20,
        group: "Ноги",
        isDone: false,
        markAsDone() {
            this.isDone = true;
            console.log(`Вправа "${this.name}" виконана!`);
        }
    },
    {
        name: "Планка",
        sets: 2,
        reps: 1,
        group: "Прес",
        isDone: false,
        markAsDone() {
            this.isDone = true;
            console.log(`Вправа "${this.name}" виконана!`);
        }
    }
];

function displayExercises() {
    exercises.forEach(ex => {
        console.log(
            `Назва: ${ex.name}, Підходів: ${ex.sets}, Повторень: ${ex.reps}, Група: ${ex.group}, Виконано: ${ex.isDone ? "Так" : "Ні"}`
        );
    });
}

// Позначити вправу як виконану
let plank = exercises.find(ex => ex.name === "Планка");
if (plank) plank.markAsDone();

console.log("===Усі вправи===");
displayExercises();

// Фільтрація невиконаних вправ
let notDoneExercises = exercises.filter(ex => !ex.isDone);
console.log("Невиконані вправи:", notDoneExercises);

// Групування за групами м'язів
function groupExercisesByMuscle(exArray) {
    return exArray.reduce((groups, ex) => {
        if (!groups[ex.group]) groups[ex.group] = [];
        groups[ex.group].push(ex);
        return groups;
    }, {});
}

console.log("Групи вправ за м'язами:");
console.log(groupExercisesByMuscle(exercises));

// Статистика: середня кількість повторень на вправу
function averageReps(exArray) {
    if (exArray.length === 0) return 0;
    let total = exArray.reduce((sum, ex) => sum + ex.reps, 0);
    return total / exArray.length;
}

console.log("Середня кількість повторень:", averageReps(exercises));
