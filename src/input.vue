<template>
    <div class="p-input" >
        <input :placeholder="placeholder" :disabled="disabled" />
        <div >{{erromessage}}</div>
    </div>
</template>

<script>
export default {
    name:"PInput",
    props:{
        placeholder:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        erromessage:{
            type:String
        }
    },
    mounted(){
        console.log(this.erromessage);
    }
}
</script>


<style lang="scss" scoped>
.p-input{
    display: flex;
    align-items: cneter;
    height: 40px;
    >input{
        border-radius: 4px;
        padding: 0 15px;
        
        line-height: 40px;
        background:#fff;
        border:1px solid #dcdfe6;
        cursor: pointer;
        outline: none;
        width:180px;
        &:focus{
            border-color: #409eff;
        }
        &[disabled]{
            cursor: not-allowed;
        }
    }
    >span{
        line-height: 40px;
    }
}
</style>

