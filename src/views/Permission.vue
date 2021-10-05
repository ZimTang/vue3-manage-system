<template>
  <div class="permission-container">
    <p class="title">管理员权限页面</p>
    <p>只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面，其他账号想进来都会跳到403页面</p>
    <p>
      想尝试一下，请
      <router-link to="/login" style="color:#409EFF">退出登录</router-link>，随便输入个账号名，再进来试试看。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Permisson'
}
</script>

<style scoped lang="scss">
.permission-container {
  width: 100%;
  margin: 0 auto;
  .title {
    display: flex;
    font-size: 25px;
    font-weight: bold;
    justify-content: center;
  }
  p {
    //  text-indent: 16px;
    width: 100%;
    text-align: center;
    height: 25px;
    line-height: 25px;
    margin-top: 30px;
  }
}
</style>