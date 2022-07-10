<template>
  <div class="v-main-page-plus">
    <section class="wrp_plus">
      <div class="box_mini_plus container">
        <div class="war_mini_prod">
          <div class="mini_plus">
            <img src="../assets/img/Forma_1-3.png" alt="logo" />
          </div>
          <h4>Free Delivery</h4>
          <p class="par_mini_prod">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="war_mini_prod">
          <div class="mini_plus">
            <img src="../assets/img/Forma_1-2.png" alt="logo" />
          </div>
          <h4>Sales &amp; discounts</h4>
          <p class="par_mini_prod">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="war_mini_prod">
          <div class="mini_plus">
            <img src="../assets/img/Forma_1.png" alt="logo" />
          </div>
          <h4>Quality assurance</h4>
          <p class="par_mini_prod">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "v-main-page-plus",
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
.wrp_plus {
  height: 341px;
  background-color: #222224;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.box_plus {
  width: 767px;
  padding-top: 146px;
  padding-left: 39px;
}

.box_mini_plus {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

h4 {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-align: left;
  color: #fbfbfb;
  text-align: center;
  margin-top: 29px;
}

.par_mini_prod {
  font-weight: 300;
  color: #fbfbfb;
  margin-top: 17px;
  text-align: center;
}

.war_mini_prod {
  width: 219px;
}
</style>