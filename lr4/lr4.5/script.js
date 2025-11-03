const orders = [
  { 
    orderId: 1, 
    customer: { name: 'Олег', email: 'oleg@mail.com' }, 
    items: ['Ноутбук', 'Миша'], 
    total: 25500 
  },
  { 
    orderId: 2, 
    customer: { name: 'Світлана', email: 'svitlana@mail.com' }, 
    items: ['Клавіатура'], 
    total: 1200 
  },
  { 
    orderId: 3, 
    customer: { name: 'Олег', email: 'oleg@mail.com' }, 
    items: ['Монітор'], 
    total: 8000 
  }
];

function getTotalSpentByCustomer(ordersArray, customerName) {
  return ordersArray
    .filter(order => order.customer.name === customerName)
    .reduce((total, order) => total + order.total, 0);
}

console.log('Загальні витрати Олега:', getTotalSpentByCustomer(orders, 'Олег'));
