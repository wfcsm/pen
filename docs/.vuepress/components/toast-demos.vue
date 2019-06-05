<template>
  <div>
    <h3>this.$toast</h3>
    <hr>
    <h4>预览</h4>
    <p-button @click="toastTop">上方弹出</p-button>
    <p-button @click="toastCenter">中间弹出</p-button>
    <p-button @click="toastBottom">下方弹出</p-button>
    <pre><code>{{content}}</code></pre>

    <h3>设置关闭按钮</h3>
    <hr>
    <h4>预览</h4>
    <p-button @click="toastclose">上方弹出</p-button>
    <pre><code>{{content2}}</code></pre>

    <h3>一直显示(这个功能请配合isClose使用)</h3>
    <hr>
    <h4>预览</h4>
    <p-button @click="toastShow">上方弹出</p-button>
    <pre><code>{{content3}}</code></pre>
  </div>
</template>

<script>
import Vue from "vue";
import PToast from "../../../src/toast";
import PButton from "../../../src/button";
import  MyPlugin  from "../../../src/toast-plugin";
Vue.use(MyPlugin);
export default {
  components: {
    "p-toast": PToast,
    "p-button": PButton
  },
  data() {
    return {
      content: `
        <p-button @click="toastTop">上方弹出</p-button>
        <p-button @click="toastCenter">中间弹出</p-button>
        <p-button @click="toastBottom">下方弹出</p-button>

         methods: {
            toastTop() {
            this.$toast({
                message: "恭喜你，这是一条成功消息",
                postion: "top",
                callback: function() {
                console.log("用户说他知道了");
                }
            });
            },
            toastCenter() {
            this.$toast({
                message: "恭喜你，这是一条成功消息",
                postion: "center",
                callback: function() {
                console.log("用户说他知道了");
                }
            });
            },
            toastBottom() {
            this.$toast({
                message: "恭喜你，这是一条成功消息",
                postion: "bottom",
                callback: function() {
                console.log("用户说他知道了");
                }
            });
            }
        }
        `.replace(/\t| +/g,'').trim(),
      content2: `
          <p-button @click="toastclose">上方弹出</p-button>

          toastclose() {
            this.$toast({
                message: "你知道我在等你吗",
                postion: "top",
                type:"error",
                isClose:true,
                callback: function() {
                console.log("用户说他知道了");
                }
            });
          } 
        `.replace(/\t| +/g,'').trim(),
        content3:`
        toastShow() {
            this.$toast({
                message: "寂寞的心又有谁能体会",
                postion: "top",
                showClose: false,
                type: "error",
                isClose: true,
                callback: function() {
                console.log("用户说他知道了");
                }
            });
        }
        `.replace(/\t| +/g,'').trim()

    };
  },
  methods: {
    toastTop() {
      this.$toast({
        message: "恭喜你，这是一条成功消息",
        postion: "top",
        callback: function() {
          console.log("用户说他知道了");
        }
      });
    },
    toastCenter() {
      this.$toast({
        message: "恭喜你，这是一条成功消息",
        postion: "center",
        callback: function() {
          console.log("用户说他知道了");
        }
      });
    },
    toastBottom() {
      this.$toast({
        message: "恭喜你，这是一条成功消息",
        postion: "bottom",
        callback: function() {
          console.log("用户说他知道了");
        }
      });
    },
    toastclose() {
      this.$toast({
        message: "你知道我在等你吗",
        postion: "top",
        type: "error",
        isClose: true,
        callback: function() {
          console.log("用户说他知道了");
        }
      });
    },
    toastShow() {
      this.$toast({
        message: "寂寞的心又有谁能体会",
        postion: "top",
        showClose: false,
        type: "error",
        isClose: true,
        callback: function() {
          console.log("用户说他知道了");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


