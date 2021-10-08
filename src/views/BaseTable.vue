<template>
  <div class="table-container">
    <div class="title">
      <el-select v-model="value" placeholder="地址" style="width: 140px">
        <el-option
          v-for="item in query.address"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input
        v-model="query.name"
        placeholder="用户名"
        style="width: 250px; margin-left: 20px"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 20px"
        >搜索</el-button
      >
    </div>
    <div>
      <el-table
        v-loading="loading"
        :data="tableData"
        class="table"
        border
        header-cell-class-name="table-header"
      >
        <el-table-column prop="id" label="ID" width="70" align="center" />
        <el-table-column prop="name" label="用户名" width="80" align="center" />
        <el-table-column
          prop="money"
          label="账户余额"
          width="90"
          align="center"
        />
        <el-table-column prop="thumb" label="头像" width="90" align="center">
          <template #default="scope">
            <img :src="scope.row.thumb" style="width: 100%" alt />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" align="center" />
        <el-table-column prop="state" label="状态" width="80" align="center">
          <template #default="scope">
            <el-tag :type="scope.row.state === '成功' ? 'success' : 'danger'">{{
              scope.row.state
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="注册时间"
          width="100"
          align="center"
        />
        <el-table-column prop label="操作" width="130" align="center">
          <template #default="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              type="text"
              icon="el-icon-delete"
              style="color: red"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="dialog.dialogFormVisible" width="400px" center>
      <el-form :model="dialog">
        <el-form-item :label-width="30">
          <div class="dialog-title">编辑</div>
        </el-form-item>
        <el-form-item label="用户名" :label-width="80">
          <el-input v-model="dialog.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="80">
          <el-input v-model="dialog.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form-item :label-width="190">
        <el-button @click="dialog.dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmEdit">确认</el-button>
      </el-form-item>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { getTable } from '../apis'
import { ElMessageBox, ElMessage } from 'element-plus'
export default {
  setup() {
    // 获取表格数据
    const tableData = reactive([])
    const loading = ref(true)
    getTable().then(res => {
      console.log(res.data.list)
      setTimeout(() => {
        res.data.list.forEach(item => {
          tableData.push(item)
        })
        loading.value = false
      }, 1000)
    })
    // 搜索的参数
    const query = reactive({
      address: [
        {
          value: '广东省',
          label: '广东省',
        },
        {
          value: '湖南省',
          label: '湖南省',
        },
      ],
      name: '',
    })

    let dialog = reactive({
      name: '',
      address: '',
      dialogFormVisible: false,
    })
    let idx = -1
    // 编辑按钮的回调
    const handleEdit = (index, obj) => {
      dialog.dialogFormVisible = true
      idx = index
      Object.keys(obj).forEach(item => {
        dialog[item] = obj[item]
      })
    }

    const confirmEdit = () => {
      Object.keys(dialog).forEach(item => {
        tableData[idx][item] = dialog[item]
      })
      dialog.dialogFormVisible = false
      ElMessage({
        type: 'success',
        message: `修改第${idx + 1}行成功`,
      })
    }
    // 删除按钮的回调
    const handleDelete = (index, obj) => {
      ElMessageBox.confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        tableData.splice(index, 1)
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
      })
      // .catch(() => {
      // })
    }
    const value = ref('')
    return {
      query,
      value,
      loading,
      tableData,
      handleEdit,
      handleDelete,
      dialog,
      confirmEdit,
    }
  },
}
</script>

<style lang="scss" scoped>
.table-container {
  position: relative;
  height: 560px;
  .table {
    font-size: 14px;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .title {
    display: flex;
    width: 63%;
    margin-bottom: 20px;
  }
  .dialog-title {
    font-size: 23px;
    margin: -20px 0px 10px -10px;
  }
}
</style>
