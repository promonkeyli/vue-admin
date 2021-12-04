<template>
  <div class="single-container login-bg">
    <div class="login-box">
      <span class="login-title">REGISTER</span>
      <div class="form-box">
        <n-form>
          <n-grid  y-gap="1" :cols="1">
            <n-form-item-gi label="UserName" path="user.name">
              <n-input />
            </n-form-item-gi>
            <n-form-item-gi label="PassWord" path="user.passWord">
              <n-input />
            </n-form-item-gi>
          </n-grid>
        </n-form>
      </div>
      <div class="login-footer">
        <n-button class="login-button">Sign Up</n-button>
        <span>Already have an account ?
          <router-link to="/login" class="sign-title">Sign In</router-link></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {NGrid, NForm, NFormItemGi, NInput, NCheckbox, NButton} from "naive-ui";

export default defineComponent({
  name: 'registerComponent',
  components: {
    NForm,NFormItemGi,NInput, NButton, NGrid
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
  overflow-y: hidden;
}
.login-footer {
  display: grid;
  grid-template-rows: repeat(3, 40px);
  grid-row-gap: 20px;
  margin-top: 40px;
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