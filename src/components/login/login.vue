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
import { defineComponent, reactive, ref } from 'vue';
import { NGrid, NForm, NFormItemGi, NInput, NCheckbox, NButton , useMessage } from "naive-ui";
import  sloganComponent  from './slogan.vue'
import { setAllCookie, removeAllCookie } from '@/lib/tools'
import { UserInfo } from './index.type';

export default defineComponent({
  name: 'loginComponent',
  components: {
    NForm,NFormItemGi,NInput, NCheckbox, NButton, NGrid,
    sloganComponent
  },
  setup(props: any, context){
    // context 是非响应式的js对象，需要某些属性或者方法可以直接解构获取
    // const { title } = toRefs(props) // 使用toRefs解构响应式props
    // 模版需要使用的，需要向外进行暴露
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