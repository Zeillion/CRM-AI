<template>
  <div>
    <!-- 操作记录 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="820px"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div class="title flex_vertical">操作记录</div>
      <el-table
        class="table"
        :data="tableData"
        style="width: 100%"
        border
        v-loading="loading"
        :header-cell-style="{ 'background-color': '#EFF2F7', color: '#1F2D3D' }"
      >
        <el-table-column prop="remark" label="事件" width="240" align="center">
        </el-table-column>
        <el-table-column prop="createTime" label="时间" width="180" align="center">
        </el-table-column>
        <el-table-column prop="createPerson" label="操作人" align="center">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="small" type="primary">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { getDictDataLogs } from '@/api/dictionaries'

  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        dialogVisible: false,
        loading: false,
        tableData: [
          // {
          //   event: '【增加】了字段：【渠道】',
          //   time: '2020-11-23 21:23',
          //   name: '超级管理员'
          // },
          // {
          //   event: '在字段【本竞品】中，【增加】了值：【本品】',
          //   time: '2020-11-23 21:23',
          //   name: '超级管理员'
          // },
          // {
          //   event: '【停用】了【本竞品】值中【本品】',
          //   time: '2020-11-23 21:23',
          //   name: '超级管理员'
          // }
        ]
      }
    },
    watch: {
      dialogVisible(newVal, oldVal) {
        if (newVal == true) {
          this.getAllLogList()
        }
      }
    },
    computed: {},
    methods: {
      async getAllLogList() {
        let that = this
        that.loading = true

        let result = await getDictDataLogs({})
        let logList = result ? result : []
        that.tableData = logList

        setTimeout(() => {
          that.loading = false
        }, 300)
      },
      handleClose() {
        this.dialogVisible = false
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  .title {
    background-color: #eff2f7;
    width: 820px;
    height: 44px;
    color: #222222;
    justify-content: center;
    font-weight: bold;
    margin-top: -60px;
    margin-left: -20px;
  }

  .sub_title {
    font-size: 14px;
    color: #1f2d3d;
    margin-top: 14px;
  }

  .table {
    margin-top: 20px;
  }
</style>
