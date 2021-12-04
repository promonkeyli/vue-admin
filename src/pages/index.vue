<template>
  <div class="layout">
    <header>
      <Header></Header>
    </header>
    <aside>
      <Side></Side>
    </aside>
    <main>
      <Content></Content>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/layout/header/header.vue';
import Side from '@/components/layout/aside/aside.vue';
import Content from './content/content.vue';

export default defineComponent({
  name: "index",
  components:{
    Header, Side, Content
  }
})
</script>
<style lang="less" scoped>
.layout {
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows:    100px 1fr;
  grid-template-areas: "header header" "aside  main";
  grid-gap: 10px;
  width: 100vw;
  height: 100vh;
  header {
    width: 100%;
    height: 100%;
    grid-area: header;
  }
  aside {
    width: 100%;
    height: 100%;
    grid-area: aside;
  }
  main {
    width: 100%;
    height: calc(100% - 10px);
    grid-area: main;
    background: @bg-white;
  }
}
</style>