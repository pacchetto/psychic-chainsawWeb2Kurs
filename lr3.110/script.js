function* randomGenerator(min, max) {
  while (true) {
      yield Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getValidNumber(message) {
  let input;
  let number;
  
  do {
      input = prompt(message);
      
      if (input === null) {
          return null;
      }
      
      number = parseFloat(input);
      
      if (isNaN(number)) {
          alert("Помилка! Будь ласка, введіть число.");
      }
  } while (isNaN(number));
  
  return number;
}

let min = getValidNumber("Введіть мінімальне значення:");

if (min !== null) {
  let max = getValidNumber("Введіть максимальне значення:");
  
  if (max !== null) {
      if (min > max) {
          alert("Мінімальне значення не може бути більшим за максимальне. Значення будуть поміняні місцями.");
          [min, max] = [max, min];
      }
      
      const generator = randomGenerator(min, max);
      
      document.getElementById('next').addEventListener('click', function() {
          const randomNumber = generator.next().value;
          document.getElementById('out').textContent = randomNumber;
      });
  }
}