'use strict';

const products = [
  {id: 1, title: 'Notebook', price: 20000, img: 'img/not_found.jpg'},
  {id: 2, title: 'Mouse', price: 1500, img: 'img/not_found.jpg'},
  {id: 3, title: 'Keyboard', price: 5000, img: 'img/not_found.jpg'},
  {id: 4, title: 'Gamepad', price: 4500, img: 'img/not_found.jpg'},
];

const renderProduct = (img, title, price) => `<div class="product-item">
            <img src="${img}" class="product-img">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;


const renderProducts = list => {
  const productList = list.map(function (product) {
    return renderProduct(product.img, product.title, product.price)
  });
  for (let i=0; i < productList.length; i++) {
    document.querySelector('.products').innerHTML += productList[i];
  }
};

renderProducts(products);
