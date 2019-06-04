<template>
    <div class="p-input" >
        <input :placeholder="placeholder" 
               :disabled="disabled" 
               :class="{errormessage}"
               :value="value"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"/>
        <div v-if="errormessage">
            <p-icon name="error" class="error"></p-icon>
            {{errormessage}}
        </div>
    </div>
</template>

<script>
import PIcon from './icon'
export default {
    name:"PInput",
    components:{
        PIcon
    },
    computed:{
        errorShow(){
            if(this.erromessage){
                return true
            }
            return false
        }
    },
    props:{
        value:{
            type:String
        },
        placeholder:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        errormessage:{
            type:String
        }
    },
    mounted(){
     
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
        &.errormessage{
            border-color:#f56c6c
        }
    }
    >div{
        line-height: 40px;
        margin-left: .5em;
        color:#f56c6c;
        .error{
            fill:#f56c6c;
        }
    }
}
</style>

