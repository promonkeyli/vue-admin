<template>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './pages/index.vue'; // 此处vue3要跟完整的文件名
import {NMessageProvider} from 'naive-ui';

export default defineComponent({
  name: 'App',
  components: { Home, NMessageProvider }
});
</script>
