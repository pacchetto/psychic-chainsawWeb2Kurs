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
    const num1 = Number(prompt('Введіть перше число:'));
    const num2 = Number(prompt('Введіть друге число:'));
    const operation = prompt('Введіть операцію (+, -, *, /):');
    
    const result = calculate(num1, num2, operation);
    alert(`Результат: ${result}`);
  }
  
  showResult();
  