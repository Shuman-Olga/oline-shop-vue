<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__img"
      :src="require('../assets/img/' + cart_item_data.image)"
      alt=""
    />
    <div class="v-cart-item-info">
      <p>{{ cart_item_data.product_name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.id_product }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <span>
        <span class="quantity__btn" @click="decrementitem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity__btn" @click="incrementitem">+</span>
      </span>
    </div>
    <span class="material-icons delete-btn" @click="deleteFromCart">
      delete_outline
    </span>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    decrementitem() {
      this.$emit("decrement");
    },
    incrementitem() {
      this.$emit("increment");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style lang='scss'>
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__img {
    max-width: 50px;
  }
  .quantity__btn,
  .delete-btn {
    cursor: pointer;
  }
}
</style>