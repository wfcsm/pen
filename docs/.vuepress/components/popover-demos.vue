<template>
  <div>
    <h3>触发方式默认为click</h3>
    <hr>
    <h4>预览</h4>
    <p-popover position="top">
        <template v-slot:content>
            上方内容
        </template>
        <p-button>上方</p-button>
    </p-popover>
    <p-popover position="bottom">
        <template v-slot:content>
            下方内容
        </template>
        <p-button>下方</p-button>
    </p-popover>
    <p-popover position="left">
        <template v-slot:content>
            左边内容
        </template>
        <p-button>左边</p-button>
    </p-popover>
    <p-popover position="right">
        <template v-slot:content>
            右边内容
        </template>
        <p-button>右边</p-button>
    </p-popover>
    <h3>代码</h3>
    <pre><code>{{content}}</code></pre>

    <h3>将触发方式改为hover</h3>
    <hr>
    <h4>预览</h4>
    <p-popover position="top" trigger="hover">
        <template v-slot:content>
            上方内容
        </template>
        <p-button>上方</p-button>
    </p-popover>
    <p-popover position="bottom" trigger="hover">
        <template v-slot:content>
            下方内容
        </template>
        <p-button>下方</p-button>
    </p-popover>
    <p-popover position="left" trigger="hover">
        <template v-slot:content>
            左边内容
        </template>
        <p-button>左边</p-button>
    </p-popover>
    <p-popover position="right" trigger="hover">
        <template v-slot:content>
            右边内容
        </template>
        <p-button>右边</p-button>
    </p-popover>
    <h3>代码</h3>
    <pre><code>{{content1}}</code></pre>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  components:{
      "p-popover":Popover,
      "p-button":Button
  },
  data(){
      return{
          content:`
        <p-popover position="top">
            <template v-slot:content>
                上方内容
            </template>
            <p-button>上方</p-button>
        </p-popover>
        <p-popover position="bottom">
            <template v-slot:content>
                下方内容
            </template>
            <p-button>下方</p-button>
        </p-popover>
        <p-popover position="left">
            <template v-slot:content>
                左边内容
            </template>
            <p-button>左边</p-button>
        </p-popover>
        <p-popover position="right">
            <template v-slot:content>
                右边内容
            </template>
            <p-button>右边</p-button>
        </p-popover>
          `.replace(/\t| +/g,'').trim(),
          content1:`
            <p-popover position="top" trigger="hover">
                <template v-slot:content>
                    上方内容
                </template>
                <p-button>上方</p-button>
            </p-popover>
            <p-popover position="bottom" trigger="hover">
                <template v-slot:content>
                    下方内容
                </template>
                <p-button>下方</p-button>
            </p-popover>
            <p-popover position="left" trigger="hover">
                <template v-slot:content>
                    左边内容
                </template>
                <p-button>左边</p-button>
            </p-popover>
            <p-popover position="right" trigger="hover">
                <template v-slot:content>
                    右边内容
                </template>
                <p-button>右边</p-button>
            </p-popover>
          `.replace(/\t| +/g,'').trim()
      }
  }
};
</script>
