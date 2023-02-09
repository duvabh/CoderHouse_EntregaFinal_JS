/* Variables o constantes */
const menuProfile = document.querySelector('.icon_profile');
const desktopMenu = document.querySelector('.desktop_menu');
const emailProfile = document.querySelector('.profile_name');
const shoppingCart = document.querySelector('.shopping_cart');
const productDetail = document.querySelector('.product_detail');
const cardContainer = document.querySelector('.card_container');

/* Evento click menu y carrito*/
menuProfile.addEventListener('click', showDesktopMenu);
emailProfile.addEventListener('click', showDesktopMenu);
shoppingCart.addEventListener('click', showCartDetails);

/* Funciones para mostrar los menus */

//Si el desktop menu esta bierto
function showDesktopMenu() {
  const isCartClosed = productDetail.classList.contains('inactive');
  if (!isCartClosed) {
    productDetail.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

//Si el carrito esta bierto
function showCartDetails() {
  const isDesktopMenu = desktopMenu.classList.contains('inactive');
  if (!isDesktopMenu) {
    desktopMenu.classList.add('inactive');
  }
  productDetail.classList.toggle('inactive');
}

//arrays de productos
const productList = [];

productList.push({
  image: '/assets/products/cap_marvel.png',
  name: 'Camisa capitan marvel',
  price: 32000,
  sizes: 'S M L XL',
  brand: 'MARVEL',
});

productList.push({
  image: '/assets/products/cap_marvel.png',
  name: 'Camisa capitan marvel',
  price: 32000,
  sizes: 'S M L XL',
  brand: 'MARVEL',
});

productList.push({
  image: '/assets/products/cap_marvel.png',
  name: 'Camisa capitan marvel',
  price: 32000,
  sizes: 'S M L XL',
  brand: 'MARVEL',
});

function renderCardProducts(addProducts) {
  for (products of addProducts) {
    const productCard = document.createElement('div');
    productCard.classList.add('product_card');

    const producntImg = document.createElement('img');
    producntImg.setAttribute('src', products.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product_info');

    const productInfoDiv = document.createElement('div');

    const producName = document.createElement('p');
    producName.innerText = products.name;
    const producPrice = document.createElement('p');
    producPrice.innerText = '$' + products.price;
    const producSize = document.createElement('p');
    producSize.innerText = products.sizes;
    const producBrand = document.createElement('p');
    producBrand.innerText = products.brand;

    productInfoDiv.appendChild(producName);
    productInfoDiv.appendChild(producPrice);
    productInfoDiv.appendChild(producSize);
    productInfoDiv.appendChild(producBrand);

    const productInfoFigure = document.createElement('figure');
    const addCart = document.createElement('img');
    addCart.setAttribute('src', '/assets/icons/icon_add_car.png');
    addCart.addEventListener('click', addCartProduct);

    productInfoFigure.appendChild(addCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(producntImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}
renderCardProducts(productList);

function addCartProduct() {
  console.log('click');
}
