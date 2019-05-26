<template>
    <button class="p-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:"PenButton"
}
</script>

<style lang="stylus" scoped>
 .p-button{
    font-size: 14px;
    color: #333;
    padding: 12px 20px;
    background: #fff;
    border:1px solid #dcdfe6;
    color: #606266;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    &:focus,
    &:hover{
        color: #409eff;
        border-color: #c6e2ff;
        background: #ecf5ff;
    }
    &:active{
        color: #3a8ee6;
        border-color:#3a8ee6; 
    }
}

</style>


