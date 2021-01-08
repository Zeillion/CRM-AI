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
        <el-button
          type="primary"
          @click="addAssemble"
          size="small"
          class="btn"
          v-show="showAssBtn"
          >创建组合</el-button
        >
        <el-button
          type="primary"
          @click="addProduct"
          size="small"
          class="btn"
          v-show="showProBtn"
          >创建商品</el-button
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
    <add-product ref="addProduct"></add-product>
  </div>
</template>

<script>
import AddAssemble from "../dialogs/addAssemble.vue";
import ParentTable from "./parentTable";
import LeafTable from "./leafTable";
import AddProduct from "../dialogs/addProduct.vue";
export default {
  name: "ProductAssemble",
  components: { AddAssemble, ParentTable, LeafTable, AddProduct },
  props: {},
  data() {
    return {
      name: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
      showAssBtn: false, //控制创建组合按钮
      showProBtn: false, //控制创建商品按钮
      targetNode: null, //当前选中的节点
      componentName: "",
      data: [
        {
          id: 1,
          label: "价格区间内组合",
          layer: 1,
          children: [
            {
              id: 11,
              label: "0-5元系列",
              layer: 2,
              children: [
                {
                  id: 111,
                  label: "0-2元系列",
                  layer: 3,
                },
                {
                  id: 112,
                  label: "2-5元系列",
                  isLeaf: true,
                  layer: 3,
                },
              ],
            },

            {
              id: 12,
              label: "5-10元系列",
              layer: 2,
              children: [
                {
                  id: 122,
                  label: "6-7元系列",
                  layer: 3,
                },
                {
                  id: 123,
                  label: "7-8元系列",
                  layer: 3,
                },
                {
                  id: 124,
                  label: "8-10元系列",
                  layer: 3,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "按渠道组合",
          layer: 1,
          children: [
            {
              id: 21,
              label: "A渠道",
              layer: 2,
            },
            {
              id: 22,
              label: "B渠道",
              layer: 2,
            },
          ],
        },
        {
          id: 3,
          label: "按系列组合",
          layer: 1,
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
      if (data.layer == 3) {
        // 到子节点了，该系统只能有3级结构
        this.showAssBtn = false;
        this.showProBtn = true;
      } else if (
        (data.layer == 1 || data.layer == 2) &&
        (!data.children || data.children.length == 0)
      ) {
        // 第一二级别 还没有子节点的时候
        //1 挂了商品
        if (data.isLeaf) {
          this.showAssBtn = false;
          this.showAssBtn = true;
        } else {
          // 2 没挂商品
          this.showAssBtn = true;
          this.showProBtn = true;
        }
      } else if (
        (data.layer == 1 || data.layer == 2) &&
        data.children &&
        data.children.length > 0
      ) {
        // 第一二级别 有子节点的时候
        this.showAssBtn = true;
        this.showProBtn = false;
        this.componentName = "ParentTable";
      }
      // if (data.children && data.children.length > 0) {
      //   this.componentName = "ParentTable";
      //   this.showAssBtn = true;
      //   this.showProBtn = false;
      // } else if ((data.children.length = 0)) {
      // } else {
      //   // 挂载了商品，已经是叶节点
      //   this.componentName = "LeafTable";
      //   this.showProBtn = true;
      //   this.showAssBtn = false;
      // }
    },
    /**添加商品 */
    addProduct() {
      this.$refs.addProduct.dialogVisible = true;
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
  .right_table {
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