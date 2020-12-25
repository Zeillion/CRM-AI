<template>
  <!-- 待建档 -->
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      :header-cell-style="{
        background: '#EBEDF3',
        color: '#444',
        'font-size': '14px',
      }"
      :cell-style="cellStyle"
    >
      <el-table-column prop="img" label="上报图片" fixed="left">
      </el-table-column>
      <el-table-column prop="barCode" label="条形码"> </el-table-column>
      <el-table-column prop="name" label="上报名称"> </el-table-column>
      <el-table-column prop="people" label="上报人"> </el-table-column>

      <el-table-column prop="concat" label="联系方式"> </el-table-column>
      <el-table-column prop="judger" label="审批人"> </el-table-column>
      <el-table-column prop="phone" label="联系方式"> </el-table-column>
      <el-table-column prop="date" label="审批日期"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="{ row }">
          <el-button
            size="small"
            type="text"
            @click="toFile"
            v-if="!row.hasFiled"
            >建档</el-button
          >
          <el-button size="small" type="text" v-else>修改</el-button>
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
  props: {},
  data() {
    return {
      cellStyle: {
        "border-right": "1px solid #E4E4E4",
        "font-size": "12px",
        "color":"#000"
      },
      tableData: [
        {
          img: "",
          name: "脸谱300ml",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          judger: "李四",
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "新申请",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          date: "2020-12-12 19:00",
          concat: 18923242342,
          hasFiled: false,
        },
        {
          img: "",
          name: "脸谱300ml",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          judger: "李四",
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "新申请",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          date: "2020-12-12 19:00",
          concat: 18923242342,
          hasFiled: true,
        },
      ],
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
</style>