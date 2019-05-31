<template>
  <div class="tabs">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "PTabs",
  props: {
    selected: {
      type: String
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    //first loading line
    this.$children.forEach(vm => {
      if (vm.name === this.selected) {
        let { width } = vm.$el.getBoundingClientRect();
        width = width - 40;
        let y = vm.$el.offsetLeft;
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${y}px`;
      }
    });
    //onclick line
    this.eventBus.$on("update:selected", (name, width, y) => {
      this.$children.forEach(childVm => {
        if (
          childVm.$options.name === "PTabsPane" &&
          childVm.name === this.selected
        ) {
          this.$refs.line.style.width = `${width}px`;
          this.$refs.line.style. left= `${y}px`;
        }
      });
    });
    this.eventBus.$emit("update:selected", this.selected);
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  position: relative;
  border-bottom: 2px #ddd solid;
  & > .line {
    position: absolute;
    bottom: -1px;
    border-top: 2px solid #409eff;
    transition: all 350ms;
  }
}
</style>


