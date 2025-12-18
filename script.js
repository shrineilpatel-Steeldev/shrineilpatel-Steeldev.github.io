document.addEventListener('DOMContentLoaded', () => {
    // Initialize any global functionality here
    console.log('Amazon Clone Deluxe loaded!');
    
    // Cart counter functionality
    let cartCount = 0;
    const cartCounter = document.getElementById('cart-count');
    
    document.addEventListener('add-to-cart', () => {
        cartCount++;
        if (cartCounter) {
            cartCounter.textContent = cartCount;
            cartCounter.classList.remove('hidden');
        }
    });
});
