<template>
    <div>
        <h3>多个展开</h3>
        <hr>
        <h4>代码</h4>
         {{selected}}
       <p-collapse :selected.sync="selected">
            <p-collapse-item title="标题1" name="1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p-collapse-item>
            <p-collapse-item title="标题2" name="2">内容2</p-collapse-item>
            <p-collapse-item title="标题3" name="3">内容3</p-collapse-item>
        </p-collapse>
       <h4>代码</h4>
        <pre><code>{{content}}</code></pre>

         <h3>单个展开</h3>
        <hr>
        <h4>代码</h4>
         {{selected}}
       <p-collapse :selected.sync="selected" single>
            <p-collapse-item title="标题1" name="1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p-collapse-item>
            <p-collapse-item title="标题2" name="2">内容2</p-collapse-item>
            <p-collapse-item title="标题3" name="3">内容3</p-collapse-item>
        </p-collapse>
       <h4>代码</h4>
        <pre><code>{{content1}}</code></pre>
        
    </div>
</template>

<script>
import PCollapse from '../../../src/collapse'
import PCollapseItem from '../../../src/collapse-item'
export default {
    components:{
        "p-collapse":PCollapse,
        "p-collapse-item":PCollapseItem
    },
    data(){
        return{
            selected:[],
            content:`
            <p-collapse :selected.sync="selected">
            <p-collapse-item title="标题1" name="1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p-collapse-item>
            <p-collapse-item title="标题2" name="2">内容2</p-collapse-item>
            <p-collapse-item title="标题3" name="3">内容3</p-collapse-item>
            </p-collapse>

            data(){
                return{
                    selected:[]
                }
            }
            `.replace(/\t| +/g,'').trim(),
             content1:`
            <p-collapse :selected.sync="selected" single>
            <p-collapse-item title="标题1" name="1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p-collapse-item>
            <p-collapse-item title="标题2" name="2">内容2</p-collapse-item>
            <p-collapse-item title="标题3" name="3">内容3</p-collapse-item>
            </p-collapse>

            data(){
                return{
                    selected:[]
                }
            }
            `.replace(/\t| +/g,'').trim()

        }
    }
}
</script>