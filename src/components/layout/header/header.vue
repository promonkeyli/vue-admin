<template>
  <div class="page-container vh-box">
    <n-button
        type="primary"
        @click="logOutClick">
      退出登陆
    </n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton } from "naive-ui";
import {localStorage} from "@/lib/tools";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'headerComponent',
  components:{
    NButton
  },
  setup(props: any, context: any){
  /*****************逻辑函数*********************/
  const router = useRouter();
    function logOutClick (){
    // 此处退出清除localStorage信息
    localStorage.remove('name');
    localStorage.remove('pwd');
    localStorage.remove('token');
      router.push('/login')
    }
    return {
      logOutClick
    }
  }
});
</script>

<style scoped lang="less">

</style>
