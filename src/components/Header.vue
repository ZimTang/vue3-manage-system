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
    <el-tooltip
      class="item"
      effect="dark"
      content="Bottom Center prompts info"
      placement="bottom"
    >
      <router-link to="/">
        <i class="el-icon-bell"></i>
      </router-link>
    </el-tooltip>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        用户
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <a href="https://github.com/Twitzz/vue3-manage-system">
            <el-dropdown-item>项目仓库</el-dropdown-item>
          </a>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'Header',
  setup() {
    const store = useStore()
    const route = useRoute()
    const title = computed(() => {
      return route.meta.title
    })
    const changeCollapse = function () {
      store.commit('changeIsCollapse', !store.state.isCollapse)
      console.log(store.state.isCollapse)
    }
    return {
      changeCollapse,
      title,
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
  }
}
</style>
