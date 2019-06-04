<template>
  <div>
    <h3>24格网格</h3>
    <hr>
    <h4>预览</h4>
    <p-row class="demoRow">
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
    </p-row>

    <p-row class="demoRow">
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
    </p-row>

    <p-row class="demoRow">
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
    </p-row>

    <p-row class="demoRow">
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
    </p-row>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    
    <h3>设置gutter</h3>
    <hr>
    <p-row class="demoRow" gutter="10">
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
    </p-row>

    <p-row class="demoRow" gutter="10">
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
    </p-row>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>

<script>
// import PContainer from "../../../src/container";
import PRow from "../../../src/row";
import PCol from "../../../src/col";
export default {
  components: {
    "p-row": PRow,
    "p-col": PCol
  },
  data() {
    return {
      content:`
    * {
      box-sizing: border-box;
    }

    <p-row class="demoRow">
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
    </p-row>

    <p-row class="demoRow">
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
    </p-row>

    <p-row class="demoRow">
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
      <p-col span="4">
        <div class="demoCol">4</div>
      </p-col>
    </p-row>

    <p-row class="demoRow">
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
      <p-col span="2">
        <div class="demoCol">2</div>
      </p-col>
    </p-row>`.replace(/\t| +/g,'').trim(),
    content2:`
     * {
        box-sizing: border-box;
      }
     <p-row class="demoRow" gutter="10">
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
      <p-col span="8">
        <div class="demoCol">8</div>
      </p-col>
    </p-row>

    <p-row class="demoRow" gutter="10">
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
      <p-col span="6">
        <div class="demoCol">6</div>
      </p-col>
    </p-row>`.replace(/\t| +/g,'').trim()
    };
  }
};
</script>

<style lang="scss" scoped>
.demoRow {
  margin-top: 10px;
}
.demoCol {
  background-color: #b3c0d1;
  border: 1px solid red;
  text-align: center;
  height: 48px;
  line-height: 48px;
}
</style>


