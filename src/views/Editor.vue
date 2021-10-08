<template>
  <div class="editor-container">
    <p class="tips">
      wangEditor：轻量级 web 富文本编辑器，配置方便，使用简单。 访问地址：
      <a href="https://www.wangeditor.com/doc/">wangEditor</a>
    </p>
    <div id="editor"></div>
    <el-button type="primary" style="margin-top: 20px" @click="submit"
      >提交</el-button
    >
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, reactive } from 'vue-demi'
import E from 'wangeditor'
export default {
  name: 'Editor',
  setup() {
    let editor
    const content = reactive({
      html: '',
      text: '',
    })
    onMounted(() => {
      // 创建编辑器
      editor = new E(document.getElementById('editor'))
      // 调整编辑器层级
      editor.config.zIndex = 1
      editor.create()
    })
    onBeforeUnmount(() => {
      editor.destroy()
      editor = null
    })
    // 提交按钮的回调
    const submit = () => {
      content.html = editor.txt.html()
      console.log(content.html)
    }
    return {
      editor,
      content,
      submit,
    }
  },
}
</script>

<style scoped lang="scss">
.editor-container {
  position: relative;
  margin: 0 auto;
  height: 450px;
  #editor {
    position: absolute;
  }
}
.tips {
  background-color: #eef1f6;
  text-indent: 15px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
  margin-top: 20px;
  a {
    color: #20a0ff;
  }
}
</style>
