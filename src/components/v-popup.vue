<template>
  <div class="popup-wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>
          <i class="material-icons" @click="closePopup">close</i>
        </span>
      </div>
      <div class="v-popup__title">
        <span>{{ popupTitle }}</span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="submit_btn" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    popupTitle: {
      type: String,
      default: "Popop name",
    },
    rightBtnTitle: {
      type: String,
      default: "Ok",
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup_wrapper"]) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style lang="scss">
.popup-wrapper {
  background: rgba($color: #2c2b2b, $alpha: 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup:hover img {
  -webkit-filter: brightness(100%);
  filter: brightness(100%);
}
.v-popup {
  padding: 16px;
  position: fixed;
  top: 150px;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 8px 0 #e8e8e8;
  z-index: 4;
  &__header,
  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 15px 10px 15px 0;
  }
  &__title {
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    padding: 15px;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submit_btn {
    padding: 10px;
    color: rgb(255, 255, 255);
    border: 1px solid #ffffff;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
    background: #f16d7f;
  }
  .submit_btn:hover {
    color: rgb(0, 0, 0);
    border: 1px solid #000000;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
    background: #ffffff;
  }
}
</style>