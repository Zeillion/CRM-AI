<template>
  <!--  新增建党sku-->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="820px"
      :before-close="handleClose"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <!--建档数据 -->
      <div>
        <div class="title flex_vertical">建档数据</div>
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
          <div class="form" style="margin-top: 20px">
            <el-form-item label="外包装形式" class="item">
              <el-select
                v-model="form.duration"
                placeholder="请选择外包装形式"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品特征" class="item">
              <el-select
                v-model="form.duration"
                placeholder="请选择产品特征"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品档次" class="item">
              <el-select
                v-model="form.duration"
                placeholder="请选择产品档次"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品上市时间" class="item">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期"
                size="small"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="产品工艺" class="item">
              <el-select
                v-model="form.duration"
                placeholder="请选择产品工艺"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="handleClose" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small"
          >保存</el-button
        >
        
      </span>
    </el-dialog>
    <reject-dialog ref="reject"></reject-dialog>
  </div>
</template>

<script>
import { handleTab } from "@/minxin/tab";
import rejectDialog from "./rejectDialog";
export default {
  name: "addFile",
  components: { rejectDialog },
  mixins: [handleTab],
  props: {},
  data() {
    return {
      dialogVisible: false,
      target: "雪花300",
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
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleReject() {
      this.handleClose();
      this.$refs.reject.dialogVisible = true;
      this.$refs.reject.target = this.target;
      this.$refs.reject.status = 3;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    upload() {

    },

    // 保存并通过
    confirm() {
      this.$confirm(
        `是否确定【${this.target}】的建档申请？确认后该商品将进入建模步骤`,
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
        this.handleClose();
      });
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
.middle {
  font-size: 16px;
  margin-bottom: 8px;
  margin-top:10px;
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