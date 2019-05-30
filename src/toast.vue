<template>
  <div class="p-toast" :class="[`toast-bg-${type}`,`toast-${postion}`]">
      <div>{{message}}</div>
      <div v-if="isClose" class="close" @click="closeButton">
        <p-icon name="close"></p-icon>
      </div>
  </div>
</template>

<script>
import PIcon from "./icon"
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
    },
    isClose:{
      type:Boolean,
      default:false
    },
    postion:{
      type:String,
      default:"top"
    },
    callback:{
      type:Function,
      default:undefined
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
    },
    closeButton(){
      this.closeToast()
      if(this.callback!==undefined && typeof this.callback ==='function' ){
          this.callback();
      }
      
    }

  },
  components:{
    PIcon
  }
};
</script>

<style lang="scss" scoped>
%info-bg{
    background-color:#a6a9ad;
    color: #4f5153;
}
%success-bg{
    color: #33611b;
    background-color:#85ce61;
}
%warning-bg{
    background-color:#ebb563;
    color: #7c5821;
}
%error-bg{
    background-color: #f78989;
    color:#923f3f;
}
@mixin a($arg){
    @extend %#{$arg}-bg
}

@keyframes show{
  0%{
    opacity: 0;
    transform: translateY(0deg);
  }
  100%{
   opacity: 1;
    transform: translateY(180deg);
  }
}

.p-toast {
  border: 1px solid #ebeef5;
  min-width: 380px;
  border-radius: 4px;
  position: fixed;
  left: 50%; 
  transform: translateX(-50%);
  transform-style: preserve-3d;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  border: none;
  justify-content: space-between;
  .close{
     cursor: pointer;
  }
  &.toast-top{
    top: 20px;
    
  }
  &.toast-center{
     top:50%;
     transform: translateX(-50%) translateY(50%);
  }
  &.toast-bottom{
    bottom: 20px;
    animation: show .8s ;
  }
  @each $type in  info, success, warning, error {
    &.toast-bg-#{$type} {
      @include a($type)
    }
  }
}
</style>


