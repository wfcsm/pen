<template>
    <div class="p-row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"PRow",
    props:{
        gutter:{
            type:[Number,String]
        }
    },
    computed:{
        rowStyle(){
            let {gutter} = this;
            return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            vm.gutter=this.gutter
        })
    }
}
</script>

<style lang="scss" scoped>
.p-row{
    display: flex;
    flex-wrap: wrap;
}
</style>
