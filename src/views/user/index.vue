<template>
  <!-- 用户管理 -->
  <div class="wrapper">
    <div class="bold big_title">用户管理</div>
    <div class="flex_container search_box">
      <div>
        <el-select v-model="value" placeholder="请选择" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-input v-model="keyword" placeholder="" size="small" />
      </div>

      <div class="flex">
        <el-button
          type="primary"
          @click="goSearch"
          size="small"
          class="btn"
          icon="el-icon-search"
          >查询</el-button
        >
      </div>

    </div>

    <el-table
      class="table"
      :data="tableData"
      stripe
      style="width: 100%"
      border
      :header-cell-style="{
        background: '#EFF2F7',
        color: '#444',
        'font-size': '14px',
        border:0
      }"
      :cell-style="cellStyle"
    >
      <el-table-column label="序号" fixed="left">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="loginName" label="登陆名"> </el-table-column>
       <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="phone" label="手机号码"> </el-table-column>
      <el-table-column prop="code" label="工号"> </el-table-column>
       <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="{ row }">
          <el-button size="mini" plain @click="distribute">分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <distribute-role ref="distribute"></distribute-role>
  </div>
</template>

<script>
import DistributeRole from "./dialogs/distributeRole.vue";
export default {
  name: "User",
  components: { DistributeRole },
  props: {},
  data() {
    return {
      keyword: "",
      cellStyle: {
        "font-size": "12px",
        color: "#000",
      },
      options: [
        {
          value: "选项1",
          label: "手机号码",
        },
        {
          value: "选项2",
          label: "姓名",
        },
        {
          value: "选项3",
          label: "登录名",
        },
      ],
      value: "",
      tableData: [
        {
          loginName: "zhangsan",
          name: "张三",
          phone: "13811111111",
          code: "00001",
          createTime: "2020-12-12 22:00",
        },
        {
          loginName: "zhangsan",
          name: "张三",
          phone: "13811111111",
          code: "00001",
          createTime: "2020-12-12 22:00",
        },
        {
          loginName: "zhangsan",
          name: "张三",
          phone: "13811111111",
          code: "00001",
          createTime: "2020-12-12 22:00",
        },
        {
          loginName: "zhangsan",
          name: "张三",
          phone: "13811111111",
          code: "00001",
          createTime: "2020-12-12 22:00",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    goSearch() {},
    addRole() {
      this.$refs.addRole.dialogVisible = true;
    },
    distribute() {
      this.$refs.distribute.dialogVisible = true;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.table {
  margin-top: 35px;
}
</style>