<template>
  <div class="tabs" >
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
      type: String,
      required: true
    },
    type:{
      type:String,
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
    

    let error=true
    //first loading line
    this.$children.forEach(vm => {

      if (vm.pname === this.selected) {
        error=false;
        let { width } = vm.$el.getBoundingClientRect();
        width = width - 40;
        let y = vm.$el.offsetLeft;
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${y}px`;
      }
    });
    if(error){
        throw error("请检查p-tabs-pane的name和selected的值")
    }
    //onclick line
    this.eventBus.$on("update:selected", (name, width, y) => {
        console.log(name)
      this.$children.forEach(childVm => {
        if (
          childVm.$options.name === "PTabsPane" &&
          childVm.pname === this.selected
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


