<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PButtonGroup",
  mounted(){
    for(let node of this.$el.children){
  
        let name = node.tagName.toLowerCase();
        if(name !== "button"){
            console.error(`p-button-group内部应该使用button,但却检测到${name}`);
        }
    }
  }


};
</script>

<style lang="scss" scoped>
.button-group {
  display: inline-flex;
  // border: 1px saddlebrown solid;
  > .p-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:not(:first-child) {
      border-left-color: hsla(0, 0%, 100%, 0.5);
      margin-left: -1px
    }
  }
}
</style>
