<template>
  <div>
    <!-- 驳回弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="450px"
      :before-close="handleClose"
      append-to-body
      :show-close="false"
    >
      <div class="content">
        <div class="sub">请填写驳回新增【{{ target }}】的原因</div>
        <div class="flex_wrapper">
          <div class="label" v-if="status == 3">驳回至:</div>
          <div>
            <el-select
              v-model="value"
              placeholder="请选择"
              size="small"
              class="select"
              style="width:100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="value"
              placeholder="快捷回复"
              size="small"
              class="select"
              v-if="status == 3"
              style="width:100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-input
              type="textarea"
              :autosize="{minRows:4,maxRows:6}"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input>
          </div>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "rejectDialog",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      target: "",
      textarea: "",
      status:1,//1：待审批，2:待建档，3待确认，4待建模
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
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
.content {
  margin-top: -20px;
  .sub {
    color: #222;
    font-size: 14px;
    margin-bottom: 18px;
  }
  .label {
    color: #1f2d3d;
    font-size: 14px;
    width: 80px;
    margin-right: 10px;
    white-space: nowrap;
  }
  .select {
    margin-bottom: 18px;
  }
 
}
</style>
