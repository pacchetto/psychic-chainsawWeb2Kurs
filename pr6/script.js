// --- ДАНІ ---
const products = [
    { id: 1, name: "Футбольний м'яч", price: 500, img: "https://placehold.co/200x200?text=Ball" },
    { id: 2, name: "Гантелі (2 шт)", price: 1200, img: "https://placehold.co/200x200?text=Dumbbells" },
    { id: 3, name: "Килимок для йоги", price: 450, img: "https://placehold.co/200x200?text=Yoga+Mat" },
    { id: 4, name: "Тенісна ракетка", price: 1500, img: "https://placehold.co/200x200?text=Racket" },
    { id: 5, name: "Боксерські рукавиці", price: 900, img: "https://placehold.co/200x200?text=Gloves" },
    { id: 6, name: "Спортивна сумка", price: 800, img: "https://placehold.co/200x200?text=Bag" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let tempProductId = null; 

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCounter();
});

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-title">${product.name}</div>
            <div class="product-price">${product.price} грн</div>
            <button class="btn-primary" onclick="openQuantityModal(${product.id})">Додати у корзину</button>
        </div>
    `).join('');
}

function openQuantityModal(id) {
    tempProductId = id;
    document.getElementById('qty-input').value = 1;
    document.getElementById('modal-quantity').classList.remove('hidden');
}

function confirmAddToCart() {
    const inputVal = document.getElementById('qty-input').value;
    let qty = parseInt(inputVal);

    if (isNaN(qty) || qty <= 0) {
        qty = 1;
    }
    
    if (tempProductId) {
        addToCart(tempProductId, qty);
        closeModal('modal-quantity');
        
        document.getElementById('modal-success').classList.remove('hidden');
    }
}

function addToCart(id, qty) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ id: id, qty: qty });
    }
    saveCart();
    updateCartCounter();
}

function openCart() {
    if (cart.length === 0) {
        document.getElementById('modal-empty').classList.remove('hidden');
    } else {
        showCartPage();
    }
}

function updateCartCounter() {
    document.getElementById('cart-counter').innerText = cart.length;
}

function showCartPage() {
    document.getElementById('catalog-page').classList.add('hidden');
    document.getElementById('cart-page').classList.remove('hidden');
    
    const container = document.getElementById('cart-items-container');
    
    if (cart.length === 0) {
        container.innerHTML = "<p>Корзина пуста</p>";
        return;
    }

    let totalSum = 0;
    
    let html = `
        <table>
            <thead>
                <tr>
                    <th>Фото</th>
                    <th>Назва</th>
                    <th>Ціна</th>
                    <th>К-сть</th>
                    <th>Сума</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
    `;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.qty;
        totalSum += itemTotal;

        html += `
            <tr>
                <td><img src="${product.img}" class="cart-item-img"></td>
                <td>${product.name}</td>
                <td>${product.price} грн</td>
                <td>${item.qty}</td>
                <td>${itemTotal} грн</td>
                <td><button class="delete-btn" onclick="deleteFromCart(${item.id})">&times;</button></td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
        <div style="text-align: right; font-size: 20px; font-weight: bold; margin-bottom: 20px;">
            Разом до сплати: ${totalSum} грн
        </div>
    `;

    container.innerHTML = html;
}

function deleteFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCounter();
    showCartPage(); 
    
    if (cart.length === 0) {
        showCatalog();
    }
}

function showCatalog() {
    document.getElementById('cart-page').classList.add('hidden');
    document.getElementById('catalog-page').classList.remove('hidden');
}

function goToCartFromModal() {
    closeModal('modal-success');
    showCartPage();
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}