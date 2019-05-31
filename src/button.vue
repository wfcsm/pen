<template>
  <button class="p-button" 
          :class="{[`p-button-${type}`]:true, 
                    'is-circle':circle,
                    'is-disabled':disabled}"
          :disabled="disabled"
          v-on="clickListeners">
    <p-icon v-if="icon && !loading" class="picon" :name="icon"></p-icon>
    <p-icon v-if="loading" class="loading"  name="loading"></p-icon>
    <div class="wrapper">
      <slot></slot>
    </div>
   
  </button>
</template>

<script>
import PIcon from './icon'
export default {
  name: "PenButton",
  computed:{
    show(){
      if($children){
        return true
      }
      return  false
    },
    clickListeners(){
       var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          click: function (event) {
            vm.$emit('click', event.target.value)
          }
        }
      )
    }
  },
  props: {
    type: {
      type: String,
      default: "normal"
    },
    circle:{
        type:Boolean,
        default:false
    },
    disabled:{
        type:Boolean,
        default:false
    },
    icon:{
        type:String
    },
    loading:{
        type:Boolean,
        default:false
    }


  },
  components:{
    PIcon
  }
};
</script>

<style lang="scss" scoped>
$font-color: #fff;

// 默认按钮配色
$noraml-focus-and-hover-color: #409eff;
$noraml-focus-and-hover-border-color: #c6e2ff;
$noraml-focus-and-hover-bg-color: #ecf5ff;
$noraml-active-bg-color: #3a8ee6;
$noraml-active-border-color: #3a8ee6;
// primary按钮配色
%primary-bg-color{
  background-color:#409eff;
  border-color:#409eff;
} 
%primary-focus-and-hover{
  background-color:#66b1ff;
  border-color:#66b1ff;
} 
%primary-active{
  background-color:#3a8ee6;
  border-color:#3a8ee6;
} 
// success按钮配色
%success-bg-color{
  background-color: #67c23a;
   border-color:#67c23a;
} 
%success-focus-and-hover{
  background-color: #85ce61;
   border-color:#85ce61;
}
%success-active{
  background-color:#5daf34;
  border-color:#5daf34;
} 
// info 按钮配色
%info-bg-color{
  background-color: #909399;
  border-color:#909399;
} 
%info-focus-and-hover{
  background-color: #a6a9ad;
  border-color:#a6a9ad;
} 
%info-active{
  background-color: #82848a;
  border-color:#82848a;
} 

// warning 按钮配色
%warning-bg-color{
  background-color: #e6a23c;
  border-color:#e6a23c
} 
%warning-focus-and-hover{
  background-color: #ebb563;
  border-color:#ebb563
} 
%warning-active{
  background-color: #cf9236;
  border-color:#cf9236
} 

// danger 按钮配色
%danger-bg-color{
  background-color: #f56c6c;
  border-color:#f56c6c
} 
%danger-focus-and-hover{
  background-color:#f78989;
  border-color:#f78989
} 
%danger-active{
  background-color: #dd6161;
   border-color:#dd6161
} 
@mixin set-style($arg){
  @extend %#{$arg}-bg-color;
}
@mixin set-focus-style($arg){
  @extend %#{$arg}-focus-and-hover;
}
@mixin set-active-style($arg){
   @extend %#{$arg}-active;
}

@keyframes spin{
  0%{ 
    transform: rotateZ(0deg)
  }
  100%{ 
    transform: rotateZ(360deg)
  }
}

.p-button {
  font-size: 14px;
  padding: 10px 20px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &.is-disabled{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }

  &.is-circle{
    border-radius: 20px;
  }

  @each $n in primary,success,info,warning,danger{
    &.p-button-#{$n}{
      color:$font-color;
      @include set-style($n);
      &:focus,&:hover{
        @include set-focus-style($n);
      }
      &:active{
        @include set-active-style($n);
      }
    }
  }

  &.p-button-normal {
    background: $font-color;
    color: #606266;

    &:focus,
    &:hover {
      color: $noraml-focus-and-hover-color;
      border-color: $noraml-focus-and-hover-border-color;
      background: $noraml-focus-and-hover-bg-color;
    }

    &:active {
      color: $noraml-active-bg-color;
      border-color: $noraml-active-border-color;
    }
    
  }

  .loading,.picon{
    margin-right: .2em;
    margin-left: .2em;
  }
  .loading {
     animation: spin 2s linear infinite;
  }
}

</style>


