<template>
  <div class="v-product-page container">
    <img
      class="v-product-page__img"
      :src="require('../assets/img/' + product.image)"
      alt="logo"
    />
    <p class="v-product-page__name">{{ product.product_name }}</p>
    <p class="v-product-page__disc">{{ product.discription }}</p>
    <p class="v-product-page__price">{{ product.price }} руб.</p>
    <!-- <button class="v-product-page-item_add_to_cart_btn btn" @click="addToCart">
      <img src="../assets/img/Forma_1.svg" alt="cart_img" class="add-img" />Add
      to card
    </button> -->
    <router-link :to="{ name: 'catalog' }">
      <button class="v-catalog-item-back">return to catalog</button>
    </router-link>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "v-product-page",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    product() {
      let result = {};
      let vm = this;
      this.PRODUCTS.map(function (item) {
        if (item.id_product === vm.$route.query.product) {
          result = item;
          console.log(result);
        }
      });
      return result;
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.v-product-page {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  text-align: center;
  display: flex;
  align-items: center;

  &__name {
    text-transform: uppercase;
    font-size: 13px;
    margin: 19px auto 17px 15px;
  }
  &__disc {
    font-size: 13px;
    margin: 19px auto 17px 15px;
  }
  &__price {
    font-size: 16px;
    font-weight: bold;
    color: #f16d7f;
    margin: 19px auto 17px 15px;
  }
}
.v-catalog-item:hover .v-catalog-item_add_to_cart_btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.v-catalog-item:hover {
  -webkit-box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
}

.v-catalog-item:hover img {
  -webkit-filter: brightness(50%);
  filter: brightness(50%);
}
.v-product-page-item_add_to_cart_btn {
  top: 120px;
  margin-left: 60px;
  background: none;
  border: 1px solid #020000;
  padding: 8px 12px;
  color: #000000;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.v-catalog-item_add_to_cart_btn:hover {
  -webkit-box-shadow: 0 0 10px #fff;
  box-shadow: 0 0 10px #fff;
}
.v-catalog-item:hover .add-img {
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
}
.add-img {
  margin-right: 8px;
}
</style>

