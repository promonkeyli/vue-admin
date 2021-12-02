<template>
  <Home></Home>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './page/home/home.vue'; // 此处vue3要跟完整的文件名

export default defineComponent({
  name: 'App',
  components: {
    Home
  }
});
</script>
