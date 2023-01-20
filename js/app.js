const menuProfile = document.querySelector('.profile');
const profileMenu = document.querySelector('.profile-menu');
const carMenu = document.querySelector('.car_empy');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.card-container');

menuProfile.addEventListener('click', showProfileMenu);
carMenu.addEventListener('click', showProductoCarMenu);

function showProfileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  profileMenu.classList.toggle('inactive');
  console.log('Menu profile');
}

function showProductoCarMenu() {
  const isProfileMenuClosed = profileMenu.classList.contains('inactive');
  if (!isProfileMenuClosed) {
    profileMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
  console.log('Menu carrito');
}

const productList = [];

productList.push({
  name: 'Spiderman ',
  price: '38.000',
  sizes: 'S, M, L, XL',
  brand: 'DC comic',
  image: '/assets/products/spider.png',
});

productList.push({
  name: 'Capitan Marvel ',
  price: '38.000',
  sizes: 'S, M, L, XL',
  brand: 'DC comic',
  image: '/assets/products/cap_marvel.png',
});

productList.push({
  name: 'Camista Airoman',
  price: '35.000',
  brand: 'DC comic',
  image: '/assets/products/iroman.png',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productBrand = document.createElement('p');
    productBrand.innerText = product.brand;
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productBrand);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './assets/icons/icon_add_car.png');

    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);

/* function renderProducts(add) {
    for (product of add) {
      const cardsProducts = `
      <div class="card-container">
        <div class="products-card">
          <img src="${product.image}" alt="Camisa_estampada"
                  class="product_img"/>
          <div class="product-info">
            <div>
              <p>${product.price}</p>
              <p>${product.sizes}</p>
              <p>${product.brand}</p>
            </div>
            <figure>
                <img src="./assets/icons/icon_add_car.png" alt="car_shipping" />
            </figure>
          </div>
        </div>
      </div> 
    `;
  
      const cardsContainer = document.querySelector('.mans-container');
      cardsContainer.innerHTML += cardsProducts;
  
      const productImage = product.image;
      productImage.setA
    }
  }
  
  renderProducts(productList); */
