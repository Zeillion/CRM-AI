<template>
  <!-- 待建模 -->
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      border
      :header-cell-style="{
        background: '#EBEDF3',
        color: '#444',
        'font-size': '14px',
        border:0
      }"
      :cell-style="cellStyle"
    >
      <el-table-column prop="img" label="24位图" fixed="left">
        <template slot-scope="scope">
          <img class="product-frontImg" :src="scope.row.frontImg" />
        </template>
      </el-table-column>
      <el-table-column prop="fullName" label="商品全称" fixed="left" width="120"></el-table-column>
      <el-table-column prop="barCode" label="条形码"> </el-table-column>
      <el-table-column prop="packingCode" label="包装编号"> </el-table-column>
      <el-table-column prop="type" label="商品类型"> </el-table-column>
      <el-table-column label="本/竞品" prop="isSnow">
        <template slot-scope="scope">
          <span>{{scope.row.isSnow ? '本品' : '竞品'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="brand" label="商品品牌"> </el-table-column>
      <el-table-column prop="packagingForm" label="包装形式"> </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click="toModel(scope.row)">完成建模</el-button>
          <el-button size="small" type="text" @click="showDetail(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <model-dialog ref="model"></model-dialog>
    <detail-dialog ref="detail"></detail-dialog>
  </div>
</template>

<script>
import DetailDialog from "../dialogs/detailDialog";
import ModelDialog from "../dialogs/modelDialog";
export default {
  name: "ToModel",
  components: { ModelDialog, DetailDialog },
  props: {
    tableData: {
      type: Array
    }
  },
  data() {
    return {
      cellStyle: {
        "font-size": "12px",
        color: "#000",
      },
    };
  },
  methods: {
    toModel() {
      this.$refs.model.dialogVisible = true;
    },
    // 点击详情
    showDetail() {
      this.$refs.detail.dialogVisible = true;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.product-frontImg {
  width: 60px;
  height: 60px;
  display: block;
}
</style>