function calculate(a, b, operation) {
    switch(operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) return 'Cannot divide by zero';
        return a / b;
      default:
        return 'Invalid operation';
    }
  }
  
  function showResult() {
    const input1 = prompt('Введіть перше число:');
    const num1 = Number(input1);
    
    if (isNaN(num1) || input1 === null || input1.trim() === '') {
      alert('Помилка: введіть коректне число!');
      return;
    }
    
    const input2 = prompt('Введіть друге число:');
    const num2 = Number(input2);
    
    if (isNaN(num2) || input2 === null || input2.trim() === '') {
      alert('Помилка: введіть коректне число!');
      return;
    }
    
    const operation = prompt('Введіть операцію (+, -, *, /):');
    
    if (operation === null || operation.trim() === '') {
      alert('Помилка: операція не може бути порожньою!');
      return;
    }
    
    const result = calculate(num1, num2, operation);
    alert(`Результат: ${result}`);
  }
  
  showResult();
  