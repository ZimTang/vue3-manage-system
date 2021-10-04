<template>
  <div class="title">
    拖拽上传
  </div>
  <p class="tips">Element Plus自带上传组件。 访问地址： <a href="https://element-plus.org/zh-CN/component/upload.html#drag-to-upload">Element Plus Upload</a></p>
  <el-upload
    class="upload-demo"
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      将文件拖拽到此处，或 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        只能上传 jpg/png 文件，且不超过 500kb
      </div>
    </template>
  </el-upload>
  <div class="title">
    支持裁剪
  </div>
  <p class="tips">vue-picture-cropper：一个基于 cropper.js ，支持 Vue 3.0 的图片裁切工具组件。访问地址：<a href="https://github.com/chengpeiquan/vue-picture-cropper">vue-picture-cropper</a></p>
</template>

<script>
export default {
  name: 'Upload'
}
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
}

.tips {
  background-color: #EEF1F6;
  text-indent: 15px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
  margin-top: 20px;
  a {
    color: #20A0FF;
  }
}

.upload-demo {
  margin-bottom: 30px;
}

</style>