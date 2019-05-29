<template>
  <div class="p-toast" :class="[`toast-bg-${type}`]">{{message}}</div>
</template>

<script>
export default {
  name: "PToast",
  props: {
    message: {
      type: String
    },
    showClose: {
      type: Boolean,
      default: true
    },
    "type": {
      type: String,
      default: "info"
    }
  },
  mounted() {
    this.autoClose();
  },
  methods: {
    autoClose() {
      if (this.showClose) {
        setTimeout(() => {
          this.closeToast();
        }, 3000);
      }
    },
    closeToast() {
      this.$el.remove();
      this.$destroy();
    }
  }
};
</script>

<style lang="scss" scoped>
%info-bg{
    background-color:#82848a;
    color: #66696e;
}
%success-bg{
    background-color: #5daf34;
    color:#478826;
}
%warning-bg{
    background-color:#cf9236;
    color: #973a3a;
}
%error-bg{
    background-color: #dd6161;
    color:#b95252;
}
@mixin a($arg){
    @extend %#{$arg}-bg
}
.p-toast {
  border: 1px solid #ebeef5;
  min-width: 380px;
  border-radius: 4px;
  position: fixed;
  left: 50%;
  top: 20px;
  background-color: red;
  transform: translateX(-50%);
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  border: none;
  @each $type in  info, success, warning, error {
    &.toast-bg-#{$type} {
      @include a($type)
    }
  }
}
// .el-message {
//     min-width: 380px;
//     box-sizing: border-box;
//     border-radius: 4px;
//     border: 1px solid #ebeef5;
//     position: fixed;
//     left: 50%;
//     top: 20px;
//     transform: translateX(-50%);
//     background-color: #edf2fc;
//     transition: opacity .3s,transform .4s;
//     overflow: hidden;
//     padding: 15px 15px 15px 20px;
//     display: flex;
//     align-items: center;
// }
</style>


