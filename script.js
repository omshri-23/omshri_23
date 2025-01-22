// Global cart array to store the added items
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  updateCartDisplay();
}

// Function to delete items from the cart
function deleteFromCart(index) {
  cart.splice(index, 1); // Remove item at the specified index
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartList = document.getElementById("cart-list");
  const totalPriceElement = document.getElementById("total-price");

  // Clear the current cart display
  cartList.innerHTML = "";

  // Add each item in the cart to the cart list
  let totalPrice = 0;
  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    
    // Create a delete button for each item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteFromCart(index);
    
    // Append the delete button to the list item
    listItem.appendChild(deleteButton);
    
    cartList.appendChild(listItem);

    // Update the total price
    totalPrice += item.price;
  });

  // Display the total price
  totalPriceElement.textContent = `Total: $${totalPrice}`;
}

// Handle order form submission
document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  alert("Order placed successfully!");
  cart = []; // Clear the cart after placing the order
  updateCartDisplay(); // Update the cart display
});
