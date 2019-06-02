<template>
  <div class="popover" ref="popover" >
    <div
      class="contentWrapper"
      :class="{[`position-${position}`]:true}"
      v-if="show"
      ref="contentWrapper"
    >
      <slot name="content"></slot>
    </div>
    <div class="triggerWrapper" ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PPopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger:{
      type:String,
      default:"click",
      validator(value){
        return ['click','hover'].indexOf(value)>=0;
      }
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted(){
    if(this.trigger==="click"){
      this.$refs.popover.addEventListener('click',this.onClick)
    }else{
      this.$refs.popover.addEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  destroyed(){
    if(this.trigger==="click"){
      this.$refs.popover.removeEventListener('click',this.onClick)
    }else{
      this.$refs.popover.removeEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  computed:{
    openEvent(){
      if(this.trigger==="click"){
        return "click"
      }else{
        return "mouseenter"
      }
    },
    closeEvent(){
      if(this.trigger==="click"){
        return 'click'
      }else{
        return 'mouseleave'
      }
    }
  },
  methods: {
    positionPopover() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      let {height:height2}= this.$refs.contentWrapper.getBoundingClientRect();

      let x={
          top:{
            left:left + window.scrollX,
            top:top + window.scrollY
          },
          bottom:{
            left:left + window.scrollX,
            top:top + window.scrollY+height
          },
          left:{
            left:left + window.scrollX,
            top:top + window.scrollY+(height-height2)/2
          },
          right:{
            left:left + window.scrollX+width,
            top:top + window.scrollY+(height-height2)/2
          }
      }
        this.$refs.contentWrapper.style.left=x[this.position].left+'px';
        this.$refs.contentWrapper.style.top=x[this.position].top+'px';
    },
    close() {
      console.log("关闭");
      this.show = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClickDocument(e) {
      if (this.$refs.contentWrapper.contains(e.target)) {
        return;
      } else {
        this.close();
      }
    },
    open() {
      this.show = true;
      setTimeout(() => {
        this.positionPopover();
        document.addEventListener("click", this.onClickDocument);
      }, 0);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        //点击按钮
        if (this.show) {
          this.close();
        } else {
          //如果不是显现的
          this.open();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
}
.contentWrapper {
  position: absolute;
  border: 1px solid red;
  padding: 10px 20px;
  font-size: 14px;
  max-width: 200px;
  border: 1px solid #ebeef5;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  filter:drop-shadow(0 2px 12px 0 rgba(0, 0, 0, 0.1));
  word-break: break-all;
  border-radius: 4px;
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
      top: 100%;
      border-bottom: none;
    }
    &::before {
      border-top-color: rgba(0, 0, 0, 0.1);
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
      bottom:100%;
      border-top: none;
    }
    &::before {
      border-bottom-color: rgba(0, 0, 0, 0.1);
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%) ;
    margin-left: -10px;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
      left: 100%;
      top:50%;
      transform: translateY(-50%);
      border-right: none;
    }
    &::before {
      border-left-color: rgba(0, 0, 0, 0.1);
      // left: 100%;
    
    }
    &::after {
      border-left-color: white;
      left:calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
      right: 100%;
      top:50%;
      transform: translateY(-50%);
      border-left: none;
    }
    &::before {
      border-right-color: rgba(0, 0, 0, 0.1);    
    }
    &::after {
      border-right-color: white;
      right:calc(100% - 1px);
    }
  }
}
</style>

