<template>
  <div class="slogan">
    我是slogonComponent组件
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'slogonComponent',
  components: {}
});
</script>

<style scoped lang="less">
.slogan {
  width: 200px;
  height: 200px;
  background: @bg-white;
}

</style>