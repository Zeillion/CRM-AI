<template>
  <div>
    <el-dialog
      title="操作记录"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <div>商品名称：雪花啤酒脸谱300ml</div>
      <div>条形码：3874927429</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="event" label="事件" width="180">
        </el-table-column>
        <el-table-column prop="time" label="时间" width="180">
        </el-table-column>
        <el-table-column prop="name" label="操作人"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="small">关闭</el-button>
        
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
</style>