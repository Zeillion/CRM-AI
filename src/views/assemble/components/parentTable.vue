<template>
  <!-- 一级或者二级节点的表格内容 -->
  <div>
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
      <el-table-column label="组合名称">
        <template slot-scope="{ row }">
          <span style="color: #1d8ce0">{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="该组合下层级数" prop="layer" width="120"> </el-table-column>
      <el-table-column label="包含商品数" prop="num"> </el-table-column>
      <el-table-column label="创建日期" prop="createTime" width="120">
      </el-table-column>
      <el-table-column label="修改日期" prop="modifyTime" width="120">
      </el-table-column>
      <el-table-column label="备注信息" prop="remark"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="{ row }">
          <el-button size="small" type="text" @click="showDetail">
            <span style="color: #ff737e">删除</span>
          </el-button>
          <el-button size="small" type="text" @click="showDetail">
            <span style="color: #1d8ce0">修改</span>
          </el-button>
          <el-button size="small" type="text" @click="showDetail">
            <span style="color: #034193">查看效果</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "parentTable",
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          name: "0-5元",
          layer: 2,
          num: 20,
          createTime: "2020-09-22 13:21",
          modifyTime: "2020-09-22 13:21",
          remark: "文字描述",
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