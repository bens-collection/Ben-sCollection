/* =========================================================
   BEN'S COLLECTION — V2 SCRIPT
   ========================================================= */

const WHATSAPP_NUMBER = "212770190265";


/* =========================
   PRODUCTS
   ========================= */

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


/* =========================
   PAGE LOADER
   ========================= */

window.addEventListener("load", function () {

  setTimeout(function () {

    const loader =
      document.getElementById("pageLoader");

    if (loader) {
      loader.classList.add("loaded");
    }

    document.body.classList.remove("no-scroll");

  }, 1600);

});


/* =========================
   NAVBAR
   ========================= */

window.addEventListener("scroll", function () {

  const header =
    document.getElementById("siteHeader");

  if (!header) return;

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================
   MOBILE MENU
   ========================= */

const menuToggle =
  document.getElementById("menuToggle");

const mobileMenu =
  document.getElementById("mobileMenu");


if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

  });


  const mobileLinks =
    mobileMenu.querySelectorAll("a");

  mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      mobileMenu.classList.remove("active");

    });

  });

}


/* =========================
   DISPLAY PRODUCTS
   ========================= */

function displayProducts() {

  const container =
    document.getElementById("products");

  if (!container) return;

  container.innerHTML = "";


  products.forEach(function (product) {

    container.innerHTML += `

      <article class="product">

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
            onclick="openProduct(${product.id})"
          >
            VIEW DETAILS
          </button>

        </div>

      </article>

    `;

  });

}


/* =========================
   OPEN PRODUCT
   ========================= */

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

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("no-scroll");

  }

}


/* =========================
   CLOSE PRODUCT
   ========================= */

function closeProduct() {

  const modal =
    document.getElementById("productModal");

  if (!modal) return;


  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("no-scroll");

}


/* =========================
   OPEN CHECKOUT
   ========================= */

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

  const modal =
    document.getElementById("checkoutModal");


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
      selectedProduct.price.toFixed(2) +
      " MAD";
  }


  if (total) {
    total.textContent =
      selectedProduct.price.toFixed(2) +
      " MAD";
  }


  if (modal) {

    modal.style.display = "flex";

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "no-scroll"
    );

  }

}


/* =========================
   CLOSE CHECKOUT
   ========================= */

function closeCheckout() {

  const modal =
    document.getElementById("checkoutModal");

  if (!modal) return;


  modal.style.display = "none";

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "no-scroll"
  );

}


/* =========================
   ORDER FORM
   ========================= */

const orderForm =
  document.getElementById("orderForm");


if (orderForm) {

  orderForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      if (!selectedProduct) {
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

━━━━━━━━━━━━━━━━━━
Merci pour votre commande.
BEN'S COLLECTION
TIMELESS ELEGANCE
━━━━━━━━━━━━━━━━━━`;


      const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );

}


/* =========================
   CLOSE MODALS
   ========================= */

window.addEventListener(
  "click",
  function (event) {

    const productModal =
      document.getElementById("productModal");

    const checkoutModal =
      document.getElementById("checkoutModal");


    if (
      productModal &&
      event.target === productModal
    ) {

      closeProduct();

    }


    if (
      checkoutModal &&
      event.target === checkoutModal
    ) {

      closeCheckout();

    }

  }
);


/* =========================
   ESC KEY
   ========================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeProduct();
      closeCheckout();

      if (mobileMenu) {
        mobileMenu.classList.remove(
          "active"
        );
      }

    }

  }
);


/* =========================
   START
   ========================= */

displayProducts();
