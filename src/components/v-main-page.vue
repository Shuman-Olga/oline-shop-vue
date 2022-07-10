<template>
  <div class="v-main-page">
    <div class="wrap_box_img">
      <div class="box_img container">
        <div class="wpapper_box_img">
          <p class="par_top">
            THE BRAND <br />
            <span class="par_left"> OF LUXERIOUS</span>
            <span class="par_right"> FASHION</span>
          </p>
        </div>
      </div>
    </div>
    <div class="wrapper_selection container">
      <div class="blok_mini long">
        <router-link :to="{ name: 'catalog' }" style="text-decoration: none">
          <div class="block_long">
            <h3>
              LUXIROUS &amp; trendy <br /><span class="span_selection"
                >GO TO CATALOG</span
              >
            </h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "v-main-page",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
.wrap_box_img {
  background-color: #f1e4e6;
  min-height: 764px;
}
.wpapper_box_img {
  text-align: left;
  margin-left: 50%;
}
.box_img {
  background-position: -50%;
  background-repeat: no-repeat;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  background-size: contain;
}

.par_top {
  border-left: 12px solid #f16d7f;
  padding-left: 12px;
  font-weight: 900;
  color: #222222;
  font-size: 48px;
  line-height: 48px;
}
.par_left {
  font-weight: 600;
  font-size: 31px;
  letter-spacing: 0.5px;
}

.par_right {
  font-weight: 600;
  font-size: 31px;
  color: #f16d7f;
}
.wrapper_selection {
  margin-top: 65px;
}

.selection_sale {
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.blok_mini {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 31.5%;
}
.long {
  width: 100%;
}
.block_long {
  min-height: 180px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  background-repeat: no-repeat;
  text-decoration: none;
  margin-top: 30px;
  margin-bottom: 65px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.block_long {
  background-position: top;
}
.block_long h3 {
  padding: 10px 15px 5px 15px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.span_selection {
  font-size: 24px;
  letter-spacing: 0.75px;
  line-height: 35px;
  color: #f16d7f;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
}
.block_long:hover h3 {
  background-color: #fff;
  color: #222;
}
</style>