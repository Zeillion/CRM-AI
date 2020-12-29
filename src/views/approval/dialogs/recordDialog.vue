<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="820px"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div class="title flex_vertical">操作记录</div>

      <div class="sub_title">商品名称：雪花啤酒脸谱300ml</div>
      <div class="sub_title">条形码：3874927429</div>
      <el-table
        class="table"
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{ 'background-color': '#EFF2F7', color: '#1F2D3D' }"
      >
        <el-table-column prop="event" label="事件" width="240" align="center">
        </el-table-column>
        <el-table-column prop="time" label="时间" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="操作人" align="center">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="small" type="primary">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          event: "【申请新增】",
          time: "2020-11-23 21:23",
          name: "天津地区-张三",
        },
        {
          event: "【通过审批】",
          time: "2020-11-23 21:23",
          name: "天津地区-张三",
        },
        {
          event: "【完成建档】",
          time: "2020-11-23 21:23",
          name: "Trax-李四",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
  },
  mounted() {},
};
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

.table{
  margin-top:20px;
}
</style>