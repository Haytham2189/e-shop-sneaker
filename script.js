/* =========================
   PRODUCT GALLERY
========================= */

const mainImage = document.querySelector("#main-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.dataset.full;

    thumbnails.forEach((thumb) => {
      thumb.classList.remove("active");
    });

    thumbnail.classList.add("active");
  });
});

/* =========================
   QUANTITY SELECTOR
========================= */

const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const quantityElement = document.querySelector(".quantity");

let quantity = 0;

plusBtn.addEventListener("click", () => {
  quantity++;
  quantityElement.textContent = quantity;
});

minusBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityElement.textContent = quantity;
  }
});

/* =========================
   CART
========================= */

const addToCartBtn = document.querySelector(".add-to-cart");
const cartBtn = document.querySelector(".cart-btn");
const cartDropdown = document.querySelector(".cart-dropdown");

const cartBadge = document.querySelector(".cart-badge");

const emptyCart = document.querySelector(".empty-cart");
const cartFilled = document.querySelector(".cart-filled");

const cartQuantityText = document.querySelector(".cart-quantity");
const cartTotal = document.querySelector(".cart-total");

const deleteBtn = document.querySelector(".delete-btn");

let cartQuantity = 0;

/* =========================
   OPEN / CLOSE CART
========================= */

cartBtn.addEventListener("click", () => {
  cartDropdown.style.display =
    cartDropdown.style.display === "block"
      ? "none"
      : "block";
});

/* =========================
   ADD TO CART
========================= */

addToCartBtn.addEventListener("click", () => {
  if (quantity === 0) return;

  cartQuantity += quantity;

  cartBadge.textContent = cartQuantity;
  cartBadge.style.display = "block";

  cartQuantityText.textContent = cartQuantity;

  const total = 125 * cartQuantity;
  cartTotal.textContent = `$${total.toFixed(2)}`;

  emptyCart.classList.add("hidden");
  cartFilled.classList.remove("hidden");

  quantity = 0;
  quantityElement.textContent = quantity;
});

/* =========================
   DELETE ITEM
========================= */

deleteBtn.addEventListener("click", () => {
  cartQuantity = 0;

  cartBadge.style.display = "none";

  cartQuantityText.textContent = 0;
  cartTotal.textContent = "$0.00";

  emptyCart.classList.remove("hidden");
  cartFilled.classList.add("hidden");
});
const lightbox = document.querySelector(".lightbox");
const lightboxImage =
  document.querySelector(".lightbox-image");

const closeLightbox =
  document.querySelector(".close-lightbox");

mainImage.addEventListener("click", () => {
  currentImageIndex = images.indexOf(mainImage.getAttribute("src"));

  lightbox.classList.remove("hidden");
  lightboxImage.src = images[currentImageIndex];
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
/* =========================
   LIGHTBOX THUMBNAILS
========================= */

const lightboxThumbs =
  document.querySelectorAll(".lightbox-thumb");

lightboxThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {

    lightboxImage.src = thumb.dataset.full;

    lightboxThumbs.forEach((item) => {
      item.classList.remove("active");
    });

    thumb.classList.add("active");
  });
});
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let currentImageIndex = 0;
nextBtn.addEventListener("click", () => {

  currentImageIndex++;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  lightboxImage.src = images[currentImageIndex];
});
prevBtn.addEventListener("click", () => {

  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  lightboxImage.src = images[currentImageIndex];
});