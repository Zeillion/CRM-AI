<template>
  <!--产品组合设置 -->
  <div class="wrapper">
    <div class="bold big_title">产品组合设置</div>
    <div class="approval_tab">
      <el-tabs @tab-click="handleTab" v-model="activeTab" type="card">
        <el-tab-pane
          v-for="(item, index) in tabList"
          :label="item.label"
          :name="item.value"
          :key="index"
        >
          <component :is="componentName"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import ProductAssemble from "./components/ProductAssemble";
export default {
  name: "Assemble",
  components: { ProductAssemble },
  props: {},
  data() {
    return {
      activeTab: "0",
      tabList: [
        {
          label: "我的组合",
          value: "0",
        },
        {
          label: "全国组合",
          value: "1",
        },
      ],
      componentName: "ProductAssemble",
    };
  },
  watch: {},
  computed: {},
  methods: {
    /**点击tab */
    handleTab(){}
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.approval_tab {
  margin-top: 20px;
}
</style>