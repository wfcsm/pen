<template>
  <div class="basdas">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PButtonGroup"
};
</script>

<style lang="scss" scoped>
.basdas {
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
