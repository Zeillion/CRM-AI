<template>
  <div class="wrapper">
    <div class="bold big_title">菜单管理</div>
    <div class="add_btn">
      <el-button type="primary" @click="addRole" size="small" class="btn"
        >增加一级菜单</el-button
      >
    </div>
    <el-table
      :data="tableData"
      class="table"
      row-key="id"
      border
      default-expand-all
      :header-cell-style="{
        background: '#EFF2F7',
        color: '#444',
        'font-size': '14px',
      }"
      :cell-style="cellStyle"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="菜单名"> </el-table-column>
      <el-table-column prop="code" label="菜单编号"> </el-table-column>
      <el-table-column prop="path" label="菜单路径"> </el-table-column>
      <el-table-column prop="creater" label="创建人"> </el-table-column>
      <el-table-column prop="time" label="创建时间"> </el-table-column>
      <el-table-column label="操作" width="260">
        <template slot-scope="{ row }">
          <el-button size="mini" plain @click="removeRole">编辑</el-button>
          <el-button size="mini" plain @click="bind"> 删除 </el-button>
          <el-button size="mini" plain @click="bind" v-if="row.children && row.children.length > 0 "> 增加子菜单 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      cellStyle: {
        "border-right": "1px solid #E4E4E4",
        "font-size": "12px",
        color: "#000",
      },
      tableData: [
        {
          id: 1,
          name: "角色管理",
          code: "1",
          path: "/role",
          creater: "admin",
          time: "2020-12-12- 12:00",
          children: [
            {
              id: 2,
              name: "角色子菜单1",
              code: "2",
              path: "/role/1",
              creater: "admin",
              time: "2020-12-12- 12:00",
            },
            {
              id: 3,
              name: "角色子菜单1",
              code: "3",
              path: "/role/2",
              creater: "admin",
              time: "2020-12-12- 12:00",
            },
          ],
        },

         {
          id: 4,
          name: "菜单管理",
          code: "4",
          path: "/menu",
          creater: "admin",
          time: "2020-12-12- 12:00",
          children: [
            {
              id: 5,
              name: "菜单子菜单1",
              code: "2",
              path: "/menu/1",
              creater: "admin",
              time: "2020-12-12- 12:00",
            },
            {
              id: 6,
              name: "菜单子菜单1",
              code: "3",
              path: "/menu/2",
              creater: "admin",
              time: "2020-12-12- 12:00",
            },
          ],
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
.table {
  margin-top: 20px;
}
.add_btn {
  display: flex;
  justify-content: flex-end;
}
</style>