<template>
  <div class="err-page">
    Sorry Page Not Found !
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue';
export default defineComponent({
  name: '404',
  components: {
  }
});
</script>

<style scoped lang="less">
.err-page {
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background: white;
  font-size: 3rem;
}

</style>