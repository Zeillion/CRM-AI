<template>
  <!--  待确认下的详情弹窗-->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="820px"
      :before-close="handleClose"
      :show-close="false"
      :close-on-click-modal="false"
    >
     <div class="title flex_vertical">建档数据</div>
    
      <!--建档数据 -->

      <div>
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
        <div class="middle">
          <div class="bold" style="color: #222; line-height: 27px">
            商品图片：
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
        <el-form ref="form" :model="form" label-width="120px" class="detail_dialog">
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
             <el-form-item label="AI ID" class="item">
              <el-input
                v-model="form.four"
                size="small"
              />
            </el-form-item>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button  @click="handleClose" size="small" type="primary">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { handleTab } from "@/minxin/tab";
export default {
  name: "detailDialog",
  components: {},
  mixins: [handleTab],
  props: {},
  data() {
    return {
      dialogVisible: false,
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
    handleClose() {
      this.dialogVisible = false;
    },
    confirm() {},
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
</style>