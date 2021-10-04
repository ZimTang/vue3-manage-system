<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url("./assets/css/normalize.css");
@import url("./assets/css/base.css");
.app {
  height: 100vh;
}
</style>