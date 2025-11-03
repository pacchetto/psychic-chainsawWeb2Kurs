const products = [
  { name: 'Ноутбук', category: 'Електроніка', price: 25000, inStock: 5 },
  { name: 'Миша', category: 'Аксесуари', price: 500, inStock: 0 },
  { name: 'Клавіатура', category: 'Аксесуари', price: 1200, inStock: 10 },
  { name: 'Монітор', category: 'Електроніка', price: 8000, inStock: 0 },
  { name: 'Навушники', category: 'Аксесуари', price: 1500, inStock: 8 }
];

function getAvailableProducts(productsArray) {
  return productsArray.filter(product => product.inStock > 0);
}

function findProductByName(productsArray, productName) {
  const product = productsArray.find(item => item.name === productName);
  return product ? product : "Товар не знайдено";
}

console.log(getAvailableProducts(products));
console.log(findProductByName(products, 'Клавіатура'));
console.log(findProductByName(products, 'Телефон'));
