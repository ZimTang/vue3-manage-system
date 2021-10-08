<template>
  <el-container>
    <SideBar />
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <div class="main-page">
          <router-view v-slot="{ Component }" class="content">
            <transition name="component-fade" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
import { useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
export default {
  name: 'Home',
  setup() {
    const route = useRoute()
    const hours = new Date().getHours()
    const username = localStorage.getItem('username')
    let msg
    const getMsg = () => {
      if (hours > 6 && hours < 12) {
        msg = '上午好'
      } else if (hours >= 12 && hours <= 18) {
        msg = '中午好'
      } else {
        msg = '晚上好'
      }
    }

    getMsg()
    // console.log(route.query.first)
    if (route.query.first) {
      ElNotification({
        title: '登录成功',
        message: `${msg}，${username}`,
        type: 'success',
      })
    }
  },
  components: {
    Header,
    SideBar,
  },
}
</script>

<style lang="scss">
.el-container {
  height: 100vh;
}
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
  line-height: 260px;
  // width: 200px;
}

.el-main {
  background-color: #e7e9ec;
  color: var(--el-text-color-primary);
  height: 100vh;
  .main-page {
    padding: 25px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 5px #e7e9ec;
    background-color: #fff;
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
.content {
  margin: 0 auto;
}
</style>
