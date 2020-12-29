<template>
  <!-- 建档弹窗-->
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
      </div>
      <!--建档数据 -->
      <div v-show="activeName">
        <div class="flex_wrapper">
          <div class="bold">状态:</div>
          <div class="">
            待建档-新申请/被驳回
            <div>原因：商品全称字段填写有误</div>
          </div>
          <div>申请时间：2020-12-12 14:00:00</div>
        </div>

        <el-collapse v-model="collapseName" accordion>
          <el-collapse-item title="商品图片" name="1">
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
          </el-collapse-item>
          <el-collapse-item title="商品信息" name="2">
            <!-- 商品信息 -->
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
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </div>
      <span slot="footer" class="dialog-footer" v-show="activeName == 'second'">
        <el-button @click="handleClose" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small"
          >保存并提交</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "FileDialog",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      activeName: 0,
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
      this.$confirm(`是否确认完成建模，产品为可识别状态？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!",
          });
          this.handleClose();
        })
        .catch(() => {
          //   this.$message({
          //     type: 'info',
          //     message: '已取消删除'
          //   });
        });
    },
    // 切换tab
    changeTab(data) {
      this.activeName = data;
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

.self_tab {
  width: 820px;
  margin-top: -60px;
  margin-left: -20px;
  margin-bottom: 20px;
}
</style>