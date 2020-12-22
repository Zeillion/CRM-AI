<template>
  <div>
    <!-- 待审核下的操作弹窗 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <div class="title line">
        <div class="flex_wrapper">
          <div class="bold">商品上报详情：待审批</div>
          <div>申请时间：2020-12-12 12:00:00</div>
        </div>
      </div>
      <!-- 上报详情 -->
      <div>
        <div>条形码：834729873947</div>
        <div>商品名称：雪花具象脸谱8.0*P330ml罐纸箱</div>
        <div>上报图：</div>
        <div class="flex_wrapper">
          <!-- 图片wrapper -->
          <div class="img_wrapper flex_vertical">
            <el-image :src="img">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <span>正面</span>
          </div>

          <div class="img_wrapper flex_vertical">
            <el-image :src="img">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <span>背面</span>
          </div>

          <div class="img_wrapper flex_vertical">
            <el-image :src="img">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <span>侧1</span>
          </div>

          <div class="img_wrapper flex_vertical">
            <el-image :src="img">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <span>侧2</span>
          </div>
        </div>
      </div>
      <!-- 人员信息 -->
      <div class="line">
        <div class="bold">人员信息</div>
      </div>
      <div>申请人：湖南大区-张三 申请人手机号：150340340349</div>
      <!-- 其他产品 -->
      <div class="line">
        <div class="bold">该条形码其他产品</div>
      </div>
      <div class="flex_wrapper">
        <!-- 图片wrapper -->
        <div class="img_wrapper flex_vertical">
          <el-image :src="img">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <span>sku1</span>
        </div>

        <div class="img_wrapper flex_vertical">
          <el-image :src="img">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <span>sku2</span>
        </div>

        <div class="img_wrapper flex_vertical">
          <el-image :src="img">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <span>sku3</span>
        </div>

        <div class="img_wrapper flex_vertical">
          <el-image :src="img">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <span>sku4</span>
        </div>
      </div>
      <reject-dialog ref="reject"></reject-dialog>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="small">驳回</el-button>
        <el-button type="primary" @click="handlePass" size="small">
          通过</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import rejectDialog from "./rejectDialog";
export default {
  name: "approvalDialog",
  components: {
    rejectDialog,
  },
  props: {},
  data() {
    return {
      dialogVisible: false,
      img: require("../../../assets/images/beer.jpeg"),
      target: "雪花-脸谱300ml",
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$refs.reject.dialogVisible = true;
      this.$refs.reject.target = this.target;
    },
    handlePass() {
      this.$confirm(
        `是否通过新增【${this.target}】的申请？确认后将给该产品建档`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          //   this.$message({
          //     type: 'info',
          //     message: '已取消删除'
          //   });
        });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.img_wrapper {
  padding: 5px;
  background: #eeeeee;
  margin: 4px;
}

</style>