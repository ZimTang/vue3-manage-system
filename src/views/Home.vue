<template>
  <el-container>
    <SideBar/>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <div class="main-page">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
export default {
  name: 'Home',
  components: {
    Header,
    SideBar
  },
}
</script>

<style lang="scss">
.el-header {
  background-color: #fff;
  color: var(--el-text-color-primary);
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin: 0 20px 0 10px;

}

.el-aside {
  background-color: #001323;
  color: var(--el-text-color-primary);
  text-align: center;
  height: 100%;
  line-height: 260px;
  width: 200px;
}

.el-main {
  background-color: #e7e9ec;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  height: 100vh;
  .main-page {
    height: 100%;
    background-color: #fff;
  }
}
</style>