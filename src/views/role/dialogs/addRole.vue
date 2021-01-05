<template>
  <!--新增角色 -->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      title="新建角色"
      width="420px"
      :before-close="handleClose"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="角色名称">
          <el-input
            v-model="form.name"
            placeholder="请输入商品包装唯一码"
            size="small"
          />
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="form.one"
            placeholder="请输入商品包装唯一码"
            size="small"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="cancel" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small">建立</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AddRole",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
      cancel(){
          this.dialogVisible = false;
      }
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>