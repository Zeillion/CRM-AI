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
      <div class="flex right_table">
        <component :is="componentName"></component>
      </div>
    </div>
    <add-assemble ref="add"></add-assemble>
  </div>
</template>

<script>
import AddAssemble from "../dialogs/addAssemble.vue";
import ParentTable from "./parentTable";
import LeafTable from "./leafTable"
export default {
  name: "ProductAssemble",
  components: { AddAssemble, ParentTable,LeafTable },
  props: {},
  data() {
    return {
      name: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
      targetNode: null, //当前选中的节点
      componentName: "",
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
      this.targetNode = data;
      // 根据节点内容结构的不同，右侧的按钮以及表格内容也会有变化 leena
      /**1:一级，二级节点，也可创建商品，若子结点已是商品，则本节点对应内容需显示相应“查看重复sku”，“查看未选sku”按钮 */
      /**2:三级节点只可以创建商品 */
      if (data.children && data.children.length > 0) {
        this.componentName = "ParentTable"
      }else{
        this.componentName = "LeafTable"
      }
    },
  },
  mounted() {
    /**处理默认节点 */
    this.handleNodeClick(this.data[0]);
  },
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
  .right_table{
    overflow-x: auto;
  }
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