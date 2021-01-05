<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      :title="title"
      width="420px"
      :before-close="handleClose"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="菜单编号">
          <el-input placeholder="请输入菜单编号" size="small"></el-input>
        </el-form-item>
        <el-form-item label="菜单路径">
          <el-input placeholder="请输入菜单路径" size="small"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="cancel" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HandleMenu",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      title: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    cancel() {
      this.dialogVisible = false;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>