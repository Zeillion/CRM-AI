<template>
  <!--绑定菜单权限 -->
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="700px"
      :before-close="handleClose"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <div class="title flex_vertical">绑定菜单权限</div>
      <div class="tree">
        <el-tree
          :data="data"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps"
        >
        </el-tree>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button plain @click="cancel" size="small">取消</el-button>
        <el-button type="primary" @click="confirm" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "BindMenu",
  components: {},
  props: {},
  data() {
    return {
      dialogVisible: false,
      defaultProps: {
        children: "children",
        label: "label",
      },
      data: [
        {
          id: 1,
          label: "审批任务",
          children: [
            {
              id: 4,
              label: "审批任务",
              children: [
                {
                  id: 9,
                  label: "待审批",
                },
                {
                  id: 10,
                  label: "待建模",
                },
                 {
                  id: 11,
                  label: "待建档",
                },
                 {
                  id: 12,
                  label: "待确认",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "商品档案清单",
          children: [
            {
              id: 5,
              label: "停用/启用",
            },
            {
              id: 6,
              label: "修改",
            },
             {
              id: 6,
              label: "映射",
            },
          ],
        },
        {
          id: 3,
          label: "集合",
          children: [
            {
              id: 7,
              label: "创建",
            },
            {
              id: 8,
              label: "修改",
            },
          ],
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    cancel() {
      this.dialogVisible = false;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.title {
  background-color: #eff2f7;
  width: 700px;
  height: 44px;
  color: #222222;
  justify-content: center;
  font-weight: bold;
  margin-top: -60px;
  margin-left: -20px;
}
.tree {
  margin-top: 20px;
  margin-left: 20px;
}
</style>