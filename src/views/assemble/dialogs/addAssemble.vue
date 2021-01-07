<template>
  <!-- 新增组合 -->
  <div>
    <el-dialog
      title="创建组合"
      :visible.sync="dialogVisible"
      width="420px"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <el-form ref="form" :model="form" label-width="70px" style="margin-top:-20px">
        <el-form-item label="组合名称">
          <el-input
            placeholder="请输入组合名称"
            size="small"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注说明">
          <el-input
            placeholder="请输入备注说明"
            size="small"
            v-model="form.tip"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="tip">*组合和产品不能同时存在同一个集合下</div>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="handleClose" size="small">取消</el-button>
        <el-button @click="confirm" size="small" type="primary"
          >创建</el-button
        >
      </span></el-dialog
    >
  </div>
</template>

<script>
export default {
  name: "AddAssemble",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        tip: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
      /**取消 */
    handleClose() {
      this.dialogVisible = false;
    },
    /**创建 */
    confirm(){}
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.tip {
  color: #fe934f;
  font-size: 14px;
}
</style>