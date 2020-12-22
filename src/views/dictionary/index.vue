<template>
  <div class="wrapper">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="字段编辑" name="first">
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          border
        >
          <el-table-column prop="name" label="字段名"> </el-table-column>
          <el-table-column prop="data" label="字段值">
            <template slot-scope="scope">
              <div v-for="(item,index) in scope.row.data" :key="index">{{item}} 
                  <span v-show="scope.$index == 1 && index > 1">
                       <el-button type="text" >修改</el-button>
                  </span>
              </div>
              <el-button type="text" v-if="scope.$index == 0">增加值</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="{ row }">
              <el-button size="small" type="text">停用</el-button>
              <el-button size="small" type="text">启用</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Dictionary",
  components: {},
  props: {},
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          name: "商品类型",
          data: [
            "全国统一主推产品",
            "全国统一组合产品",
            "区域主推产品",
            "区域组合产品",
          ],
        },
        {
          name: "本竞品",
          data: ["本品", "竟品","其他1"],
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