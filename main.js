// Task 2: Add event listener for Product Selection

//getting elements for listeners
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Task 3: Calculate Total Price Dynamically
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);