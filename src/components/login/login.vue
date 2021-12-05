<template>
  <div class="single-container login-bg">
<!--    <sloganComponent/>-->
    <div class="login-box">
      <span class="login-title">LOGIN</span>
      <div class="form-box">
        <n-form
            :model="formData"
            :rules="rules"
            ref="formRef">
        <n-grid
            y-gap="1"
            :cols="1">
          <n-form-item-gi
              label="UserName"
              path="userName">
            <n-input
                type="text"
                v-model:value="formData.userName"/>
          </n-form-item-gi>
          <n-form-item-gi
              label="PassWord"
              path="passWord">
            <n-input
                type="password"
                v-model:value="formData.passWord"/>
          </n-form-item-gi>
        </n-grid>
        </n-form>
      </div>
      <div class="login-footer">
          <n-checkbox
              v-model:checked="isChecked">
            remmber account ?
          </n-checkbox>
          <n-button
              class="login-button"
              type="primary"
              @click="signInClick">
            sign in
          </n-button>
        <span>Dont`t have an account ?
          <router-link
              to="/register"
              class="sign-title">
            Sign Up
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref , onMounted} from 'vue';
import { NGrid, NForm, NFormItemGi, NInput, NCheckbox, NButton , useMessage } from "naive-ui";
import  sloganComponent  from './slogan.vue'
import { setAllCookie, removeAllCookie , getAllCookie, localStorage} from '@/lib/tools'
import { UserInfo } from './index.type';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'loginComponent',
  components: {
    NForm,NFormItemGi,NInput, NCheckbox, NButton, NGrid,
    sloganComponent
  },
  setup(props: any, context){
    // 生命周期周期钩子 页面挂载调用
    onMounted(() => {
         // 此处获取本地峰Cookie数据
      const [username, password] = getAllCookie();
      if (username !== null && password !== null){
        formData.userName = username;
        formData.passWord = password;
      }
    })
    // context 是非响应式的js对象，需要某些属性或者方法可以直接解构获取
    // const { title } = toRefs(props) // 使用toRefs解构响应式props
    // 模版需要使用的，需要向外进行暴露
    const router = useRouter();
    const formRef = ref<any>(null);
    const $message = useMessage(); // ui自定义的hooks函数
    const formData = reactive<UserInfo>({
      userName : '',
      passWord : ''
    })
    const rules: Object = {
        userName: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入 用户名'
        },
        passWord: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入 密码'
        }
    }

    const isChecked = ref<boolean>(false)
    const signInClick = (): void => {
      formRef.value.validate((errors: any) => {
        if (!errors) {
           // 勾选记住账户名才存值 不勾选移除Cookie
          isChecked.value ? setAllCookie(formData.userName, formData.passWord) : removeAllCookie();
          const statusError = '用户名或者密码有误，请重新输入'
          console.log('用户信息',formData);
          const name = 'admin';
          const pwd = '123';
          // 此处先根据输入的用户名密码向后段请求 失败则提示用户名密码有误
          if ((formData.userName === name)  && (formData.passWord === pwd )){
          // 用户名密码都正确 返回token 并将token 用户信息保存至localStorage中
            const token = 'token123';
            localStorage.set('token', token);
            localStorage.set('name', name);
            localStorage.set('pwd', pwd);
            console.log('router', router);
            router.push('/')
          }else {
            $message.warning(statusError);
          }
        } else {
          const error = 'error'
          $message.warning(error);
        }
      })
    }
    return {
      formRef, formData, rules, isChecked, signInClick
    }
  }
});
</script>

<style scoped lang="less">
.login-title {
  width:50px;
  height: 20px;
  border-bottom: 2.5px solid @bg-green;
  font-size: 1.4rem;
  color: @font-color-grey;
}
.form-box {
  width: 100%;
  height: 40%;
  padding-top: 10%;
  overflow-y: auto;
}
.login-footer {
  display: grid;
  grid-template-rows: repeat(3, 30px);
  grid-row-gap: 20px;
  margin-top: 10px;
}
.login-button {
  border-radius: 20px;
  background: @bg-green;
}
.n-input{
  border-radius: 20px;
  font-size: 1rem;
  padding-left: 10px;
}
.sign-title {
  font-size: 1rem;
  color: @bg-green;
}
</style>