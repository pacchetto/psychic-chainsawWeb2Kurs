const books = [
  { title: 'Кобзар', author: 'Тарас Шевченко', year: 1840, rating: 5, isRead: true },
  { title: 'Тіні забутих предків', author: 'Михайло Коцюбинський', year: 1911, rating: 4.5, isRead: false },
  { title: 'Захар Беркут', author: 'Іван Франко', year: 1883, rating: 4.8, isRead: false },
  { title: 'Ліс', author: 'Олесь Гончар', year: 1950, rating: 3.5, isRead: true },
  { title: 'Маруся', author: 'Григорій Квітка-Основ\'яненко', year: 1834, rating: 4.2, isRead: false }
];

function getUnreadBooks(booksArray) {
  return booksArray.filter(book => !book.isRead).map(book => book.title);
}

function getBooksByAuthor(booksArray, authorName) {
  return booksArray
    .filter(book => book.author === authorName)
    .sort((a, b) => a.year - b.year);
}

function getTopRatedBooks(booksArray) {
  return booksArray
    .filter(book => book.rating > 4)
    .sort((a, b) => b.rating - a.rating);
}

console.log('Непрочитані книги:', getUnreadBooks(books));
console.log('Книги Івана Франка:', getBooksByAuthor(books, 'Іван Франко'));
console.log('Топ книги:', getTopRatedBooks(books));
