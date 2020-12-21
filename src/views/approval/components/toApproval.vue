<template>
  <!--  待审批-->
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="img" label="上报图片"> </el-table-column>
      <el-table-column prop="barCode" label="条形码"> </el-table-column>
      <el-table-column prop="name" label="上报名称"> </el-table-column>
      <el-table-column prop="reporter" label="上报人"> </el-table-column>
      <el-table-column prop="phone" label="联系方式"> </el-table-column>
      <el-table-column prop="time" label="上报时间"> </el-table-column>
      <el-table-column label="操作"> 
        <template slot-scope="{row}">
          <el-button size="small" type="text">审批</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ToApproval",
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          img: "",
          barCode: 692319381,
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
        },
        {
          img: "",
          barCode: 692319381,
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
        },
        {
          img: "",
          barCode: 692319381,
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
        },
        {
          img: "",
          barCode: 692319381,
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
        },
        {
          img: "",
          barCode: 692319381,
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
        },
        {
          img: "",
          barCode: 692319381,
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
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>