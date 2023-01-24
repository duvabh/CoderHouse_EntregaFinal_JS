const menuProfile = document.querySelector(".profile");
const profileMenu = document.querySelector(".profile-menu");
const carMenu = document.querySelector(".car_empy");
const aside = document.querySelector(".product-detail");

const camisas = [
  {
    id: 1,
    name: "Batman",
    price: 250.0,
    size: "S, L, M, XL",
    image: "/assets/products/black_batman.png",
  },
  {
    id: 2,
    name: "Batman",
    price: 250.0,
    size: "S, L, M, XL",
    image: "/assets/products/black_batman.png",
  },
  {
    id: 3,
    name: "Batman",
    price: 250.0,
    size: "S, L, M, XL",
    image: "/assets/products/black_batman.png",
  },
  {
    id: 4,
    name: "Batman",
    price: 250.0,
    size: "S, L, M, XL",
    image: "/assets/products/black_batman.png",
  },
  {
    id: 5,
    name: "Batman",
    price: 250.0,
    size: "S, L, M, XL",
    image: "/assets/products/black_batman.png",
  },
  {
    id: 6,
    name: "Batman",
    price: 250.0,
    size: "S, L, M, XL",
    image: "/assets/products/black_batman.png",
  },
];

let carrito = [];

menuProfile.addEventListener("click", showProfileMenu);
carMenu.addEventListener("click", showProductoCarMenu);

function showProfileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  profileMenu.classList.toggle("inactive");
  console.log("Menu profile");
}

function showProductoCarMenu() {
  const isProfileMenuClosed = profileMenu.classList.contains("inactive");
  if (!isProfileMenuClosed) {
    profileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
  console.log("Menu carrito");
}
