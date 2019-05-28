<template>
  <button class="p-button" 
          :class="{[`p-button-${type}`]:true, 
                    'is-circle':circle,
                    'is-disabled':disabled}"
          :disabled="disabled">
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
    }
  },
  props: {
    type: {
      type: String,
      default: "default"
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
$colorStyle: primary success wraning info danger  ;
$class-slug: for;
// 默认按钮配色
$noraml-focus-and-hover-color: #409eff;
$noraml-focus-and-hover-border-color: #c6e2ff;
$noraml-focus-and-hover-bg-color: #ecf5ff;
$noraml-active-bg-color: #3a8ee6;
$noraml-active-border-color: #3a8ee6;
// primary按钮配色
$primary-bg-color: #409eff;
$primary-focus-and-hover: #66b1ff;
$primary-active: #3a8ee6;
// success按钮配色
$success-bg-color: #67c23a;
$success-focus-and-hover: #85ce61;
$success-active: #5daf34;
// info 按钮配色
$info-bg-color: #909399;
$info-focus-and-hover: #a6a9ad;
$info-active: #82848a;

// warning 按钮配色
$warning-bg-color: #e6a23c;
$warning-focus-and-hover: #ebb563;
$warning-active: #cf9236;

// danger 按钮配色
$danger-bg-color: #f56c6c;
$danger-focus-and-hover: #f78989;
$danger-active: #dd6161;


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

  &.p-button-default {
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


  &.p-button-primary {
    color: $font-color;
    background-color: $primary-bg-color;
    border-color: $primary-bg-color;

    &:focus,
    &:hover {
      background: $primary-focus-and-hover;
      border-color: $primary-focus-and-hover;
    }

    &:active {
      background: $primary-active;
      border-color: $primary-active;
    }
    
  }

  &.p-button-success {
    color: $font-color;
    background-color: $success-bg-color;
    border-color: $success-bg-color;

    &:focus,
    &:hover {
      background: $success-focus-and-hover;
      border-color: $success-focus-and-hover;
    }

    &:active {
      background: $success-active;
      border-color: $success-active;
    }
    
  }

  &.p-button-info {
    color: $font-color;
    background-color: $info-bg-color;
    border-color: $info-bg-color;

    &:focus,
    &:hover {
      background: $info-focus-and-hover;
      border-color: $info-focus-and-hover;
    }

    &:active {
      background: $info-active;
      border-color: $info-active;
    }
    
  }

 
  &.p-button-warning {
    color: $font-color;
    background-color: $warning-bg-color;
    border-color: $warning-bg-color;

    &:focus,
    &:hover {
      background: $warning-focus-and-hover;
      border-color: $warning-focus-and-hover;
    }

    &:active {
      background: $warning-active;
      border-color: $warning-active;
    }
    
  }

  &.p-button-danger {
    color: $font-color;
    background-color: $danger-bg-color;
    border-color: $danger-bg-color;

    &:focus,
    &:hover {
      background: $danger-focus-and-hover;
      border-color: $danger-focus-and-hover;
    }

    &:active {
      background: $danger-active;
      border-color: $danger-active;
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


