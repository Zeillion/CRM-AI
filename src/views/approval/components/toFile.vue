<template>
  <!-- 待建档 -->
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
        border: 0,
      }"
      :cell-style="cellStyle"
    >
      <el-table-column prop="img" label="上报图片">
        <template slot-scope="scope">
          <img class="product-frontImg" :src="scope.row.frontImg" />
        </template>
      </el-table-column>
      <el-table-column prop="barCode" label="条形码"> </el-table-column>
      <el-table-column prop="shortName" label="上报名称"> </el-table-column>
      <el-table-column prop="contactPerson" label="上报人"> </el-table-column>
      <el-table-column prop="contactPhone" label="联系方式"> </el-table-column>
      <el-table-column prop="approvalPerson" label="审批人"> </el-table-column>
      <el-table-column prop="phone" label="联系方式"> </el-table-column>
      <el-table-column prop="approvalTime" label="审批日期"> </el-table-column>
      <el-table-column prop="approvalStatus" label="状态"> </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click="toFile(scope.row)"
            >建档</el-button
          >
          <el-button size="small" type="text" @click="toChange(scope.row)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <file-dialog ref="file"></file-dialog>
  </div>
</template>

<script>
import FileDialog from "../dialogs/fileDialog.vue";
export default {
  name: "",
  components: { FileDialog },
  props: {
    tableData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      cellStyle: {
        "font-size": "12px",
        color: "#000",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    toFile() {
      this.$refs.file.dialogVisible = true;
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