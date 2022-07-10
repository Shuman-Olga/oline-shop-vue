<template>
  <div class="v-select">
    <p class="v-select__title" @click="areOpnionsVisible = !areOpnionsVisible">
      {{ selected }}
    </p>
    <div class="v-select__options" v-if="areOpnionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOpnionsVisible: false,
    };
  },
  computed: {},
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOpnionsVisible = false;
    },
    hideSelect() {
      this.areOpnionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss">
.v-select {
  position: relative;
  width: 150px;
  cursor: pointer;

  &__options {
    border: 0px solid rgb(0, 0, 0);
    position: absolute;
    background: rgb(255, 255, 255);
    right: 0;
    z-index: 1;
    width: 100%;
    text-align: left;
    line-height: 2.36;
    color: #6f6e6e;
    p:hover {
      background: rgb(255, 255, 255);
    }
  }
  &__title {
    border-left: 5px solid #ef5b70;
    padding: 11px 14px;
    margin: 0 0 5px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.43;
    text-align: left;
    color: #6f6e6e;
  }
  &__title:hover {
    color: #ef5b70;
  }
  p {
    margin: 0px;
  }
}
</style>