<template>
    <div>
         <p-tabs :selected.sync="selected" >
           <p-tabs-pane label="武磊" pname="lei">我是武磊</p-tabs-pane>
           <p-tabs-pane label="梅西" pname="messi">我是梅西</p-tabs-pane>
           <p-tabs-pane label="C罗" pname="c">我是C罗</p-tabs-pane>
        </p-tabs>
        <pre style="margin-top:80px"><code>{{content}}</code></pre>
    </div>
</template>

<script>
import PTabs from '../../../src/tabs'
import PTabsPane from '../../../src/tabs-pane'
export default {
    components:{
        "p-tabs":PTabs,
        "p-tabs-pane":PTabsPane,
    },
    data(){
        return {
           selected:"lei",
           content:`<p-tabs :selected.sync="selected" >
                <p-tabs-pane label="武磊" pname="lei">我是武磊</p-tabs-pane>
                <p-tabs-pane label="梅西" pname="messi">我是梅西</p-tabs-pane>
                <p-tabs-pane label="C罗" pname="c">我是C罗</p-tabs-pane>
           </p-tabs>

           data(){
               return {
                   selected:"lei"
               }
           }
           `.replace(/\t| +/g,'').trim()
        }
    }
}
</script>

