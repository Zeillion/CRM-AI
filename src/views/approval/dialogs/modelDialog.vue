<template>
  <!--  完成建模弹窗-->
  <div>
    <el-dialog
      title="请输入 AI ID"
      :visible.sync="dialogVisible"
      width="420px"
      :before-close="handleClose"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form :model="form" ref="form">
        <el-form-item
          prop="id"
          :rules="[{ required: true, message: '请输入AI ID' }]"
        >
          <el-input
            placeholder="多个ID请用逗号分隔"
            v-model="form.id"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button plain @click="handleClose" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small">确定</el-button>
      </span></el-dialog
    >
  </div>
</template>

<script>
export default {
  name: "ModelDialog",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      activeName: "first",
      img: require("../../../assets/images/beer.jpeg"),
      form: {
        id: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$refs["form"].resetFields();
    },
    confirm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.$confirm(`是否确认完成建模，产品为可识别状态？`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }).then(() => {
            this.$message({
              type: "success",
              message: "操作成功!",
            });
            this.handleClose();
          });
        } else {
          return false;
        }
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.middle {
  margin-top: 20px;
}
.img_block {
  display: flex;
  flex-wrap: wrap;
  .img_box {
    width: 48%;
  }
}
</style>