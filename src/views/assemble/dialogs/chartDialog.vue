<template>
  <!-- 查看效果弹窗 图表 -->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false"
    >
      郭姐提供说明图

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="mini" type="primary">关闭</el-button>
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
    };
  },
  watch: {},
  computed: {},
  methods: {
     /**关闭 */
    handleClose() {
      this.dialogVisible = false;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>