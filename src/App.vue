<template>
  <n-message-provider>
    <n-spin :show="isLoading">
    <router-view></router-view>
    </n-spin>
  </n-message-provider>
</template>

<script lang="ts">
import {computed, defineComponent } from 'vue';
import Home from './pages/index.vue'; // 此处vue3要跟完整的文件名
import {NMessageProvider, NSpin} from 'naive-ui';
import {useStore} from "vuex";

export default defineComponent({
  name: 'App',
  components: { Home, NMessageProvider ,NSpin},
  setup() {
    // 2021/12/16 vuex中获取全局加载状态
    const store = useStore();
    const isLoading = computed(() => store.state.isLoading)
    return {
      isLoading
    }
  }
});
</script>
