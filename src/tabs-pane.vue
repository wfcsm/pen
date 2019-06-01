<template>
  <div class="p-tabs-pane">
    <div class="head" :class="itemStyle" @click="onClick">{{label}}</div>
    <div class="body" v-show="active">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PTabsPane",
  props: {
    label: {
      type: String
    },
    pname: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    itemStyle() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  inject: ["eventBus"],
  methods: {
    onClick() {
      // let {width}
      let y = this.$el.offsetLeft; //相对于父容器y偏移量
      let { width } = this.$el.getBoundingClientRect();
      width = width - 40;
      this.eventBus.$emit("update:selected", this.pname, width, y);
    }
  },
  mounted() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", vm => {
        if (vm === this.pname) {
          this.active = true;
        } else {
          this.active = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$hover-active-color: #409eff;
$disabled-color: #ddd;
.p-tabs-pane {
  & > .head {
    padding: 10px 40px 10px 0;
    height: 40px;
    font-size: 14px;
    color: #303133;
    cursor: pointer;
    &:hover {
      color: $hover-active-color;
    }
  }

  & > .active {
    color: $hover-active-color;
  }
  & > .disabled {
    //  cursor: not-allowed;
    color: $disabled-color;
    pointer-events: none;
    &:hover {
      color: $disabled-color;
    }
  }
  & > .body {
    padding-top: 10px;
    position: absolute;
    left: 0;
  }
}
</style>


