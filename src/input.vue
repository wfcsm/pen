<template>
    <div class="p-input">
        <input placeholder="请输入内容"/>
    </div>
</template>

<script>
export default {
    name:"PInput"
}
</script>


<style lang="scss" scoped>
.p-input{
    width:180px;
    >input{
        border-radius: 4px;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        background:#fff;
        border:1px solid #dcdfe6;
        cursor: pointer;
        outline: none;
        width: 100%;
        &:focus{
            border-color: #409eff;
        }
    }
}
</style>

