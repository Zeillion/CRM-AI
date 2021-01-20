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
          <div class="bold flex_wrapper" style="line-height: 27px">
            <div style="color: #1f2d3d">商品上报详情:</div>
            <span style="color: #ff5664; margin-left: 10px" class="flex"
              >待审批</span
            >
            <div style="color: #8492a6">
              申请时间：{{ detail ? detail.createTime : "" }}
            </div>
          </div>
        </div>
        <div class="middle" style="color: #1f2d3d; line-height: 27px">
          <div>条形码：{{ detail ? detail.barCode : "" }}</div>
          <div>商品名称：{{ detail ? detail.fullName : "" }}</div>
          <div class="line"></div>
          <div class="bold" style="color: #222; font-size: 16px">上报图：</div>
          <div class="flex_wrapper">
            <!-- 图片wrapper -->
            <div class="img_wrapper flex_vertical">
              <el-image :src="detail ? detail.frontImg : ''">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span>正面</span>
            </div>

            <div class="img_wrapper flex_vertical">
              <el-image :src="detail ? detail.backImg : ''">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span>背面</span>
            </div>

            <div class="img_wrapper flex_vertical">
              <el-image :src="detail ? detail.side1Img : ''">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span>侧1</span>
            </div>

            <div class="img_wrapper flex_vertical">
              <el-image :src="detail ? detail.side2Img : ''">
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
          <div>申请人：{{detail ? detail.createPerson : ''}}</div>
          <div>申请人手机号：{{detail ? detail.contactPhone : ''}}</div>
        </div>
        <div class="line"></div>
        <div class="bold other">该条形码其他产品</div>
        <div class="flex_wrapper">
          <!-- 图片wrapper -->
          <div class="other-sku-main" v-if="detail && detail.otherSku.length">
            <div
              class="img_wrapper flex_vertical"
              :key="'other_' + i"
              v-for="(val, i) in detail.otherSku"
            >
              <el-image :src="val.frontImg">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span>{{ val.shortName }}</span>
            </div>
          </div>
        </div>
      </div>
      <reject-dialog ref="reject" @rejectSuccess="rejectSuccess" :approvalId="detail ? detail.approvalId : ''" :status="1"></reject-dialog>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleReject" size="small" type="info"
          >驳回</el-button
        >
        <el-button type="primary" @click="handlePass" size="small">
          通过</el-button
        >
        <el-button plain @click="dialogVisible = false" size="small">
          关闭</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import rejectDialog from "./rejectDialog";
import {
  approvalPass
} from '@/api/sku';
export default {
  name: "approvalDialog",
  components: {
    rejectDialog,
  },
  props: {
    detail: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    closeModel() {
      this.dialogVisible = false;
    },
    handleReject() {
      this.$refs.reject.dialogVisible = true;
      this.$refs.reject.target = this.detail.fullName;
    },

    // 驳回成功回调
    rejectSuccess() {
      this.$store.dispatch('getSkuTableMessage')
      this.dialogVisible = false;
    },
    // 通过申请
    async handlePass() {
      let that = this;
      this.$confirm(
        `是否通过新增【${this.detail.fullName}】的申请？确认后将给该产品建档`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(async () => {
        await approvalPass({
          approvalId: that.detail.approvalId
        })
        this.$message({
          type: "success",
          message: "操作成功!",
        });
      });
    },
  }
};
</script>
<style lang="scss" scoped>
.other-sku-main {
  display: flex;
  flex-wrap: wrap;
}
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
.body {
  margin-top: -40px;
  .top {
    font-size: 16px;
  }
  .middle {
    margin-top: 20px;
  }
  .bottom {
    .bold {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
  .other {
    color: #444;
    font-size: 16px;
    margin: 20px 0;
  }
}
</style>