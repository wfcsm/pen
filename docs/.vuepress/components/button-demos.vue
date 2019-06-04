<template>
    <div>
           <div class="exhibition">
            <p-button >默认按钮</p-button>
            <p-button type="primary" >默认按钮</p-button>
            <p-button type="success" >默认按钮</p-button>
            <p-button type="info">默认按钮</p-button>
            <p-button type="warning">默认按钮</p-button>
            <p-button type="danger">默认按钮</p-button>
        </div>
        <pre><code>{{content1}}</code></pre>
         <div class="exhibition">
            <p-button :circle="true">默认按钮</p-button>
            <p-button type="primary" :circle="true">默认按钮</p-button>
            <p-button type="success" :circle="true">默认按钮</p-button>
            <p-button type="info" :circle="true">默认按钮</p-button>
            <p-button type="warning" :circle="true">默认按钮</p-button>
            <p-button type="danger" :circle="true" >默认按钮</p-button>
        </div>
         <pre><code>{{content2}}</code></pre>
        <div class="exhibition">
            <p-button :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="primary" :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="success" :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="info" :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="warning" :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="danger" :circle="true" :disabled="true">默认按钮</p-button>
        </div>
         <pre><code>{{content3}}</code></pre>
        <div class="exhibition">  
            <p-button type="primary" icon="delete"  :circle="true"></p-button>
            <p-button type="primary" icon="share">asdasda</p-button>
            <p-button type="primary" icon="edit"></p-button> 
        </div>
         <pre><code>{{content4}}</code></pre>
        <div class="exhibition">  
            <p-button type="primary" icon="delete" :loading="true"  :circle="true">默认按钮</p-button>
            <p-button type="primary" icon="delete" :loading="true"  >默认按钮</p-button>
        </div> 
         <pre><code>{{content5}}</code></pre> 
    </div>
</template>

<script>
import PButton from '../../../src/button'
export default {
    components:{
        "p-button":PButton
    },
    data(){
        return {
            content1:`
            <p-button >默认按钮</p-button>
            <p-button type="primary" >默认按钮</p-button>
            <p-button type="success" >默认按钮</p-button>
            <p-button type="info">默认按钮</p-button>
            <p-button type="warning">默认按钮</p-button>
            <p-button type="danger">默认按钮</p-button>`.replace(/\t| +/g,'').trim(),
            content2:`
            <p-button :circle="true">默认按钮</p-button>
            <p-button type="primary" :circle="true">默认按钮</p-button>
            <p-button type="success" :circle="true">默认按钮</p-button>
            <p-button type="info" :circle="true">默认按钮</p-button>
            <p-button type="warning" :circle="true">默认按钮</p-button>
            <p-button type="danger" :circle="true" >默认按钮</p-button>`.replace(/\t| +/g,'').trim(),
            content3:` 
            <p-button :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="primary" :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="success" :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="info" :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="warning" :circle="true" :disabled="true">默认按钮</p-button>
            <p-button type="danger" :circle="true" :disabled="true">默认按钮</p-button>`.replace(/\t| +/g,'').trim(),
            content4:` 
            <p-button type="primary" icon="delete"  :circle="true"></p-button>
            <p-button type="primary" icon="share">asdasda</p-button>
            <p-button type="primary" icon="edit"></p-button> `.replace(/\t| +/g,'').trim(),
            content5:` 
            <p-button type="primary" icon="delete" :loading="true"  :circle="true">默认按钮</p-button>
            <p-button type="primary" icon="delete" :loading="true"  >默认按钮</p-button>`.replace(/\t| +/g,'').trim(),
        }
    }
}
</script>

