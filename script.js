let cart = [];

function addToCart(productName) {
    cart.push(productName);
    alert(productName + " добавлен в корзину!");
}

function sendOrder() {
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }
    alert("Ваш заказ: " + cart.join(", "));
}