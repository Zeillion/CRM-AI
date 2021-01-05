<template>
  <!-- 分配角色 -->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      title="分配角色"
      width="420px"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <div class="content">
        <div>登录名： zhangsan</div>
        <div>姓名：张三</div>
        <div>手机号码： 18082828282</div>
        <div>工号：0000001</div>
        <div>
          角色：
          <el-select v-model="value" placeholder="请选择" size="small">
            <el-option
              v-for="item in roles"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="cancel" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small">确定</el-button>
      </span></el-dialog
    >
  </div>
</template>

<script>
export default {
  name: "DistributeRole",
  components: {},
  props: {},
  data() {
    return {
      value: "",
      dialogVisible: false,
      roles: [
        {
          value: "选项1",
          label: "大区管理员",
        },
        {
          value: "选项2",
          label: "大区管理员",
        },
        {
          value: "选项3",
          label: "大区管理员2",
        },
      ],
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
.content{
    color:#222;
    font-size: 14px;
    line-height: 27px;
    margin-top:-20px;
}
</style>