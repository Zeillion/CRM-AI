<template>
  <!--  完成建模弹窗-->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="600px"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="上报数据" name="first">
          <!-- 状态-->
          <div class="flex_wrapper">
            <div class="bold">状态:</div>
            <div class="">
              待建档-新申请/被驳回
              <div>原因：商品全称字段填写有误</div>
            </div>
            <div>申请时间：2020-12-12 14:00:00</div>
          </div>
          <!--  商品上报详情-->
          <div class="line middle">
            <div class="bold">商品上报详情</div>
          </div>
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
          <div class="line middle">
            <div class="bold">人员信息</div>
          </div>
          <div>申请人：湖南大区-张三</div>
          <div>申请人手机号：150340340349</div>
        </el-tab-pane>
        <!--  -->
        <el-tab-pane label="建档数据" name="second">
          <div class="flex_wrapper">
            <div class="bold">状态:</div>
            <div class="">
              待建档-新申请/被驳回
              <div>原因：商品全称字段填写有误</div>
            </div>
            <div>申请时间：2020-12-12 14:00:00</div>
          </div>
          <div class="bold line">
            商品图片：上一次保存时间：2020-12-11 21:00:00
          </div>
          <!-- 图片 -->
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

          <!-- 商品信息 -->
          <div class="bold line">商品信息：</div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="商品包装唯一码">
              <el-input
                v-model="form.one"
                placeholder="请输入商品包装唯一码"
                size="small"
              />
            </el-form-item>
            <el-form-item label="条形码">
              <el-input
                v-model="form.two"
                placeholder="请输入条形码"
                size="small"
              />
            </el-form-item>
            <el-form-item label="包装码">
              <el-input
                v-model="form.three"
                placeholder="请输入包装码"
                size="small"
              />
            </el-form-item>
            <el-form-item label="商品全称">
              <el-input
                v-model="form.four"
                placeholder="请输入商品全称"
                size="small"
              />
            </el-form-item>
            <el-form-item label="商品简称">
              <el-input
                v-model="form.five"
                placeholder="请输入商品简称"
                size="small"
              />
            </el-form-item>

            <el-form-item label="商品类型">
              <el-select
                v-model="form.type"
                placeholder="商品类型"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品品牌">
              <el-select
                v-model="form.brand"
                placeholder="产品品牌"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="糖度">
              <el-select
                v-model="form.tangdu"
                placeholder="请选择糖度"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="包装形式">
              <el-select
                v-model="form.package"
                placeholder="包装形式"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="基本单位">
              <el-select
                v-model="form.unit"
                placeholder="请选择基本单位"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="保质期">
              <el-input
                v-model="form.four"
                placeholder="请输入商品全称"
                size="small"
              />
            </el-form-item>
            <el-form-item label="保质期（天）">
              <el-input
                v-model="form.four"
                placeholder="请输入商品全称"
                size="small"
              />
            </el-form-item>
            <div class="line"></div>
            <el-form-item label="外包装形式">
              <el-select
                v-model="form.duration"
                placeholder="包装形式"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品档次">
              <el-select
                v-model="form.duration"
                placeholder="包装形式"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品工艺">
              <el-select
                v-model="form.duration"
                placeholder="包装形式"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品特征">
              <el-select
                v-model="form.duration"
                placeholder="包装形式"
                size="small"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品上市时间">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <div class="line"></div>
            <el-form-item label="AI ID">
               <el-input
                v-model="form.AI"
                placeholder="支持多个输入，逗号间隔"
                size="small"
              />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer" v-show="activeName == 'second'">
        <el-button @click="handleClose" size="small">关闭</el-button>
        <el-button type="primary" @click="confirm" size="small"
          >完成建模</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ModelDialog",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      activeName: "first",
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
        AI:""
      },
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
.middle {
  margin-top: 20px;
}
.img_block {
  display: flex;
  flex-wrap: wrap;
  .img_box {
    width: 48%;
  }
}
</style>