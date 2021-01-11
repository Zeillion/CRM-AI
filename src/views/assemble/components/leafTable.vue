<template>
  <div>
    <!-- 商品table -->
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%"
      :header-cell-style="{
        background: '#EFF2F7',
        color: '#444',
        border: 0,
      }"
      size="small"
    >
      <el-table-column prop="img" label="24位图"> </el-table-column>
      <el-table-column prop="product" label="商品全称" width="120">
      </el-table-column>
      <el-table-column prop="barCode" label="条形码"> </el-table-column>
      <el-table-column prop="packageCode" label="外观序号"> </el-table-column>
      <el-table-column prop="type" label="商品类型"> </el-table-column>
      <el-table-column prop="isSelf" label="本竞品"> </el-table-column>
      <el-table-column prop="brand" label="商品品牌"> </el-table-column>
      <el-table-column prop="packageType" label="包装形式"> </el-table-column>
      <el-table-column prop="status" label="映射状态"> </el-table-column>
      <el-table-column prop="time" label="新增时间"> </el-table-column>

      <el-table-column label="操作" width="120" fixed="right">
        <template slot-scope="{ row }">
          <el-button size="small" type="text" @click="remove">
            <span style="color: #ff737e">移除</span>
          </el-button>
          <el-button size="small" type="text" @click="showDetail">
            <span style="color: #034193">详情</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <detail-dialog ref="detail"></detail-dialog>
  </div>
</template>

<script>
import DetailDialog from "../../approval/dialogs/detailDialog";
export default {
  name: "LeafTable",
  components: { DetailDialog },
  props: {
    list: Array,
  },
  data() {
    return {
      tableData: [],
    };
  },
  watch: {
    list: {
      handler(val) {
        this.tableData = val;
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {},
  methods: {
    /**点击详情 */
    showDetail() {
      this.$refs.detail.dialogVisible = true;
    },
    /**点击移除 */
    remove() {},
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>