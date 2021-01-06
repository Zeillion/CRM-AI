<template>
  <!-- 印射弹窗 -->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
      :show-close="false"
      :close-on-click-modal="false"
      class="mapping"
    >
      <div class="content">
        <!-- 左侧 -->
        <div class="left_box">
          <div class="title flex_vertical">商品档案库</div>
          <div class="left_content">
            <div class="flex_wrapper search">
              <div class="label">条形码/商品全称：</div>
              <div class="flex">
                <!-- 左侧从首页带出条形码值 -->
                <el-input size="small" v-model="leftValue"></el-input>
              </div>
              <el-button
                type="primary"
                @click="onSubmit"
                size="small"
                class="btn"
                icon="el-icon-search"
                >搜索</el-button
              >
            </div>
            <div class="left_table">
              <el-table
                :data="tableData"
                style="width: 100%"
                :show-header="false"
                size="small"
              >
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="right_box">
          <div class="self_tab">
            <div
              class="left tab"
              :class="activeName == 0 ? 'active' : ''"
              @click="changeTab(0)"
            >
              CRM
            </div>
            <div
              class="right tab"
              :class="activeName == 1 ? 'active' : ''"
              @click="changeTab(1)"
            >
              预留平台位置
            </div>
          </div>
          <div class="right_content" v-show="activeName == 0">
            <div class="flex_wrapper search">
              <div class="label">条形码/商品全称：</div>
              <div class="flex">
                <!-- 右侧从首页带出名称 -->
                <el-input size="small" v-model="leftValue"></el-input>
              </div>
              <el-button
                type="primary"
                @click="onSubmit"
                size="small"
                class="btn"
                icon="el-icon-search"
                >搜索</el-button
              >
            </div>

            <div class="right_table">
              <el-table
                :data="tableData2"
                style="width: 100%"
                :show-header="false"
                size="small"
              >
                <el-table-column>
                  <template slot-scope="{ row }">
                    <div class="data_box">
                      <div v-for="(item, index) in row.data" :key="index">
                        {{ item }}
                      </div>
                    </div>
                    <div class="flex_vertical tri">
                      <div
                        class="self_triangle"
                        :class="[rotate ? 'go' : 'aa']"
                        @click="handleCollapse"
                        ref="triangle"
                      ></div>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <!-- <div>
        <el-button plain @click="cancel" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small">确定</el-button>
      </div> -->
    </el-dialog>
  </div>
</template>

<script>
import { handleTab } from "@/minxin/tab";
export default {
  name: "",
  components: {},
  mixins: [handleTab],
  props: {},
  data() {
    return {
      dialogVisible: false,
      leftValue: "",
      rotate: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      tableData2: [
        {
          data: [
            "唯一码：69123456778",
            "本品品牌名称：雪花",
            "内包装条形码：691234567",
            "产品简称：雪花-脸谱300ml",
            "本品品牌类别：xx",
            "外包装条形码：212123231",
            "外包装条形码：212123231",
            "外包装条形码：212123231",
            "酒精浓度：3",
            "产品档次：高档",
            "产品识别：脸谱",
            "本品工艺：纯生",
            "瓶型：01",
            "瓶色：白瓶",
            "内包装单位：01",
            "内包装形式：卡纸",
            "外包装单位：01",
            "外包装形式：包",
            "品牌属性：全国品牌",
            "头标材料：水晶",
            "身表材质：水晶",
          ],
        },
        {
          data: [
            "唯一码：69123456778",
            "本品品牌名称：雪花",
            "内包装条形码：691234567",
            "产品简称：雪花-脸谱300ml",
            "本品品牌类别：xx",
            "外包装条形码：212123231",
            "外包装条形码：212123231",
            "外包装条形码：212123231",
            "酒精浓度：3",
            "产品档次：高档",
            "产品识别：脸谱",
            "本品工艺：纯生",
            "瓶型：01",
            "瓶色：白瓶",
            "内包装单位：01",
            "内包装形式：卡纸",
            "外包装单位：01",
            "外包装形式：包",
            "品牌属性：全国品牌",
            "头标材料：水晶",
            "身表材质：水晶",
          ],
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    cancel() {
      this.dialogVisible = false;
    },
    /**点击三角形 */
    handleCollapse() {
      this.rotate = !this.rotate;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  .left_box {
    width: 50%;
    border-right: 1px solid #99a9bf;
    .title {
      background-color: #eff2f7;
      width: 100%;
      height: 44px;
      color: #222222;
      justify-content: center;
      font-weight: bold;
    }
    .left_content {
      padding: 20px;

      .left_table {
        border: 1px solid #dfe6ec;
        margin-top: 24px;
      }
    }
  }
  .right_box {
    width: 50%;
    .right_content {
      padding: 20px;

      .right_table {
        border: 1px solid #dfe6ec;
        margin-top: 24px;
        .data_box {
          display: flex;
          flex-wrap: wrap;
          div {
            width: 30%;
            color: #1f2d3d;
            margin-right: 6px;
          }
        }
      }
    }
  }

  .search {
    align-items: center;
    .label {
      font-size: 14px;
      color: #1f2d3d;
    }
    .btn {
      margin-left: 20px;
    }
  }
}
.tri {
  margin-top: 20px;
}

.aa {
  transition: all .5s;
}
.go {
  transform: rotate(-180deg);
  transition: all .5s;
}
</style>
<style lang="scss">
.mapping {
  .el-dialog__header {
    padding: 0 !important;
  }

  .el-dialog__body {
    padding: 0 !important;
  }
}
</style>