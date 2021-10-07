<template>
  <div class="welcome-container">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">通用后台管理系统</div>
      <div class="desc">vue+vite+element-plus 搭建的后台管理系统</div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style lang="scss">
.welcome-container {
  display: flex;
  justify-content: space-around;
  height: calc(100vh - 160px);
  .content {
    margin-top: 170px;
    .sub-title {
      font-size: 30px;
      line-height: 50px;
      text-align: left;
      color: #333;
    }
    .title {
      font-size: 40px;
      text-align: left;
      line-height: 72px;
      color: #409eff;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: left;
      line-height: 80px;
    }
  }
  .img {
    margin-top: 100px;
    background-image: url('../assets/img/welcome.png');
    width: 371px;
    height: 438px;
  }
}
</style>
