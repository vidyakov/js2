const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject('Error');
        } else {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();
  });
};

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    // this._fetchProducts();
    this._getProducts()
        .then(data => {
          this.goods = [...data];
          this.render();
        });
  }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        });
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class Basket {
  constructor(goods=[]) {
    this.goodsList = goods;
  }

  amount() {
    let sum = 0;
    for (let good of this.goodsList) {
      sum += good.price;
    }
    return sum;
  }

  numberOfGoods() {
    return this.goodsList.length
  }

  addToBasket(good) {
    this.goodsList += good
  }

  removeFromBasket(good) {
    this.goodsList.remove(good)
  }

  getGoods() {
    return this.goodsList
  }

  render() {}
}

const list = new ProductList();
const basket = new Basket();
