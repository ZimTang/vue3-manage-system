<template>
  <div class="error-container">
    <div class="error-code">
      <span class="blue">4</span>
      <span class="green">0</span>
      <span class="blue">4</span>
    </div>
    <div class="error-desc">啊哦~ 你所访问的页面不存在</div>
    <div class="error-handle">
      <el-button type="primary" @click="goWelcome">首页</el-button>
      <el-button type="primary" @click="goBack">返回上一级</el-button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: '404',
  setup() {
    const router = useRouter()
    const goWelcome = () => {
      router.replace('/welcome')
    }

    const goBack = () => {
      router.back()
    }

    return {
      goWelcome,
      goBack,
    }
  },
}
</script>

<style scoped lang="scss">
.error-container {
  width: 50%;
  margin: 80px auto;
  // height: 200px;
  .error-code {
    display: flex;
    justify-content: center;
    span {
      font-weight: bold;
      font-size: 100px;
    }
    .blue {
      color: #2d8cf0;
    }
    .green {
      color: #00a854;
    }
  }
  .error-desc {
    color: #777777;
    font-size: 25px;
    display: flex;
    justify-content: center;
  }
  .error-handle {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    .el-button {
      font-size: 20px;
      width: 140px;
      height: 50px;
    }
  }
}
</style>
