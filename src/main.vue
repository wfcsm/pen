<template>
    <div class="p-main" >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"PMain"

}
</script>

<style lang="scss" scoped>
.p-main{
    display: flex;
    flex-grow: 1;
}
</style>
