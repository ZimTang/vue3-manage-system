<template>
  <el-form
    ref="Form"
    :model="formData"
    label-width="120px"
    label-position="center"
    :rules="rules"
  >
    <el-form-item label="头像：">
      <img
        src="../assets/img/avatar.jpeg"
        class="avatar"
        alt=""
        @click="showCropper"
      />
      <el-dialog
        v-model="dialogVisible"
        title="图片裁切"
        width="30%"
        :before-close="handleClose"
      >
        <!-- 图片裁切插件 -->
        <VuePictureCropper
          :boxStyle="{
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f8f8',
            margin: 'auto',
          }"
          img="http://localhost:3000/src/assets/img/avatar.jpeg"
          :options="{
            viewMode: 1,
            dragMode: 'crop',
            aspectRatio: 16 / 9,
          }"
        />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button @click="clear">清除</el-button>
            <el-button @click="reset">重置</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >裁剪</el-button
            >
          </span>
        </template>
      </el-dialog>

      <span class="desc">{{ '个人简介：' + desc }}</span>
    </el-form-item>
    <el-form-item label="用户名：">
      <span>{{ username }}</span>
    </el-form-item>
    <el-form-item label="旧密码：" prop="oldPwd">
      <el-input v-model="formData.oldPwd" show-password></el-input>
    </el-form-item>
    <el-form-item label="新密码：" prop="newPwd">
      <el-input v-model="formData.newPwd" show-password></el-input>
    </el-form-item>
    <el-form-item label="个人简介：">
      <el-input v-model="formData.desc"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import VuePictureCropper, { cropper } from 'vue-picture-cropper/dist/esm'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    // 用户名
    const username = localStorage.getItem('username')
    // 显示头像裁切
    const showCropper = () => {
      dialogVisible.value = true
    }
    const Form = ref(null)
    // dialog的显示
    const dialogVisible = ref(false)
    // 表单数据
    const formData = reactive({
      desc: '打工人打工魂',
      oldPwd: '',
      newPwd: '',
    })
    // 表单规则
    const rules = {
      oldPwd: [
        {
          required: true,
          message: '请输入旧密码',
          trigger: 'blur',
        },
      ],
      newPwd: [
        {
          required: true,
          message: '请输入新密码',
          trigger: 'blur',
        },
      ],
    }
    // 个人简介
    const desc = ref('')
    desc.value = formData.desc
    // 关闭dialog的回调
    const handleClose = () => {
      dialogVisible.value = false
    }

    // 保存按钮的回调
    const onSubmit = () => {
      Form.value.validate(valid => {
        if (valid) {
          ElMessage({
            message: '保存成功',
            type: 'success',
          })
          desc.value = formData.desc
        } else {
          return false
        }
      })
    }

    // 图像裁切的清空按钮的回调
    const clear = () => {
      cropper.clear()
    }
    // 图像裁切的重置按钮的回调
    const reset = () => {
      cropper.reset()
    }

    return {
      Form,
      username,
      showCropper,
      dialogVisible,
      formData,
      handleClose,
      onSubmit,
      clear,
      reset,
      rules,
      desc,
    }
  },
  components: {
    VuePictureCropper,
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.avatar:hover {
  cursor: pointer;
}
.desc {
  margin-left: 50px;
}
</style>
