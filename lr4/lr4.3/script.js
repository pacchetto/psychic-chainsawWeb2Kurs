const employees = [
  { name: 'Олександр', position: 'Менеджер', salary: 30000, years: 5 },
  { name: 'Тетяна', position: 'Програміст', salary: 45000, years: 3 },
  { name: 'Сергій', position: 'Дизайнер', salary: 35000, years: 7 },
  { name: 'Наталія', position: 'Аналітик', salary: 40000, years: 4 },
  { name: 'Дмитро', position: 'Директор', salary: 60000, years: 10 }
];

function getAverageSalary(employeesArray) {
  const total = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  return total / employeesArray.length;
}

function findMostExperiencedEmployee(employeesArray) {
  return employeesArray.reduce((mostExperienced, current) => 
    current.years > mostExperienced.years ? current : mostExperienced
  );
}

console.log('Середня зарплата:', getAverageSalary(employees));
console.log('Найдосвідченіший:', findMostExperiencedEmployee(employees));
