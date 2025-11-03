const students = [
  { name: 'Олена', age: 20, grade: 85, group: 'A' },
  { name: 'Іван', age: 22, grade: 92, group: 'B' },
  { name: 'Марія', age: 21, grade: 78, group: 'A' },
  { name: 'Петро', age: 23, grade: 88, group: 'B' },
  { name: 'Анна', age: 20, grade: 95, group: 'A' }
];

function groupBy(studentsArray, key) {
  return studentsArray.reduce((groups, student) => {
    const groupName = student[key];
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(student);
    return groups;
  }, {});
}

function sortStudentsByGrade(studentsArray) {
  return [...studentsArray].sort((a, b) => b.grade - a.grade);
}

console.log(groupBy(students, 'group'));
console.log(sortStudentsByGrade(students));
