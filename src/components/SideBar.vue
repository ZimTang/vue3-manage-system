<template>
  <el-menu
    default-active="/welcome"
    background-color="#001323"
    active-text-color="#409EFF"
    :collapse="isCollapse"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    class="el-menu-vertical-demo"
    router
    unique-opened
    collapse-transition
  >
    <el-menu-item index="/welcome">
      <div class="logo">
        <img src="./../assets/logo.png" />
        <span>后台管理</span>
      </div>
    </el-menu-item>
    <template v-for="(side,index) in sideBar">
      <template v-if="side.subs">
        <el-sub-menu :index="side.index" :key="index">
          <template #title>
            <i :class="side.icon"></i>
            <span>{{ side.title }}</span>
          </template>
          <template v-for="subItem in side.subs">
            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
              <template #title>{{ subItem.title }}</template>
              <el-menu-item
                v-for="(threeItem, i) in subItem.subs"
                :key="i"
                :index="threeItem.index"
              >{{ threeItem.title }}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="subItem.index">{{ subItem.title }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="side.index" :key="side.index">
          <i :class="side.icon"></i>
          <template #title>{{ side.title }}</template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
import { getSideBar } from '../apis'
import { computed, reactive } from 'vue'
import { useStore } from "vuex"
export default {
  name: 'SideBar',
  setup() {
    let sideBar = reactive([])
    const store = useStore()
    const isCollapse = computed(() => {
      return store.state.isCollapse
    })
    getSideBar().then(res => {
      res.data.sideBar.forEach(item => {
        sideBar.push(item)
      })
      console.log(sideBar)
    })
    const handleOpen = () => {
    }
    const handleClose = () => {

    }
    return {
      sideBar,
      handleOpen,
      handleClose,
      isCollapse,
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  text-align: center;
  height: 50px;
  color: #fff;
  img {
    margin-left: 3px;
    margin-right: 13px;
    width: 18px;
    height: 18px;
  }
}

.el-menu-vertical-demo {
  background-color: #001323;
  color: var(--el-text-color-primary);
  line-height: 260px;
  border-right: none;
  height: calc(100vh);
  overflow-y: scroll;
}

.el-menu-vertical-demo::-webkit-scrollbar {
  display: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>