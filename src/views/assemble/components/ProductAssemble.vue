<template>
  <div>
    <div class="search_box">
      <!-- 搜索按钮组 -->
      <div class="flex_container">
        <div>
          <el-input v-model="name" placeholder="组合名称" size="small" />
        </div>
        <div class="flex">
          <el-button
            type="primary"
            @click="goSearch"
            size="small"
            class="btn"
            icon="el-icon-search"
            >搜索</el-button
          >
        </div>

        <el-button type="primary" @click="addAssemble" size="small" class="btn"
          >创建组合</el-button
        >
      </div>
    </div>

    <div class="flex_container content">
      <!-- 左侧组合树 -->
      <div class="assemble_tree">
        <el-tree
          :data="data"
          default-expand-all
          :current-node-key="1"
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps"
          @node-click="handleNodeClick"
        >
        </el-tree>
      </div>
      <!-- 右侧表格 -->
      <component :is="componentName"></component>
      <div class="flex">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          :header-cell-style="{
            background: '#EFF2F7',
            color: '#444',
          }"
          :cell-style="cellStyle"
          size="small"
        >
          <el-table-column label="组合名称">
            <template slot-scope="{ row }">
              <span>{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="层级数" prop="layer"> </el-table-column>
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
    </div>
    <add-assemble ref="add"></add-assemble>
  </div>
</template>

<script>
import AddAssemble from "../dialogs/addAssemble.vue";
export default {
  name: "ProductAssemble",
  components: { AddAssemble },
  props: {},
  data() {
    return {
      name: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
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
      data: [
        {
          id: 1,
          label: "价格区间内组合",
          children: [
            {
              id: 11,
              label: "0-5元系列",
              children: [
                {
                  id: 111,
                  label: "0-2元系列",
                },
                {
                  id: 112,
                  label: "2-5元系列",
                },
              ],
            },

            {
              id: 12,
              label: "5-10元系列",
              children: [
                {
                  id: 122,
                  label: "6-7元系列",
                },
                {
                  id: 123,
                  label: "7-8元系列",
                },
                {
                  id: 124,
                  label: "8-10元系列",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "按渠道组合",
          children: [
            {
              id: 21,
              label: "A渠道",
            },
             {
              id: 22,
              label: "B渠道",
            },
          ],
        },
        {
          id: 3,
          label: "按系列组合",
          children: [],
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    /**创建组合 */
    addAssemble() {
      this.$refs.add.dialogVisible = true;
    },
    /**搜索 */
    goSearch() {},
    /**点击节点 */
    handleNodeClick(data) {
      debugger;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.assemble_tree {
  width: 220px;
  border-radius: 2px;
  border: 1px solid #bfcbd9;
  margin-right: 60px;
}
.content {
  margin-top: 20px;
}
</style>
<style lang="scss">
.assemble_tree {
  .el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    background-color: #ecf5ff;
    color: #1d8ce0;
    // .el-icon-caret-right{
    //   color: #1d8ce0;
    // }
  }
}
</style>