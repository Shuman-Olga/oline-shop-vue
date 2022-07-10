<template>
  <div class="v-catalog-item">
    <VPopup
      v-if="isInfoPopupvisible"
      @closePopup="closeInfoPopup"
      rightBtnTitle="Add to CART"
      :popupTitle="product_data.product_name"
      @rightBtnAction="addToCart"
    >
      <img
        class="v-catalog-item__img"
        :src="require('../assets/img/' + product_data.image)"
        alt="logo"
      />
      <div>
        <p class="v-catalog-item__name">{{ product_data.product_name }}</p>
        <p class="v-catalog-item__text">{{ product_data.discription }}</p>
        <p class="v-catalog-item__category">{{ product_data.category }}</p>
        <p class="v-catalog-item__price">{{ product_data.price }} руб.</p>
      </div>
    </VPopup>

    <img
      class="v-catalog-item__img"
      :src="require('../assets/img/' + product_data.image)"
      alt="logo"
    />
    <p class="v-catalog-item__name">{{ product_data.product_name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }} руб.</p>
    <button class="v-catalog-item_add_to_cart_btn btn" @click="addToCart">
      <img src="../assets/img/Forma_1.svg" alt="cart_img" class="add-img" />Add
      to card
    </button>
    <button class="v-catalog-item__moree" @click="showPopupInfo">
      SHOW MORE...
    </button>
  </div>
</template>

<script>
import VPopup from "./v-popup";
export default {
  components: { VPopup },
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isInfoPopupvisible: false,
    };
  },
  computed: {},
  methods: {
    showPopupInfo() {
      this.isInfoPopupvisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupvisible = false;
    },
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
};
</script>

<style lang="scss">
.v-catalog-item-moree {
  padding: 10px;
}
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  position: relative;
  text-align: left;

  &__name {
    text-transform: uppercase;
    font-size: 13px;
    margin: 19px auto 17px 15px;
  }
  &__price {
    margin-left: 16px;
    margin-bottom: 21px;
    font-size: 16px;
    font-weight: bold;
    color: #f16d7f;
  }
  &__text,
  &__category {
    font-size: 13px;
    margin: 19px auto 17px 15px;
  }
  &__moree {
    padding: 15px;
    margin-left: 50%;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
    border: 0;
  }
  &__moree:hover {
    color: #f16d7f;
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
.v-catalog-item_add_to_cart_btn {
  position: absolute;
  top: 120px;
  margin-left: 60px;
  display: none;
  background: none;
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

