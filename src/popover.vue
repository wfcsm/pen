<template>
  <div class="popover" ref="popover" @click="onClick">
    <div class="contentWrapper" v-if="show" ref="contentWrapper">
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
  data() {
    return {
      show: false
    };
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
      this.$refs.contentWrapper.style.left = `${left + window.screenX}px`;
      this.$refs.contentWrapper.style.top = `${top + window.screenY}px`;
    },
    close() {
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
        if (this.show ) {
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
  transform: translateY(-100%);
}
</style>

