<template>
  <div class="collapse-item"  ref="collapseItem">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" :class="{[`openContent`]:open}" ref="content" v-show="open">
       <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCollapseItem",
  props: {
    title: {
      type: String
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      open: false
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", names => {
      if (names.indexOf(this.name) >= 0) {
        this.open = true;
      } else {
        this.open = false;
      }
    });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>


.collapse-item {
  > .title {
    height: 48px;
    line-height: 48px;
    width: 820px;
    color: #303133;
    cursor: pointer;
    font-size: 13px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }
  &:not(:first-child){
      margin-top:-1px;
  }
  >.content{
      width: 820px;
    //   animation: show 10s 0.5 linear;
     
  }
}
</style>

