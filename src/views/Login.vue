<template>
  <div class="login-wrapper">
    <div class="model">
      <div class="title">火星</div>
      <el-form status-icon :rules="rules" ref="userForm" :model="formData">
        <el-form-item prop="username">
          <el-input
            type="text"
            prefix-icon="el-icon-user"
            v-model="formData.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="el-icon-view"
            v-model="formData.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="toLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { doLogin } from '../apis'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const store = useStore()
    const formData = reactive({
      username: '',
      password: '',
    })
    const rules = reactive({
      username: {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      },
      password: {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
    })
    const userForm = ref(null)
    const toLogin = () => {
      userForm.value.validate(valid => {
        if (valid) {
          doLogin({
            userName: formData.username,
            userPwd: formData.password,
          }).then(res => {
            router.push('/welcome')
            localStorage.setItem('username', formData.username)
            store.commit('saveToken', res.data.token)
            store.commit('saveInfo', res.data.userInfo)
            console.log(res)
          })
        } else {
          return false
        }
      })
    }
    return {
      formData,
      rules,
      userForm,
      toLogin,
    }
  },
}
</script>

<style lang="scss">
.login-wrapper {
  background-color: #f2f7f9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .model {
    width: 500px;
    padding: 50px;
    background-color: #f9f9f8;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .title {
      width: 100%;
      margin: 20px auto;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
