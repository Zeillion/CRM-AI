<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="820px"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div class="title flex_vertical">新增SKU</div>
      <div class="bold sub">商品上报详情</div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="条形码">
          <el-input
            v-model="form.barCode"
            placeholder="请输入条形码"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input
            v-model="form.shortName"
            placeholder="请输入商品名称"
            size="small"
          ></el-input>
        </el-form-item>
      </el-form>

      <div class="bold sub">上报图</div>
      <div class="flex_wrapper">
        <div class="img_wrapper flex_vertical">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :before-upload="beforeAvatarUpload1"
            action=""
          >
            <img v-if="form.frontImg" :src="form.frontImg" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>正面</span>
        </div>

        <div class="img_wrapper flex_vertical">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action=""
            :before-upload="beforeAvatarUpload2"
          >
            <img v-if="form.backImg" :src="form.backImg" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>背面</span>
        </div>

        <div class="img_wrapper flex_vertical">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action=""
            :before-upload="beforeAvatarUpload3"
          >
            <img v-if="form.side1Img" :src="form.side1Img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>侧1</span>
        </div>

        <div class="img_wrapper flex_vertical">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action=""
            :before-upload="beforeAvatarUpload4"
          >
            <img v-if="form.side2Img" :src="form.side2Img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span>侧2</span>
        </div>
      </div>
      <div class="line" style="margin-top: 50px"></div>

      <!-- 人员信息 -->
      <div class="middle">
        <div class="bold" style="color: #444">人员信息:</div>
      </div>
      <div style="line-height: 27px; color: #444">
        <div>申请人：湖南大区-张三</div>
        <div>申请人手机号：150340340349</div>
      </div>
      <div class="line"></div>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="handleClose" size="small">取消</el-button>
        <el-button @click="handleSubmit" size="small" type="primary"
          >确认</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import _Cos from "@/utils/cos.js";
import { addNewSku } from "@/api/sku";
export default {
  name: "AddSku",
  created() {},
  data() {
    return {
      dialogVisible: false,
      form: {
        frontImg: "",
        backImg: "",
        side1Img: "",
        side2Img: "",
      },
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    beforeAvatarUpload1(e) {
      let that = this;
      _Cos.updateFile(e, e.name).then((res) => {
        that.form.frontImg = "http://" + res.Location;
      });
    },
    beforeAvatarUpload2(e) {
      let that = this;
      _Cos.updateFile(e, e.name).then((res) => {
        that.form.backImg = "http://" + res.Location;
      });
    },
    beforeAvatarUpload3(e) {
      let that = this;
      _Cos.updateFile(e, e.name).then((res) => {
        that.form.side1Img = "http://" + res.Location;
      });
    },
    beforeAvatarUpload4(e) {
      let that = this;
      _Cos.updateFile(e, e.name).then((res) => {
        that.form.side2Img = "http://" + res.Location;
      });
    },

    // 确认提交
    async handleSubmit(isContinue) {
      let form = this.form;
      form['isContinue'] = isContinue ? true : false
      if(!form.barCode) {
        this.errMessage('条形码不能为空');
        return;
      }
      if(!form.shortName) {
        this.errMessage('商品名称不能为空');
        return;
      }
      if(!form.frontImg) {
        this.errMessage('请选择正面照片');
        return;
      }
      if(!form.backImg) {
        this.errMessage('请选择背面照片');
        return;
      }
      if(!form.side1Img || !form.side2Img) {
        this.errMessage('请选择侧面照片');
        return;
      }
      if(!form.backImg) {
        this.errMessage('请选择背面照片');
        return;
      }
      let addSkuResult = await addNewSku(form);
      if(addSkuResult.resultCode) {
        this.sucMessage('新增成功');
        this.dialogVisible = false;
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.title {
  background-color: #eff2f7;
  width: 820px;
  height: 44px;
  color: #222222;
  justify-content: center;
  font-weight: bold;
  margin-top: -60px;
  margin-left: -20px;
}
.sub {
  font-size: 16px;
  color: #222;
  margin: 20px 0;
}
.avatar {
  width: 160px;
  height: 160px;
}

.img_wrapper {
  margin: 4px;
  width: 160px;
  height: 160px;
  span {
    color: #444444;
    font-size: 14px;
    display: inline-block;
    margin-top: 6px;
  }
}
.middle {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>