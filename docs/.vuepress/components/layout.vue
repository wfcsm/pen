<template>
  <div>
    <h3>布局</h3>
    <hr>
    <h4>预览</h4>
    <p-container style="color: white; margin-bottom:50px;">
      <p-header style="height: 50px; background:lightskyblue;">header</p-header>
      <p-main style="height: 100px; background:deepskyblue;">content</p-main>
      <p-footer style="height: 50px; background:lightskyblue;">footer</p-footer>
    </p-container>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>

    <h3>布局</h3>
    <hr>
    <h4>预览</h4>
    <p-container style="color: white; overflow:hidden; margin-bottom:50px;">
      <p-header style="height: 50px; background:lightskyblue;">header</p-header>
      <p-container>
        <p-aside style="height: 100px; background:#ddd; width:200px; color: black;">sider</p-aside>
        <p-main style="height: 100px; background:deepskyblue;">content</p-main>
      </p-container>
      <p-footer style="height: 50px; background:lightskyblue;">footer</p-footer>
    </p-container>

    <h4>代码</h4>
    <pre><code>{{content2}}</code></pre>

    <h3>布局</h3>
    <hr>
    <h4>预览</h4>
    <p-container style="color: white; overflow:hidden; ">
      <p-aside style=" background:#ddd; width:200px; color: black;">sider</p-aside>
      <p-container>
        <p-header style="height: 50px; background:lightskyblue;">header</p-header>
        <p-main style="height: 100px; background:deepskyblue;">content</p-main>
        <p-footer style="height: 50px; background:lightskyblue;">footer</p-footer>
      </p-container>
    </p-container>
     <pre><code>{{content3}}</code></pre>
  </div>
</template>

<script>
import PHeader from "../../../src/header";
import PMain from "../../../src/main";
import PFooter from "../../../src/footer";
import PAside from "../../../src/aside";
import PContainer from "../../../src/container";
export default {
  components: {
    "p-header": PHeader,
    "p-main": PMain,
    "p-footer": PFooter,
    "p-aside": PAside,
    "p-container": PContainer
  },
  data() {
    return {
      content: `
        <p-container style="color: white; margin-bottom:50px;">
            <p-header style="height: 50px; background:lightskyblue;">header</p-header>
            <p-main style="height: 100px; background:deepskyblue;">content</p-main>
            <p-footer style="height: 50px; background:lightskyblue;">footer</p-footer>
        </p-container>
        `.replace(/\t| +/g,'').trim(),
      content2: `
         <p-container style="color: white; overflow:hidden; margin-bottom:50px;">
            <p-header style="height: 50px; background:lightskyblue;">header</p-header>
            <p-container>
                <p-aside style="height: 100px; background:#ddd; width:200px; color: black;">sider</p-aside>
                <p-main style="height: 100px; background:deepskyblue;">content</p-main>
            </p-container>
            <p-footer style="height: 50px; background:lightskyblue;">footer</p-footer>
        </p-container>
        `.replace(/\t| +/g,'').trim(),
        content3:`
        <p-container style="color: white; overflow:hidden; ">
        <p-aside style=" background:#ddd; width:200px; color: black;">sider</p-aside>
        <p-container>
          <p-header style="height: 50px; background:lightskyblue;">header</p-header>
          <p-main style="height: 100px; background:deepskyblue;">content</p-main>
          <p-footer style="height: 50px; background:lightskyblue;">footer</p-footer>
        </p-container>
      </p-container>
        `.replace(/\t| +/g,'').trim()
    };
  }
};
</script>

