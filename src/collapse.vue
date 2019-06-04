<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "PCollapse",
  props: {
    selected: {
      type: Array
    },
    single: {
      type: Boolean,
      default: false
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
    let selectedCopy = JSON.parse(JSON.stringify(this.selected));
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:addSelected", name => {
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
    this.eventBus.$on("update:removeSelected", name => {
      selectedCopy.splice(selectedCopy.indexOf(name), 1);
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
  }
};
</script>

<style lang="scss" scoped>
.collapse {
  display: inline-block;
  border: 1px solid #ebebeb;
  background-color: #fff;
  border-radius: 3px;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
  }
}
</style>

