<template>
  <n-message-provider>
    <n-spin :show="show">
    <router-view></router-view>
    </n-spin>
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
