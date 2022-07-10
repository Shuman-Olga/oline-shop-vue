<template>
  <div class="v-catalog">
    <div class="wraper_box_img top">
      <div class="box_img container">
        <div class="wpapper_box_img__left">
          <p class="par_top">CATALOG</p>
        </div>
      </div>
    </div>
    <div class="filters container">
      <VSelect
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
      />
      <!-- <div class="range-size-wrapper">
        <fieldset class="choice_mini">
          <legend>Size</legend>
          <div></div>

          <input type="checkbox" id="size" />
          <label for="size" class="size_label">XXS</label>

          <input type="checkbox" id="size" />
          <label for="size" class="size_label">xs</label>

          <input type="checkbox" id="size" value=" yes" />
          <label for="size" class="size_label">s</label>

          <input type="checkbox" id="size" value=" yes" />
          <label for="size" class="size_label">m</label>

          <input type="checkbox" id="size" value=" yes" />
          <label for="size" class="size_label">l</label>

          <input type="checkbox" id="size" value=" yes" />
          <label for="size" class="size_label">xl</label>

          <input type="checkbox" id="size" value=" yes" />
          <label for="size" class="size_label">xxl</label>
        </fieldset>
      </div> -->
      <div class="range-price-wrap">
        <div class="range-slider">
          <input
            type="range"
            min="0"
            max="10000"
            step="10"
            v-model.number="minPrice"
            @change="setRangesSlider"
            style="background: red"
          />
          <input
            type="range"
            min="0"
            max="10000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangesSlider"
          />
        </div>
        <div class="range-values">
          <p>{{ minPrice }}</p>
          <p>{{ maxPrice }}</p>
        </div>
      </div>
    </div>

    <div class="v-catalog__list container">
      <VCatalogItem
        v-for="product in filteredProducts"
        :key="product.id_product"
        :product_data="product"
        @addToCart="addToCart"
        @productClick="productClick"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters } from "vuex";
import VSelect from "./v-select";

export default {
  components: {
    VSelect,
    VCatalogItem,
  },
  name: "v-catalog",
  props: {},
  data() {
    return {
      categories: [
        { name: "Все", value: "all" },
        { name: "Мужчины", value: "м" },
        { name: "Женщины", value: "ж" },
      ],
      selected: "Все",
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "SEARCH_VALUE"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    productClick(id_product) {
      this.$router.push({ name: "product", query: { product: id_product } });
    },
    setRangesSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected = category.name;
          return e.category === category.name;
        });
      }
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived");
        this.sortByCategories();
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    });
  },
};
</script>

<style lang="scss">
.top {
  padding-top: 40px;
  margin-bottom: 50px;
}
.wraper_box_img {
  background-color: #f8f3f4;
  height: 150px;
}
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 65px;
  }
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg,
.range-slider input[type="range"] {
  text-transform: uppercase;
  position: absolute;
  left: 0;
  bottom: 0;
  appearance: none;
  border-radius: 10px/100%;
  height: 5px;
  border: 1px solid #ef5b70;
  background-color: #ef5b70;
}
input[type="range"]::-webkit-slider-thumb {
  text-transform: uppercase;
  z-index: 1;
  position: relative;
  top: 2px;
  margin-top: -7px;
  appearance: none;
  background: #ef5b70;
  border: 1px solid #ef5b70;
  border-radius: 15px/100%;
  cursor: pointer;
  width: 15px;
  height: 15px;
}
.range-values {
  width: 95%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.range-price-wrap {
  width: 200px;
}
</style>