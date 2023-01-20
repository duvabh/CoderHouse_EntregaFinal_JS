const menuProfile = document.querySelector('.profile');
const profileMenu = document.querySelector('.profile-menu');
const carMenu = document.querySelector('.car_empy');
const aside = document.querySelector('.product-detail');
const tiendaContent = document.querySelector('#tiendaContent');
const verCarrito = document.querySelector('#verCarrito');
const modalContenedor = document.querySelector('#modal-contenedor');

const productos = [
  {
    id: 1,
    name: 'Batman',
    price: 250.0,
    size: 'S, L, M, XL',
    image: '/assets/products/black_batman.png',
  },
  {
    id: 2,
    name: 'Batman',
    price: 250.0,
    size: 'S, L, M, XL',
    image: '/assets/products/black_batman.png',
  },
  {
    id: 3,
    name: 'Batman',
    price: 250.0,
    size: 'S, L, M, XL',
    image: '/assets/products/black_batman.png',
  },
  {
    id: 4,
    name: 'Batman',
    price: 250.0,
    size: 'S, L, M, XL',
    image: '/assets/products/black_batman.png',
  },
  {
    id: 5,
    name: 'Batman',
    price: 250.0,
    size: 'S, L, M, XL',
    image: '/assets/products/black_batman.png',
  },
  {
    id: 6,
    name: 'Batman',
    price: 250.0,
    size: 'S, L, M, XL',
    image: '/assets/products/black_batman.png',
  },
];

let carrito = [];

productos.forEach((product) => {
  let content = document.createElement('div');
  content.className = 'card';
  content.innerHTML = `
  <img src="${product.image}">
  <h3>${product.name}</h3>
  <p class"price">${product.price}</p>
  `;
  tiendaContent.append(content);
  let comprar = document.createElement('button');
  comprar.innerText = 'comprar';
  comprar.className = 'comprar';

  content.append(comprar);

  comprar.addEventListener('click', () => {
    carrito.push({
      id: product.id,
      img: product.image,
      nombre: product.name,
      precio: product.price,
    });
    console.log(carrito);
  });
});

verCarrito.addEventListener('click', () => {
  modalContenedor.innerHTML = '';
  modalContenedor.style.display = 'flex';
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">carrito.</h1>
  `;
  modalContenedor.append(modalHeader);
  const modalbutton = document.createElement('h1');
  modalbutton.innerText = 'x';
  modalbutton.className = 'modal-header-button';

  modalbutton.addEventListener('click', () => {
    modalContenedor.style.display = 'none';
  });

  modalHeader.append(modalbutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement('div');
    carritoContent.className = 'modal-content';
    carritoContent.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>${product.price} $</p>
    `;

    modalContenedor.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  const totalCompra = document.createElement('div');
  totalCompra.className = 'total-content';
  totalCompra.innerHTML = `total a pagar:${total} $`;
  modalContenedor.append(totalCompra);
});
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
