<template>
  <!-- 添加商品弹窗-->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false"
      class="add_product"
    >
      <div class="title flex_vertical">添加商品</div>
      <!-- 搜索栏 -->
      <div class="search_box">
        <el-form ref="form" :model="form" label-width="0px">
          <!-- 搜索按钮组 -->
          <div class="flex_container">
            <el-form-item>
              <el-input
                v-model="form.name"
                placeholder="条形码/商品全称"
                size="mini"
              />
            </el-form-item>
            <div class="flex">
              <el-form-item>
                <el-button
                  type="primary"
                  @click="goSearch"
                  size="mini"
                  class="btn"
                  icon="el-icon-search"
                  >搜索</el-button
                >
              </el-form-item>
            </div>
          </div>
          <!-- 下拉选项组 -->
          <div class="flex_container">
            <el-form-item class="flex_item">
              <el-select v-model="form.type" placeholder="商品类型" size="mini">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="flex_item">
              <el-select
                v-model="form.brand"
                placeholder="商品品牌"
                size="mini"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="flex_item">
              <el-select
                v-model="form.package"
                placeholder="包装形式"
                size="mini"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="flex_item">
              <el-select
                v-model="form.package"
                placeholder="映射状态"
                size="mini"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="flex_item flex">
              <el-select v-model="form.add" size="mini">
                <el-option label="" value="全部"></el-option>
                <el-option label="已添加" value="已添加"></el-option>
                <el-option label="未添加" value="未添加"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="flex_item">
              <el-button @click="bactchAdd" size="mini" class="btn" plain
                >批量添加</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>

      <!-- 表格 -->
      <div class="table">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          border
          :header-cell-style="{
            background: '#EBEDF3',
            color: '#444',
            border: 0,
          }"
          :cell-style="cellStyle"
          size="mini"
        >
          <el-table-column
            type="selection"
            :selectable="selectable"
          ></el-table-column>
          <el-table-column prop="img" label="24位图" fixed="left">
          </el-table-column>
          <el-table-column
            prop="product"
            label="商品全称"
            fixed="left"
            width="120"
          >
          </el-table-column>
          <el-table-column prop="barCode" label="条形码"> </el-table-column>
          <el-table-column prop="packageCode" label="外观序号">
          </el-table-column>
          <el-table-column prop="type" label="商品类型"> </el-table-column>
          <el-table-column prop="isSelf" label="本竞品"> </el-table-column>
          <el-table-column prop="brand" label="商品品牌"> </el-table-column>
          <el-table-column prop="packageType" label="包装形式">
          </el-table-column>
          <el-table-column prop="status" label="映射状态"> </el-table-column>
          <el-table-column prop="time" label="新增时间"> </el-table-column>

          <el-table-column label="操作" width="120">
            <template slot-scope="{ row }">
              <el-button size="small" type="text" @click="showDetail">
                <span class="deep_blue_btn">详情</span>
              </el-button>
              <el-button size="small" type="text" @click="add">
                {{ row.hasAdded ? "已添加" : "添加" }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="tip">* 集合和产品不能同时存在在同一个集合下；</div>
        <Pagination
          v-show="total > 9"
          :total="total"
          :limit.sync="pageSize"
          :page.sync="pageNumber"
          @pagination="getData"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="mini" type="primary"
          >关闭</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "addProduct",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      total: 0,
      pageSize: 10,
      pageNumber: 1,
      cellStyle: {
        color: "#000",
      },
      form: {
        keyword: "",
        type: "",
        brand: "",
        package: "",
        add: "",
      },
      tableData: [
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
          hasAdded: true,
        },
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
          hasAdded: false,
        },
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
          hasAdded: false,
        },
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
          hasAdded: false,
        },
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
          hasAdded: true,
        },
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
          hasAdded: true,
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    /**取消 */
    handleClose() {
      this.dialogVisible = false;
    },
    /**是否可选 */
    selectable(row) {
      return row.hasAdded ? false : true;
    },
    /**获取商品列表 */
    getData() {},
    /**添加商品 */
    add() {
      this.$message.success("添加成功");
    },
    /**搜索 */
    goSearch(){}
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.title {
  background-color: #eff2f7;
  width: 100%;
  height: 44px;
  color: #222222;
  justify-content: center;
  font-weight: bold;
}

.search_box {
  margin-left: 20px;
  margin-top: 20px;
}
.table {
  margin: 20px;
}
.tip {
  color: #ff713e;
  font-size: 12px;
  margin-top: 20px;
}
</style>
<style lang="scss">
.add_product {
  .el-dialog__header {
    padding: 0 !important;
  }

  .el-dialog__body {
    padding: 0 !important;
  }

  .el-form-item {
    margin-bottom: 5px;
  }
}
</style>