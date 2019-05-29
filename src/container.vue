<template>
    <div class="p-container" :class="containStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"PContainer",
    data(){
        return{
           containStyle:{
               hasSider:false
           }
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            if(vm.$options.name==="PAside"){
                this.containStyle.hasSider=true;
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.p-container{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
        flex-direction: row;
    }
}
</style>


