<template>
  <!-- 角色管理 -->
  <div class="wrapper">
    <div class="bold big_title">角色管理</div>
    <div class="flex_container search_box">
      <div>
        <el-input v-model="name" placeholder="角色名称" size="small" />
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
      <el-button type="primary" @click="addRole" size="small" class="btn"
        >新增角色</el-button
      >
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
      <el-table-column prop="name" label="角色名称"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column prop="creater" label="创建人"> </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="{ row }">
          <el-button size="mini" plain @click="removeRole">删除角色</el-button>
          <el-button size="mini" plain @click="bind"> 绑定菜单权限 </el-button>
        </template>
      </el-table-column>
    </el-table>
    <add-role ref="addRole"></add-role>
    <bind-menu ref="menu"></bind-menu>
  </div>
</template>

<script>
import AddRole from "./dialogs/addRole.vue";
import BindMenu from "./dialogs/bindMenu.vue";
export default {
  name: "",
  components: { AddRole, BindMenu },
  props: {},
  data() {
    return {
      name: "",
      cellStyle: {
        "font-size": "12px",
        color: "#000",
      },
      tableData: [
        {
          name: "区域审核员",
          createTime: "2020-09-22 13:22",
          remark: "用于审核初稿",
          creater: "admin",
        },
        {
          name: "区域审核员",
          createTime: "2020-09-22 13:22",
          remark: "用于审核初稿",
          creater: "admin",
        },
        {
          name: "区域审核员",
          createTime: "2020-09-22 13:22",
          remark: "用于审核初稿",
          creater: "admin",
        },
        {
          name: "区域审核员",
          createTime: "2020-09-22 13:22",
          remark: "用于审核初稿",
          creater: "admin",
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
    // 删除角色
    removeRole() {
      this.$confirm(
        `是否确定删除当前角色`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      });
    },
    // 绑定菜单权限
    bind() {
      this.$refs.menu.dialogVisible = true;
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