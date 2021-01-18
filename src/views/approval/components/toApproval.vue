<template>
  <!--  待审批-->
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
      <el-table-column prop="time" label="上报时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click="approval(scope.row)">审批</el-button>
        </template>
      </el-table-column>
    </el-table>
    <approval-dialog ref="approval" :detail="detail"></approval-dialog>
  </div>
</template>

<script>
import approvalDialog from "../dialogs/approvalDialog";
import { getApprovalDetail } from "@/api/sku";
export default {
  name: "ToApproval",
  components: {
    approvalDialog,
  },
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
      detail: null, // 审批详情
    };
  },
  watch: {},
  computed: {},
  methods: {
    async approval(e) {
      this.$refs.approval.dialogVisible = true;
      let result = await getApprovalDetail({
        approvalId: e.approvalId
      })
      this.detail = {
        ...result, 
        'frontImg': e.frontImg
      }
      console.log(this.detail)
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
  .product-frontImg{
    width: 60px;
    height: 60px;
    display: block;
  }
</style>