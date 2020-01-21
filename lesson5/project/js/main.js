const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
    userProducts: [],
  },
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
    addProduct(product) {
      console.log(product.id_product);
    },
    filterGoods() {
      this.getJson(`${API + this.catalogUrl}`)
          .then(data => {
            this.products = [];
            for (let el of data) {
              let searchExp =  new RegExp(`^${this.searchLine}$`, "i");

              if (searchExp.test(el.product_name)) {
                this.products.push(el);
              }
            }
            console.log(this.products);
          });
      setTimeout(() => this.$destroy(), 2000)
    },
    isEmpty() {
      return this.userProducts.length === 0
    }

  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            this.products.push(el);
          }
        });

    setTimeout(() => this.$destroy(), 2000)
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
});
