<template>
  <div class="nav-left">
    <el-breadcrumb separator>
      <el-breadcrumb-item @click="changeCollapse">
        <i class="el-icon-s-unfold"></i>
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="nav-right">
    <el-tooltip class="item" effect="dark" :content="msg" placement="bottom">
      <router-link to="/tabs">
        <el-badge is-dot class="badge">
          <i class="el-icon-bell"></i>
        </el-badge>
      </router-link>
    </el-tooltip>
    <span class="fullScreen" @click="changeFullScreen">
      <i class="el-icon-full-screen"></i>
    </span>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{ username }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <a href="https://github.com/Twitzz/vue3-manage-system">
            <el-dropdown-item>项目仓库</el-dropdown-item>
          </a>
          <el-dropdown-item @click="goUser">个人中心</el-dropdown-item>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import router from '../router'
export default {
  name: 'Header',
  setup() {
    const store = useStore()
    const route = useRoute()
    const username = localStorage.getItem('username')
    const msg = ref('你有2条未读消息')
    const title = computed(() => {
      return route.meta.title
    })
    const changeCollapse = function () {
      store.commit('changeIsCollapse', !store.state.isCollapse)
      console.log(store.state.isCollapse)
    }
    const logout = () => {
      router.replace('/login')
      localStorage.clear()
    }

    const goUser = () => {
      router.push('/user')
    }

    // 更改网页全屏
    const changeFullScreen = () => {
      let element = document.documentElement
      // 判断是否已经是全屏
      // 如果是全屏，退出
      if (document.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        console.log('已退出全屏！')
      } else {
        // 否则，进入全屏
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
        console.log('已进入全屏！')
      }
    }
    return {
      changeCollapse,
      username,
      title,
      logout,
      msg,
      goUser,
      changeFullScreen,
    }
  },
}
</script>

<style scoped lang="scss">
.nav-left {
  .el-breadcrumb {
    height: 60px;
    line-height: 60px;
  }
}
.nav-right {
  .el-dropdown-link:hover {
    cursor: pointer;
  }
  .item {
    margin-right: 20px;
    line-height: 20px;
  }
}
.fullScreen {
  margin-right: 20px;
}
.fullScreen:hover {
  cursor: pointer;
}
</style>
