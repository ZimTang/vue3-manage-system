<template>
  <div class="i18n-container">
    <div class="msg">
      <p>
        {{ t('message1') }}
      </p>
      <p>
        {{ t('message2') }}
      </p>
    </div>
    <div class="change">
      <el-button type="primary" @click="changeLan">切换语言</el-button>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    let { t, locale } = useI18n()
    const changeLan = () => {
      locale.value === 'zh-CN'
        ? (locale.value = 'en-US')
        : (locale.value = 'zh-CN')
      console.log(locale)
    }
    return {
      t,
      changeLan,
    }
  },
}
</script>

<style scoped lang="scss">
.i18n-container {
  .msg {
    height: 50px;
    line-height: 50px;
  }
  .change {
    margin-top: 100px;
  }
}
</style>
