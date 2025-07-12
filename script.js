const cart = [];

function showPage(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function addToCart(product, price) {
  cart.push({ product, price });
  updateCartCount();
  alert(`${product} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
  const cartBox = document.getElementById("cart-details");
  if (cartBox.style.display === "block") {
    cartBox.style.display = "none";
  } else {
    renderCart();
    cartBox.style.display = "block";
  }
}

function renderCart() {
  const cartBox = document.getElementById("cart-details");
  if (cart.length === 0) {
    cartBox.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    let itemsHTML = "";
    let total = 0;

    cart.forEach(item => {
      itemsHTML += `<li>${item.product} - ₹${item.price}</li>`;
      total += item.price;
    });

    cartBox.innerHTML = `
      <h3>Your Cart</h3>
      <ul>${itemsHTML}</ul>
      <p><strong>Total: ₹${total}</strong></p>
    `;
  }
}
