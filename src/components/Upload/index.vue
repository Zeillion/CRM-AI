<template>
  <!-- 上传图片弹窗 -->
  <div>
    <el-dialog
      :visible.sync="uploadShow"
      title="上传图片"
      width="420px"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <div>请上传相关SKU图片</div>
      <el-upload
        class="upload-demo"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary" plain>点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          <!-- 只能上传jpg/png文件，且不超过500kb -->
        </div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="closeUpload" size="small">关闭</el-button>
        <el-button type="primary" @click="submitUpload" size="small"
          >提交</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "upload",
  components: { },
  props: {},
  data() {
    return {
      uploadShow: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    closeUpload() {
      this.uploadShow = false;
    },
    submitUpload() {
      this.uploadShow = false;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>