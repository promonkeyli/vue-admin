<template>
  <div class="container">
    <div class="header">
      <Header></Header>
    </div>
    <div class="body">
      <div class="side">
        <Side></Side>
      </div>
      <div class="content">
        内容区域
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue';
import Header from 'components/layout/header/header.vue';
import Side from 'components/layout/side/side.vue';

export default defineComponent({
  name: "home",
  components:{
    Header, Side
  }
})
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  .header {
    width: 100%;
    height: 100px;
    background: green;
  }
  .body {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: calc(100vh - 120px);
    .side {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 100%;
      background: #fff;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100% - 20px);
      width: calc(100% - 220px);
      background: #fff;
      margin-bottom: 20px;
    }
  }
}
</style>