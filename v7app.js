// Sample product data
const products = [
    { name: "Product 1", price: 19.99, image: "product1.jpg" },
    { name: "Product 2", price: 24.99, image: "product2.jpg" }
];

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.addEventListener('click', () => addToCart(product));

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(addToCartBtn);

        productsContainer.appendChild(productDiv);
    });
}

// Function to add a product to the cart
function addToCart(product) {
    // For demonstration, you might store the selected products in an array or perform further actions here.
    console.log(`Added ${product.name} to cart!`);
}

// Call the function to display products when the page loads
displayProducts();
