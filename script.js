let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalAmount = document.getElementById('total-amount');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        li.appendChild(createRemoveButton(index));
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length;
    totalAmount.textContent = total.toFixed(2);
}

function createRemoveButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.onclick = () => {
        removeFromCart(index);
    };
    return button;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}