<template>
  <!-- 建档弹窗-->
  <div>
    <div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="820px"
        :before-close="handleClose"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <div class="self_tab">
          <div
            class="left tab"
            :class="activeName == 0 ? 'active' : ''"
            @click="changeTab(0)"
          >
            上报数据
          </div>
          <div
            class="right tab"
            :class="activeName == 1 ? 'active' : ''"
            @click="changeTab(1)"
          >
            建档数据
          </div>
        </div>

        <!-- 上报数据 -->
        <div v-show="!activeName">
          <!-- 状态-->
          <div class="flex_wrapper top">
            <div>
              <div>
                <span class="bold" style="color: #1f2d3d">状态：</span>
                <span class="red_text"> 待建档-新申请/被驳回</span>
              </div>

              <div class="red_text">原因：商品全称字段填写有误</div>
            </div>

            <div class="gray_text">申请时间：2020-12-12 14:00:00</div>
          </div>

          <div class="line"></div>
          <!--  商品上报详情-->
          <div class="middle">
            <div class="bold" style="color: #222; line-height: 27px">
              商品上报详情
            </div>
          </div>
          <div style="color: #1f2d3d; line-height: 27px">
            <div>条形码：834729873947</div>
            <div>商品名称：雪花具象脸谱8.0*P330ml罐纸箱</div>
            <div class="line"></div>
            <div class="bold" style="color: #222; font-size: 16px">
              上报图：
            </div>
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
          <div class="middle">
            <div class="bold" style="color: #444">人员信息:</div>
          </div>
          <div style="line-height: 27px; color: #444">
            <div>申请人：湖南大区-张三</div>
            <div>申请人手机号：150340340349</div>
          </div>
          <div class="line"></div>
        </div>

        <!--建档数据 -->

        <div v-show="activeName">
          <!-- 状态-->
          <div class="flex_wrapper top">
            <div>
              <div>
                <span class="bold" style="color: #1f2d3d">状态：</span>
                <span class="red_text"> 待建档-新申请/被驳回</span>
              </div>
              <div class="red_text">原因：商品全称字段填写有误</div>
            </div>
            <div class="gray_text">申请时间：2020-12-12 14:00:00</div>
          </div>
          <div class="line"></div>

          <!-- 图片 -->
          <div class="middle flex_wrapper">
            <div class="bold" style="color: #222; line-height: 27px">
              商品图片：
            </div>
            <div>
              <el-button plain size="small" @click="upload">一键上传</el-button>
            </div>
          </div>
          <div class="img_block">
            <!-- img_box -->
            <div class="img_box">
              <div>顶部图</div>
              <div>
                <el-image :src="img">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>

            <div class="img_box">
              <div>底部图</div>
              <div>
                <el-image :src="img">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>

            <div class="img_box">
              <div>生产日期图</div>
              <div>
                <el-image :src="img">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>

            <div class="img_box">
              <div>有效期图</div>
              <div>
                <el-image :src="img">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>

            <div class="img_box">
              <div>条形码图</div>
              <div>
                <el-image :src="img">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>

            <div class="img_box">
              <div>24位图</div>
              <div>
                <el-image :src="img">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
            </div>
          </div>

          <div class="line"></div>
          <!-- 商品信息 -->
          <div class="middle">
            <div class="bold" style="color: #444; margin-top: 10px">
              商品信息:
            </div>
          </div>
          <el-form ref="form" :model="form" label-width="120px">
            <div class="form">
              <el-form-item label="商品包装唯一码" class="item">
                <el-input
                  v-model="form.one"
                  placeholder="请输入商品包装唯一码"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="商品类型" class="item">
                <el-select
                  v-model="form.type"
                  placeholder="商品类型"
                  size="small"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="条形码" class="item">
                <el-input
                  v-model="form.two"
                  placeholder="请输入条形码"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="产品品牌" class="item">
                <el-select
                  v-model="form.brand"
                  placeholder="产品品牌"
                  size="small"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="包装码" class="item">
                <el-input
                  v-model="form.three"
                  placeholder="请输入包装码"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="糖度" class="item">
                <el-select
                  v-model="form.tangdu"
                  placeholder="请选择糖度"
                  size="small"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品全称" class="item">
                <el-input
                  v-model="form.four"
                  placeholder="请输入商品全称"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="容量" class="item">
                <el-select
                  v-model="form.tangdu"
                  placeholder="请选择糖度"
                  size="small"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品简称" class="item">
                <el-input
                  v-model="form.five"
                  placeholder="请输入商品简称"
                  size="small"
                />
              </el-form-item>

              <el-form-item label="包装形式" class="item">
                <el-select
                  v-model="form.package"
                  placeholder="包装形式"
                  size="small"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="保质期" class="item">
                <el-input
                  v-model="form.four"
                  placeholder="请输入商品全称"
                  size="small"
                />
              </el-form-item>

              <el-form-item label="基本单位" class="item">
                <el-select
                  v-model="form.unit"
                  placeholder="请选择基本单位"
                  size="small"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="保质期（天）" class="item">
                <el-input
                  v-model="form.four"
                  placeholder="请输入商品全称"
                  size="small"
                />
              </el-form-item>
            </div>

            <div class="line"></div>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button plain @click="handleClose" size="small">取消</el-button>
          <el-button type="primary" @click="confirm" size="small"
            >保存并提交</el-button
          >
        </span>
      </el-dialog>
      <!-- <reject-dialog ref="reject"></reject-dialog> -->
      <Upload ref="upload" />
    </div>
  </div>
</template>

<script>
import { handleTab } from "@/minxin/tab";
export default {
  name: "FileDialog",
  components: {},
  mixins: [handleTab],
  props: {},
  data() {
    return {
      dialogVisible: false,
      collapseName: "1",
      img: require("../../../assets/images/beer.jpeg"),
      form: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        type: "",
        brand: "",
        tangdu: "",
        package: "",
        duration: "",
        unit: "",
        date: "",
        AI: "",
      },
      name: "xxxx",
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClose() {
      this.$confirm(`是否放弃对${this.name}的建档？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.dialogVisible = false;
      });
    },
    confirm() {
      this.$confirm(`是否确认提交对${this.name}的建档？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          message: "操作成功!",
        });
        this.dialogVisible = false;
      });
    },
    // 一键上传
    upload() {
      this.$refs.upload.uploadShow = true;
    },
  
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.middle {
  font-size: 16px;
  margin-bottom: 8px;
}
.img_block {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .img_box {
    width: 16%;
  }
}
.self_tab {
  width: 820px;
  margin-top: -60px;
  margin-left: -20px;
  margin-bottom: 20px;
}
.top {
  line-height: 27px;
  font-size: 16px;
  .dark_text {
    color: #1f2d3d;
  }
  .red_text {
    color: #ff737e;
  }
  .gray_text {
    color: #8492a6;
  }
}

.img_wrapper {
  margin: 4px;
  width: 160px;
  height: 160px;
  span {
    color: #444444;
    font-size: 14px;
  }
}
</style>