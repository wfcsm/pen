<template>
  <div class="p-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
function validator(value) {
  let keys = Object.keys(value);
  keys.forEach(key => {
    if (["span", "offset"].includes(key) ) {
      return false;
    }
  });
  return true;
}
export default {
  name: "PCol",
  props: {
    span: {
      type: [Number, String],
      default: 24
    },
    offset: {
      type: [Number, String]
    },
    xs: {
      type: Object,
      validator:validator
    },
    sm: {
      type: Object,
      validator: validator
    },
    md: {
      type: Object,
      validator: validator
    },
    lg: {
      type: Object,
      validator: validator
    },
    xl: {
      type: Object,
      validator: validator
    }
  },
  computed: {
    colClass() {
      let { span, offset, sm, md, lg, xl } = this;
      let smClass=[];
      let mdClass=[];
      let lgClass=[];
      let xlClass=[];
     
      if(sm){
           smClass=[(sm.span &&`col-sm-span-${sm.span}`),(sm.offset && `col-sm-offset-${sm.offset}`)]
      }
      if(md){
           mdClass=[(md.span && `col-md-span-${md.span}`),(md.offset &&`col-md-offset-${md.offset}`)]
      }
      if(lg){
           lgClass=[(lg.span && `col-lg-span-${lg.span}`),(lg.offset && `col-lg-offset-${lg.offset}`)]
      }
      if(xl){
           xlClass=[(xl.span && `col-xl-span-${xl.span}`),(xl.offset && `col-xl-offset-${xl.offset}`)]
      }
      return [
        `col-xs-span-${span}`,
        `col-xs-offset-${offset}`,
        ...smClass,
        ...mdClass,
         ...lgClass,
         ...xlClass,
      ];
    },
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  mounted(){
      console.log(this.colClass)
  }
};
</script>

<style lang="scss" scoped>
.p-col {
  @for $n from 1 through 24 {
    &.col-xs-span-#{$n} {
      width: ($n/24) * 100%;
    }
  }

  @for $n from 1 through 24 {
    &.col-xs-offset-#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }

  // xs
  //   @media (max-width: 767px) {
  //     @for $n from 1 through 24 {
  //       &.col-xs-#{$n} {
  //         width: ($n/24) * 100%;
  //       }
  //     }
  //     @for $n from 1 through 24 {
  //       &.col-xs-#{$n} {
  //         margin-left: ($n/24) * 100%;
  //       }
  //     }
  //   }
  // sm
  @media (min-width: 768px) and (max-width: 991px) {
    @for $n from 1 through 24 {
      &.col-sm-span-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.col-sm-offset-#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  // md
  @media (min-width: 992px) and (max-width: 1199px) {
    @for $n from 1 through 24 {
      &.col-md-span-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.col-md-offset-#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  // lg
  @media (min-width: 1200px) and (max-width: 1919px) {
    @for $n from 1 through 24 {
      &.col-lg-span-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.col-lg-offset-#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  // xl
  @media (min-width: 1920px) {
    @for $n from 1 through 24 {
      &.col-xl-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.col-xl-#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>