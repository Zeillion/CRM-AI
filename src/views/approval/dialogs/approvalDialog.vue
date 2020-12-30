<template>
  <div>
    <!-- 待审核下的操作弹窗 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="820px"
      :before-close="closeModel"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div class="body">
        <div class="top">
          <div class="bold flex_wrapper" style="line-height: 27px" >
           <div style="color:#1F2D3D">商品上报详情:</div> 
            <span style="color:#FF5664;margin-left:10px" class="flex">待审批</span>
            <div style="color:#8492A6">申请时间：2020-12-12 14:00:00</div>
          </div>
        </div>
        <div class="middle" style="color: #1f2d3d; line-height: 27px">
          <div>条形码：834729873947</div>
          <div>商品名称：雪花具象脸谱8.0*P330ml罐纸箱</div>
          <div class="line"></div>
          <div class="bold" style="color: #222; font-size: 16px">上报图：</div>
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
        <div class="line"></div>
        <div class="bottom">
          <div class="bold" style="color: #444">人员信息:</div>
        </div>
        <div style="line-height: 27px; color: #444">
          <div>申请人：湖南大区-张三</div>
          <div>申请人手机号：150340340349</div>
        </div>
        <div class="line"></div>
          <div class="bold other" >该条形码其他产品</div>
          <div class="flex_wrapper">
            <!-- 图片wrapper -->
            <div class="img_wrapper flex_vertical">
              <el-image :src="img">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span>SKU!</span>
            </div>

            <div class="img_wrapper flex_vertical">
              <el-image :src="img">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span>SKU2</span>
            </div>

            <div class="img_wrapper flex_vertical">
              <el-image :src="img">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span>SKU3</span>
            </div>

            <div class="img_wrapper flex_vertical">
              <el-image :src="img">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span>SKU4</span>
            </div>
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
    closeModel() {
      this.dialogVisible = false;
    },
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
      ).then(() => {
        this.$message({
          type: "success",
          message: "操作成功!",
        });
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.img_wrapper {
  margin: 4px;
  width: 160px;
  height: 160px;
  // background: #F5F7FA;
  span {
    color: #444444;
    font-size: 14px;
  }
}
.body{
  margin-top:-40px;
  .top{
    font-size: 16px;
  }
  .middle{
    margin-top:20px;
  }
  .bottom{
    .bold{
      font-size: 16px;
      margin-bottom:15px;
    }
  }
  .other{
    color:#444;
    font-size: 16px;
    margin:20px 0;
  }
}
</style>