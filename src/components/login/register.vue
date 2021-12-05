<template>
  <div class="single-container login-bg">
    <div class="login-box">
      <span class="login-title">REGISTER</span>
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
                  v-model:value="formData.userName"
                  @keydown.enter.prevent/>
            </n-form-item-gi>
            <n-form-item-gi
                label="PassWord"
                path="passWord">
              <n-input
                  type="password"
                  v-model:value="formData.passWord"
                  @input="handlePasswordInput"
                  @keydown.enter.prevent/>
            </n-form-item-gi>
            <n-form-item-gi
                label="Confirm PassWord"
                ref="confirmPassWordRef"
                path="confirmPassWord">
              <n-input
                  type="password"
                  @keydown.enter.prevent
                  v-model:value="formData.confirmPassWord"/>
            </n-form-item-gi>
          </n-grid>
        </n-form>
      </div>
      <div class="login-footer">
        <n-button
            class="login-button"
            type="primary"
            @click="signUpClick">
          Sign Up
        </n-button>
        <span>Already have an account ?
          <router-link
              to="/login"
              class="sign-title">
            Sign In
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref } from 'vue';
import {NGrid, NForm, NFormItemGi, NInput, NButton, useMessage} from "naive-ui";
import {UserInfo} from "@/components/login/index.type";

export default defineComponent({
  name: 'registerComponent',
  components: {
    NForm,NFormItemGi,NInput, NButton, NGrid
  },
  setup(props: any, context: any){
    /*****************数据*********************/
    const formData = reactive<UserInfo>({
      userName: '',
      passWord: '',
      confirmPassWord: ''
    })
    const formRef = ref<any>(null); // 表单ref
    const confirmPassWordRef = ref<any>(null); // 重复密码ref
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
      },
      confirmPassWord: [
          {
          required: true,
          trigger: ['blur', 'input'],
          message: '请再次输入 密码'
        },
        {
          validator: validatePasswordStartWith,
          message: '两次密码输入不一致',
          trigger: 'input'
        },
        {
          validator: validatePasswordSame,
          message: '两次密码输入不一致',
          trigger: ['blur', 'password-input']
        }
        ]

    }
    const $message = useMessage();
    /*****************逻辑函数*********************/
    function validatePasswordStartWith (rule: any, value: any): boolean {
      return !!(
          formData?.passWord && formData?.passWord.startsWith(value) &&
          formData?.passWord.length >= value.length
      )
    }
    function validatePasswordSame (rule: any, value: any): Boolean {
      return value === formData.passWord
    }
    function handlePasswordInput () {
      if (formRef.ConfirmPassWord) {
        confirmPassWordRef.value.validate({ trigger: 'password-input' })
      }
    }
   function signUpClick(): void {
      formRef.value.validate((errors: any) => {
        if (!errors) {
          console.log(formData)
        } else {
          const error = 'error'
          $message.warning(error);
        }
      })
    }

    return {
      formData ,formRef, confirmPassWordRef, rules ,signUpClick, handlePasswordInput
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
  height: 60%;
  padding-top: 10%;
  overflow-y: auto;
}
.login-footer {
  display: grid;
  grid-template-rows: repeat(3, 30px);
  grid-row-gap: 20px;
  margin-top: 20px;
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