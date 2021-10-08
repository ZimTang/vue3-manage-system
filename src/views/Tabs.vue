<template>
  <div class="tabs-container">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
      <el-tab-pane
        :label="'未读消息' + '(' + state.unread.length + ')'"
        name="first"
      >
        <el-table :data="state.unread" style="width: 100%" :show-header="false">
          <el-table-column>
            <template #default="scope">
              <span class="msg">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" width="180" />
          <el-table-column width="100">
            <template #default="scope">
              <el-button
                size="small"
                @click="
                  handleTabs(
                    ['unread', 'readed', 'recycle'],
                    'unread',
                    'readed',
                    scope.$index,
                    state
                  )
                "
                >标为已读</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="primary"
          @click="
            handleTabs(
              ['unread', 'readed', 'recycle'],
              'unread',
              'readed',
              '',
              state,
              true
            )
          "
          >全部标记为已读</el-button
        >
      </el-tab-pane>
      <el-tab-pane
        :label="'已读消息' + '(' + state.readed.length + ')'"
        name="second"
      >
        <el-table :data="state.readed" style="width: 100%" :show-header="false">
          <el-table-column>
            <template #default="scope">
              <span class="msg">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" width="180" />
          <el-table-column width="100">
            <template #default="scope">
              <el-button
                size="small"
                type="danger"
                @click="
                  handleTabs(
                    ['unread', 'readed', 'recycle'],
                    'readed',
                    'recycle',
                    scope.$index,
                    state
                  )
                "
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="danger"
          @click="
            handleTabs(
              ['unread', 'readed', 'recycle'],
              'readed',
              'recycle',
              '',
              state,
              true
            )
          "
          >删除全部</el-button
        >
      </el-tab-pane>
      <el-tab-pane
        :label="'回收站' + '(' + state.recycle.length + ')'"
        name="third"
      >
        <el-table
          :data="state.recycle"
          style="width: 100%"
          :show-header="false"
        >
          <el-table-column>
            <template #default="scope">
              <span class="msg">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" width="180" />
          <el-table-column width="100">
            <template #default="scope">
              <el-button
                size="small"
                @click="
                  handleTabs(
                    ['unread', 'readed', 'recycle'],
                    'recycle',
                    'readed',
                    scope.$index,
                    state
                  )
                "
                >还原</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="danger"
          @click="
            handleTabs(
              ['unread', 'readed', 'recycle'],
              'recycle',
              'unread',
              '',
              state,
              true
            )
          "
          >清空回收站</el-button
        >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import useTabs from '../hooks/useTabs'
import { ElMessage } from 'element-plus'
export default {
  name: 'Tabs',
  setup() {
    const activeName = ref('first')
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    const state = reactive({
      unread: [
        {
          title: '今晚抽奖',
          date: '2016-05-03',
        },
        {
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
          date: '2016-05-02',
        },
      ],
      readed: [
        {
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
          date: '2016-05-02',
        },
      ],
      recycle: [
        {
          title: '今晚抽奖',
          date: '2016-05-02',
        },
      ],
    })

    // tabs栏按钮的回调函数
    const handleTabs = (types, nowType, targetType, index, state, all) => {
      useTabs(types, nowType, targetType, index, state, all)
        ? ElMessage({
            message: '操作成功',
            type: 'success',
          })
        : ElMessage({
            message: '操作失败',
            type: 'error',
          })
    }
    return {
      activeName,
      handleClick,
      state,
      handleTabs,
    }
  },
}
</script>
<style lang="scss" scoped>
.tabs-container {
  position: relative;
  height: calc(100vh - 150px);
  .tabs {
    position: absolute;
    top: 0px;
    left: 15px;
    right: 0;
    bottom: 0;
  }
}
.msg {
  cursor: pointer;
  color: #20a0ff;
}

.el-table {
  margin-bottom: 30px;
}
</style>
