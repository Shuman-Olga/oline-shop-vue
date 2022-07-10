<template>
  <div class="v-header">
    <div class="header-wrapper container">
      <router-link :to="{ name: 'mainPage' }" style="text-decoration: none">
        <div class="logo-wrapper">
          <img src="../assets/img/Group_2.png" class="logo" /> BRAN
          <span class="ts_2">D</span>
        </div>
      </router-link>
      <div class="search-fieled">
        <input type="text" v-model="searchValue" />
        <span class="material-icons" @click="search(searchValue)">
          search
        </span>
      </div>
      <div class="v-catalog-link_to_cart" @click="showPopupInfo">
        <span class="material-icons"> shopping_cart </span>
        <div class="basket_nomber">{{ CART.length }}</div>
      </div>
<VAccount></VAccount>
      <VPopup
        v-if="isInfoPopupvisible"
        @closePopup="closeInfoPopup"
        rightBtnTitle="PAYMENT"
        popupTitle="My CART"
      >
        <div class="v-hader-cart-wrapper">
          <div
            class="v-hader-cart-item"
            v-for="item in CART"
            :key="item.id_product"
          >
            <img
              class="v-catalog-item__img popup-img"
              :src="require('../assets/img/' + item.image)"
              alt="logo"
            />

            <p class="v-hader-cart-item__name">
              {{ item.product_name }}
            </p>
            <p class="v-hader-cart-item__name">
              {{ item.quantity }}
            </p>
            <p class="v-hader-cart-item__price">{{ item.price }} руб.</p>
            <!-- <span class="material-icons delete-btn" @click="deleteCartAction">
              delete_outline
            </span> -->
          </div>
          <router-link
            :to="{ name: 'cart', params: { cart_data: CART } }"
            style="text-decoration: none"
          >
            <div class="v-catalog-go_to_cart-wrap">
              <button class="v-catalog-go_to_cart" @click="closeInfoPopup">
                Go to CART
              </button>
            </div>
          </router-link>
        </div>
      </VPopup>
    </div>
  </div>
</template>

<script>
import VAccount from './v-account'
import { mapActions, mapGetters } from "vuex";
import VPopup from "./v-popup";

export default {
  components: {
    VAccount, VPopup },
  name: "v-header",
  props: {},

  data() {
    return {
      searchValue: "",
      isInfoPopupvisible: false,
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE", "CART"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE_TO_VUEX", "ADD_TO_CART"]),

    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      this.$router.push("/catalog");
    },
    showPopupInfo() {
      this.isInfoPopupvisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupvisible = false;
    },
    // deleteCartAction(index) {
    //   this.DELETE_FROM_CART(index);
    // },
  },
};
</script>

<style lang="scss" >
.popup-img {
  width: 50px;
}
.v-header {
  align-items: center;
  padding: 16px;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.17);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.17);
  border: 1px solid #ececec;
  background: #ffff;
}
.header-wrapper {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.name-margin {
  margin: 0;
}

// align-items: center;

.v-hader-cart-wrapper {
  width: 100%;
}
.search-fieled {
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 279px;
    height: 38px;
    border: solid 1px #e6e6e6;
    background-color: #ffffff;
    padding-left: 15px;
    font-weight: 300;
    line-height: 2.29;
    letter-spacing: 0.35px;
    text-align: left;
    color: #a4a4a4;
  }
}
.v-hader-cart-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__name {
    text-transform: uppercase;
    font-size: 13px;
  }
  &__price {
    font-size: 16px;
    font-weight: bold;
    color: #f16d7f;
  }
}
.search_btn {
  width: 38px;
  height: 38px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.material-icons {
  color: #a4a4a4;
  font-size: 30px;
}
.basket_nomber {
  position: absolute;
  background-color: #f16d7f;
  width: 17px;
  margin-top: -40px;
  margin-left: 20px;
  border: 1px solid #f16d7f;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  text-align: center;
}
.v-catalog-link_to_cart {
  cursor: pointer;
}
.logo-wrapper {
  margin-right: 37px;
  font-size: 27px;
  font-weight: 300;
  letter-spacing: 0.68px;
  text-align: center;
  color: #222222;
  text-decoration: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 32px;
  span {
    font-size: 27px;
    font-weight: 700;
    color: #f16d7f;
  }
  .logo {
    margin-right: 15px;
  }
}
.v-catalog-go_to_cart {
  padding: 10px;
  color: rgb(0, 0, 0);
  border: 1px solid #a4a4a4;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
  background: #ffffff;
  text-decoration: none;
}
.v-catalog-go_to_cart-wrap {
  justify-content: flex-end;
  display: flex;
  text-decoration: none;
  margin-right: 10px;
}
.v-catalog-go_to_cart:hover {
  background: #f16d7f;
  border: 1px solid #ffffff;
  color: rgb(255, 255, 255);
}
</style>