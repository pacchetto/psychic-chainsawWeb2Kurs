const products2 = [
  { productId: 1, name: 'Ноутбук', price: 25000 },
  { productId: 2, name: 'Миша', price: 500 },
  { productId: 3, name: 'Клавіатура', price: 1200 }
];

const purchases = [
  { purchaseId: 1, productId: 1, quantity: 2 },
  { purchaseId: 2, productId: 2, quantity: 5 },
  { purchaseId: 3, productId: 1, quantity: 1 },
  { purchaseId: 4, productId: 3, quantity: 3 }
];

function getTotalSales(productsArray, purchasesArray) {
  return purchasesArray.reduce((sales, purchase) => {
    const product = productsArray.find(p => p.productId === purchase.productId);
    if (product) {
      const productName = product.name;
      const revenue = product.price * purchase.quantity;
      sales[productName] = (sales[productName] || 0) + revenue;
    }
    return sales;
  }, {});
}

console.log('Загальні продажі:', getTotalSales(products2, purchases));
