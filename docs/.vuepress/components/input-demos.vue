<template>
    <div>
        <h3>placeholder演示</h3>
        <p-input placeholder="请输入内容" ></p-input> 
        <pre><code>{{content1}}</code></pre>
         <hr>
        <h3>errormessage演示</h3>
        <p-input placeholder="请输入内容" errormessage="请重新输入" ></p-input>
        <pre><code>{{content2}}</code></pre>
         <hr>
        <h3>disabled演示</h3>
        <p-input placeholder="请输入内容" :disabled="true" ></p-input>
        <pre><code>{{content3}}</code></pre>
        <hr>
        <h3>双向绑定</h3>
         <p-input  v-model='message'></p-input>
        <div>
            value: {{message}}
        </div>
        <pre><code>{{content4}}</code></pre>
    </div>
</template>

<script>
import PInput from '../../../src/input'
export default {
    components:{
        "p-input":PInput,
    },
    data(){
        return {
            content1:`
            <p-input placeholder="请输入内容" ></p-input>`.replace(/\t| +/g,'').trim(),
            content2:`
            <p-input placeholder="请输入内容" errormessage="请重新输入" ></p-input> 
            `.replace(/\t| +/g,'').trim(),
            content3:`
            <p-input placeholder="请输入内容" :disabled="true" ></p-input>
            `.replace(/\t| +/g,'').trim(),
            content4:` 
            data:{
                value: '你好啊！'
                }

            <g-input v-model="value"></g-input>
            <div>
                value: {{value}}
            </div>
                `.replace(/\t| +/g,'').trim(),
            message:"你好啊！".replace(/\t| +/g,'').trim()
        }
    }
}
</script>

