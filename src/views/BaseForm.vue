<template>
  <el-form ref="Form" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="表单名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="选择城市" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择">
        <el-option label="上海" value="shanghai"></el-option>
        <el-option label="北京" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="大学级联">
      <el-cascader
        placeholder="请选择"
        v-model="value"
        :options="options"
        clearable
        @change="handleChange"
      ></el-cascader>
    </el-form-item>
    <el-form-item label="日期时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="选择开关" prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="多选框" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="利物浦" name="type" checked></el-checkbox>
        <el-checkbox label="曼联" name="type"></el-checkbox>
        <el-checkbox label="曼城" name="type"></el-checkbox>
        <el-checkbox label="切尔西" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="单选框">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="高难度"></el-radio>
        <el-radio label="低难度"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文本框">
      <el-input v-model="ruleForm.desc" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">提交</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import { toRefs, reactive, ref } from 'vue'
export default {
  name: 'BaseForm',
  setup() {
    // 级联选择器配置
    const state = reactive({
      value: [],
      options: [
        {
          value: '上海',
          label: '上海',
          disabled: true,
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency',
                },
                {
                  value: 'feedback',
                  label: 'Feedback',
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency',
                },
                {
                  value: 'controllability',
                  label: 'Controllability',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation',
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation',
                },
              ],
            },
          ],
        },
        {
          value: '重庆',
          label: '重庆',
          children: [
            {
              value: '渝中区',
              label: '渝中区',

            },
            {
              value: '巴南区',
              label: '巴南区',
              children: [
                {
                  value: '重庆工商大学',
                  label: '重庆工商大学',
                },
                {
                  value: '重庆工程学院',
                  label: '重庆工程学院',
                }
              ],
            },
          ],
        },
        {
          value: '北京',
          label: '北京',
          children: [
            {
              value: '北京大学',
              label: '北京大学',
            },
            {
              value: '清华大学',
              label: '清华大学',
            },
          ],
        },
      ],
    })
    // 处理级联选择器的回调
    const handleChange = (value) => {
      console.log(value)
    }
    // 表单字段
    const ruleForm = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: true,
      type: [],
      resource: 'Venue',
      desc: '',
    })
    const Form = ref(null)
    // 表单提交的回调
    const submitForm = () => {
      Form.value.validate((valid) => {
        if (valid) {
          ElMessage({
            type: 'success',
            message: '提交成功'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    // 重置表单的回调
    const resetForm = () => {
      Form.value.resetFields()
    }
    // 表单规则
    const rules = reactive({
      name: [
        {
          required: true,
          message: '请输入表单名称',
          trigger: ['change', 'blur'],
        },
      ],
      region: [
        {
          required: true,
          message: '请选择城市',
          trigger: 'change',
        },
      ],
      date1: [
        {
          type: 'date',
          required: true,
          message: '请选择日期',
          trigger: 'change',
        },
      ],
      date2: [
        {
          type: 'date',
          required: true,
          message: '请选择时间',
          trigger: 'change',
        },
      ],
      type: [
        {
          type: 'array',
          required: true,
          message: '请选择一个球队',
          trigger: 'change',
        },
      ],
    })
    return {
      ...toRefs(state),
      handleChange,
      ruleForm,
      rules,
      Form,
      submitForm,
      resetForm,
    }
  },
}
</script>