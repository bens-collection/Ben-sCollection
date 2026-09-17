const WHATSAPP_NUMBER = "212770190265";

const products = [
  {
    id: 1,
    name: "Rolex Datejust",
    price: 209.99,
    image: "images/rolex-datejust.jpg",
    description: "Montre élégante avec bracelet inox et cadran raffiné."
  },
  {
    id: 2,
    name: "Rolex Day-Date",
    price: 279.99,
    image: "images/rolex-daydate.jpg",
    description: "Design premium et présence élégante pour toutes les occasions."
  },
  {
    id: 3,
    name: "Patek Philippe",
    price: 219.99,
    image: "images/patek-philippe.jpg",
    description: "Une pièce au style luxueux et intemporel."
  },
  {
    id: 4,
    name: "Hublot Big Bang",
    price: 209.99,
    image: "images/hublot-big-bang.jpg",
    description: "Un design moderne et sportif avec une forte présence."
  }
];

let selectedProduct = null;

function displayProducts() {
  const container = document.getElementById("products");

  if (!container) return;

  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <article class="product">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
        >

        <div class="product-info">
          <h3>${product.name}</h3>

          <p>${product.description}</p>

          <p class="price">
            ${product.price.toFixed(2)} MAD
          </p>

          <button
            class="product-btn"
            onclick="openProduct(${product.id})"
          >
            VIEW DETAILS
          </button>
        </div>
      </article>
    `;
  });
}

function openProduct(id) {
  selectedProduct = products.find(product => product.id === id);

  if (!selectedProduct) return;

  document.getElementById("modalImage").src =
    selectedProduct.image;

  document.getElementById("modalName").textContent =
    selectedProduct.name;

  document.getElementById("modalDescription").textContent =
    selectedProduct.description;

  document.getElementById("modalPrice").textContent =
    selectedProduct.price.toFixed(2) + " MAD";

  document.getElementById("productModal").style.display = "block";

  document.body.style.overflow = "hidden";
}

function closeProduct() {
  document.getElementById("productModal").style.display = "none";

  document.body.style.overflow = "auto";
}

function openCheckout() {
  if (!selectedProduct) return;

  closeProduct();

  document.getElementById("checkoutImage").src =
    selectedProduct.image;

  document.getElementById("checkoutName").textContent =
    selectedProduct.name;

  document.getElementById("checkoutPrice").textContent =
    selectedProduct.price.toFixed(2) + " MAD";

  document.getElementById("totalPrice").textContent =
    selectedProduct.price.toFixed(2) + " MAD";

  document.getElementById("checkoutModal").style.display = "block";

  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  document.getElementById("checkoutModal").style.display = "none";

  document.body.style.overflow = "auto";
}

const orderForm = document.getElementById("orderForm");

if (orderForm) {
  orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!selectedProduct) return;

    const name =
      document.getElementById("customerName").value.trim();

    const phone =
      document.getElementById("customerPhone").value.trim();

    const city =
      document.getElementById("customerCity").value.trim();

    const address =
      document.getElementById("customerAddress").value.trim();

    const note =
      document.getElementById("customerNote").value.trim();

    const message =
`🕰️ *BEN'S COLLECTION — NOUVELLE COMMANDE*

⌚ *Produit :*
${selectedProduct.name}

💰 *Prix :*
${selectedProduct.price.toFixed(2)} MAD

👤 *Nom :*
${name}

📞 *Téléphone :*
${phone}

📍 *Ville :*
${city}

🏠 *Adresse :*
${address}

📝 *Note :*
${note || "Aucune"}

💵 *Paiement :*
À LA LIVRAISON

━━━━━━━━━━━━━━
Merci pour votre commande.
BEN'S COLLECTION
TIMELESS ELEGANCE
━━━━━━━━━━━━━━`;

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
}

window.onclick = function(event) {
  const productModal =
    document.getElementById("productModal");

  const checkoutModal =
    document.getElementById("checkoutModal");

  if (event.target === productModal) {
    closeProduct();
  }

  if (event.target === checkoutModal) {
    closeCheckout();
  }
};

displayProducts();
