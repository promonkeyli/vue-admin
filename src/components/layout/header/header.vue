<template>
  <div class="page-container vh-box">
    <n-popconfirm
        negative-text="取消"
        positive-text="确定"
        :show-icon="false"
        @positive-click="confirmQuit"
        @negative-click="cancelQuit">
      <template #trigger>
        <n-button
            type="primary">
          退出登陆
        </n-button>
      </template>
      是否退出当前账户？
    </n-popconfirm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NPopconfirm } from "naive-ui";
import {localStorage} from "@/lib/tools";
import {useRouter} from "vue-router";
import { useStore } from "vuex";
import { getCurrentUser } from "@/services/userService";

export default defineComponent({
  name: 'headerComponent',
  components:{
    NButton, NPopconfirm
  },
  setup(props: any, context: any){
  /*****************逻辑函数*********************/
  const router = useRouter();
  const store = useStore();
  // 1.确认退出
    async function confirmQuit(): Promise<void> {
      localStorage.remove('token');
      await router.push('/login');
      const userInfo: any = await getCurrentUser();
    }
  // 2.取消确认退出
    function cancelQuit(): void {
      console.log('cancel')
    }
    return {
       confirmQuit, cancelQuit
    }
  }
});
</script>

<style scoped lang="less">

</style>
