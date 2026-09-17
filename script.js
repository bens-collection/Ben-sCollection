const WHATSAPP_NUMBER = "212770190265";

/* ==================================================
   PRODUCTS
================================================== */

const products = [
  {
    id: 1,
    name: "Rolex Datejust",
    price: 209.99,
    image: "images/rolex-datejust.jpg",
    description:
      "Montre élégante avec bracelet inox et cadran raffiné."
  },

  {
    id: 2,
    name: "Rolex Day-Date",
    price: 279.99,
    image: "images/rolex-daydate.jpg",
    description:
      "Design premium et présence élégante pour toutes les occasions."
  },

  {
    id: 3,
    name: "Patek Philippe",
    price: 219.99,
    image: "images/patek-philippe.jpg",
    description:
      "Une pièce au style luxueux et intemporel."
  },

  {
    id: 4,
    name: "Hublot Big Bang",
    price: 209.99,
    image: "images/hublot-big-bang.jpg",
    description:
      "Un design moderne et sportif avec une forte présence."
  }
];


let selectedProduct = null;


/* ==================================================
   PAGE LOADER
================================================== */

window.addEventListener("load", function () {

  const loader = document.getElementById("pageLoader");

  setTimeout(function () {

    if (loader) {
      loader.classList.add("hidden");
    }

    startHeroAnimations();

  }, 900);

});


/* ==================================================
   HERO ANIMATIONS
================================================== */

function startHeroAnimations() {

  const elements =
    document.querySelectorAll(".hero .reveal");

  elements.forEach(function (element, index) {

    setTimeout(function () {

      element.classList.add("visible");

    }, index * 180);

  });

}


/* ==================================================
   PRODUCT DISPLAY
================================================== */

function displayProducts() {

  const container =
    document.getElementById("products");

  if (!container) return;

  container.innerHTML = "";


  products.forEach(function (product, index) {

    const article =
      document.createElement("article");

    article.className = "product reveal";


    article.innerHTML = `

      <img
        class="product-image"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

      <div class="product-info">

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.description}
        </p>

        <p class="price">
          ${product.price.toFixed(2)} MAD
        </p>

        <button
          class="product-btn"
          type="button"
          onclick="openProduct(${product.id})"
        >
          DISCOVER
        </button>

      </div>

    `;


    container.appendChild(article);


    setTimeout(function () {

      article.classList.add("visible");

    }, 250 + index * 120);

  });

}


/* ==================================================
   PRODUCT MODAL
================================================== */

function openProduct(id) {

  selectedProduct =
    products.find(function (product) {

      return product.id === id;

    });


  if (!selectedProduct) return;


  const modal =
    document.getElementById("productModal");


  const image =
    document.getElementById("modalImage");

  const name =
    document.getElementById("modalName");

  const description =
    document.getElementById("modalDescription");

  const price =
    document.getElementById("modalPrice");


  if (image) {
    image.src = selectedProduct.image;
    image.alt = selectedProduct.name;
  }


  if (name) {
    name.textContent =
      selectedProduct.name;
  }


  if (description) {
    description.textContent =
      selectedProduct.description;
  }


  if (price) {
    price.textContent =
      selectedProduct.price.toFixed(2) + " MAD";
  }


  if (modal) {

    modal.classList.add("active");

    document.body.classList.add("modal-open");

  }

}


/* ==================================================
   CLOSE PRODUCT
================================================== */

function closeProduct() {

  const modal =
    document.getElementById("productModal");


  if (modal) {
    modal.classList.remove("active");
  }


  document.body.classList.remove("modal-open");

}


/* ==================================================
   CHECKOUT
================================================== */

function openCheckout() {

  if (!selectedProduct) return;


  closeProduct();


  const image =
    document.getElementById("checkoutImage");

  const name =
    document.getElementById("checkoutName");

  const price =
    document.getElementById("checkoutPrice");

  const total =
    document.getElementById("totalPrice");


  if (image) {

    image.src =
      selectedProduct.image;

    image.alt =
      selectedProduct.name;

  }


  if (name) {

    name.textContent =
      selectedProduct.name;

  }


  if (price) {

    price.textContent =
      selectedProduct.price.toFixed(2) + " MAD";

  }


  if (total) {

    total.textContent =
      selectedProduct.price.toFixed(2) + " MAD";

  }


  const checkoutModal =
    document.getElementById("checkoutModal");


  if (checkoutModal) {

    checkoutModal.classList.add("active");

    document.body.classList.add("modal-open");

  }

}


/* ==================================================
   CLOSE CHECKOUT
================================================== */

function closeCheckout() {

  const modal =
    document.getElementById("checkoutModal");


  if (modal) {

    modal.classList.remove("active");

  }


  document.body.classList.remove("modal-open");

}


/* ==================================================
   ORDER FORM
================================================== */

const orderForm =
  document.getElementById("orderForm");


if (orderForm) {

  orderForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      if (!selectedProduct) {

        alert(
          "Veuillez sélectionner une montre."
        );

        return;

      }


      const name =
        document
          .getElementById("customerName")
          .value
          .trim();


      const phone =
        document
          .getElementById("customerPhone")
          .value
          .trim();


      const city =
        document
          .getElementById("customerCity")
          .value
          .trim();


      const address =
        document
          .getElementById("customerAddress")
          .value
          .trim();


      const note =
        document
          .getElementById("customerNote")
          .value
          .trim();


      const message =

`🕰️ *BEN'S COLLECTION — NOUVELLE COMMANDE*

━━━━━━━━━━━━━━━━━━

⌚ *PRODUIT*
${selectedProduct.name}

💰 *PRIX*
${selectedProduct.price.toFixed(2)} MAD

━━━━━━━━━━━━━━━━━━

👤 *NOM COMPLET*
${name}

📞 *TÉLÉPHONE*
${phone}

📍 *VILLE*
${city}

🏠 *ADRESSE*
${address}

📝 *NOTE*
${note || "Aucune"}

━━━━━━━━━━━━━━━━━━

💵 *PAIEMENT*
Paiement à la livraison

💰 *TOTAL*
${selectedProduct.price.toFixed(2)} MAD

━━━━━━━━━━━━━━━━━━

BEN'S COLLECTION
TIMELESS ELEGANCE`;


      const whatsappURL =
        "https://wa.me/" +
