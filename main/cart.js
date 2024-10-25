// Get the "Add To Cart" button
var addToCartButton = document.querySelector('.halfchild .btn');

// Add an event listener to the button
addToCartButton.addEventListener('click', function(event) {
    // Prevent the default action
    event.preventDefault();

    // Get the product details
    var productName = document.querySelector('.halfchild h1').innerText;
    var productPrice = parseFloat(document.querySelector('.halfchild h4').innerText.replace('Rs.', ''));
    var productSize = document.querySelector('.halfchild select').value;
    var productQuantity = parseInt(document.querySelector('.halfchild input[type="number"]').value);

    // Create a new product object
    var product = {
        name: productName,
        price: productPrice,
        size: productSize,
        quantity: productQuantity
    };

    // Get the cart from local storage
    var cart = JSON.parse(localStorage.getItem('cart'));

    // Check if the product is already in the cart
    var existingProduct = cart.find(function(item) {
        return item.name === product.name && item.size === product.size;
    });

    if (existingProduct) {
        // Update the quantity of the existing product
        existingProduct.quantity += product.quantity;
    } else {
        // Add the new product to the cart
        cart.push(product);
    }

    // Save the cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Calculate the total price
    var totalPrice = cart.reduce(function(total, product) {
        return total + (product.price * product.quantity);
    }, 0);

    // Log the total price to the console (for testing purposes)
    console.log(totalPrice);
});

// Function to remove a product from the cart
function removeFromCart(productName, productSize) {
    // Get the cart from local storage
    var cart = JSON.parse(localStorage.getItem('cart'));

    // Remove the product from the cart
    cart = cart.filter(function(item) {
        return !(item.name === productName && item.size === productSize);
    });

    // Save the cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

