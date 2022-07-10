<template>
  <div class="v-cart container">
    <h1 class="v-cart__h1">Корзина</h1>
    <p class="v-cart-empty" v-if="!cart_data.length">Корзина пуста</p>
    <VCartItem
      v-for="(item, index) in cart_data"
      :key="item.id_poduct"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="total_box">
      <div class="total__name">
        GRAND TOTAL <span>{{ cartTotalCost }} руб</span>
      </div>
      <hr />
      <router-link :to="{ name: 'catalog' }" style="text-decoration: none">
        <div class="total_button">Back to catalog</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import VCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";
export default {
  components: { VCartItem },
  name: "v-cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      return this.cart_data.reduce(
        (result, item) => result + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang='scss'>
.v-cart {
  padding-top: 40px;
  &__h1 {
    margin-bottom: 45px;
  }
}
.total_box {
  background-color: #f5f3f3;
  width: 360px;
  height: 214px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 40px 41px 42px 43px;
}
.v-cart {
  margin-bottom: 100px;
  &__total {
    right: 0;
    left: 0;
    padding: $padding * 2;
    display: flex;
    justify-content: center;
    background: rgb(154, 184, 124);
    color: rgb(12, 12, 12);
    font-size: 20px;
  }
  .total__name {
    margin-right: $margin * 2;
  }
}
.total_box hr {
  margin-top: 22px;
  margin-bottom: 17px;
}
.v-cart-empty {
  display: block;
  padding: 50px;
  margin-top: 25px;
  font-size: 18px;
  background: #f5f3f3;
  text-transform: uppercase;
}
.total_button {
  width: 273px;
  height: 50px;
  border: solid 1px #f16d7f;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-weight: bold;
  text-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  color: #fff;
  background-color: #f16d7f;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

.total_button:hover {
  color: #f16d7f;
  background-color: #fff;
}
.total_box {
  background-color: #f5f3f3;
  width: 360px;
  height: 214px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 40px 41px 42px 43px;
}
.total_box span {
  padding-left: 15px;
}
.total__name {
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  color: #222222;
}
.total__name span {
  color: #f16d7f;
}
</style>