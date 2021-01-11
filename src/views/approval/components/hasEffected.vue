<template>
  <!-- 已生效 -->
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
      </el-table-column>
      <el-table-column
        prop="product"
        label="商品全称"
        fixed="left"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="barCode" label="条形码"> </el-table-column>
      <el-table-column prop="packageCode" label="包装编号"> </el-table-column>
      <el-table-column prop="type" label="商品类型"> </el-table-column>
      <el-table-column prop="isSelf" label="本竞品"> </el-table-column>
      <el-table-column prop="brand" label="商品品牌"> </el-table-column>
      <el-table-column prop="packageType" label="包装形式"> </el-table-column>
      <el-table-column prop="AIID" label="AI ID"> </el-table-column>
      <el-table-column prop="status" label="映射状态"> </el-table-column>
      <el-table-column prop="time" label="新增时间"> </el-table-column>

      <el-table-column label="操作" width="120">
        <template slot-scope="{ row }">
          <el-button size="small" type="text" @click="showRecord"
            >操作记录</el-button
          >
          <el-button size="small" type="text" @click="showDetail"
            >
            <span class="orange_btn">详情</span>
            </el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <record-dialog ref="record"></record-dialog>
    c
  </div>
</template>

<script>
import DetailDialog from "../dialogs/detailDialog.vue";
import RecordDialog from "../dialogs/recordDialog.vue";
export default {
  name: "HasEffected",
  components: { RecordDialog, DetailDialog },
  props: {},
  data() {
    return {
      cellStyle: {
        "font-size": "12px",
        color: "#000",
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
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    showRecord() {
      this.$refs.record.dialogVisible = true;
    },
    getData() {},
    // 点击详情
    showDetail() {
      this.$refs.detail.dialogVisible = true;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>