function createClickCounter() {
  let count = 0;
  
  return function() {
    count++;
    console.log(`Поточне значення: ${count}`);
  };
}

// Використання лічильника
const counter = createClickCounter();
counter(); // Виведе: Поточне значення: 1
counter(); // Виведе: Поточне значення: 2
counter(); // Виведе: Поточне значення: 3
counter(); // Виведе: Поточне значення: 4
counter(); // Виведе: Поточне значення: 5

// Створення другого незалежного лічильника
const counter2 = createClickCounter();
counter2(); // Виведе: Поточне значення: 1
counter2(); // Виведе: Поточне значення: 2
