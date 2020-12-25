<template>
  <div class="wrapper">
    <!-- 搜索栏 -->
    <div class="search_box">
      <el-form
        ref="form"
        :model="form"
        label-width="20px"
        class="flex_container"
      >
        <el-form-item>
          <el-input
            v-model="form.name"
            placeholder="条形码/商品全称"
            size="small"
          />
        </el-form-item>

        <el-form-item>
          <el-select v-model="form.type" placeholder="商品类型" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.brand" placeholder="商品品牌" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.package" placeholder="包装形式" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small" class="btn"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 下方表格 -->
    <el-tabs  @tab-click="handleTab" v-model="activeTab" type="card">
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
</template>

<script>
import { mapGetters } from "vuex";
import HasEffected from "./components/hasEffected";
import ToApproval from "./components/toApproval";
import ToConfirm from "./components/toConfirm";
import ToFile from "./components/toFile";
import ToModel from "./components/toModel";

export default {
  name: "Approval",
  components: {
    HasEffected,
    ToApproval,
    ToConfirm,
    ToFile,
    ToModel
  },
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      componentName: "HasEffected",
      activeTab:"0",
      form: {
        keyword: "",
        type: "",
        brand: "",
        package: "",
      },
      tabList: [
        {
          label: "已生效sku",
          value: "0",
        },
        {
          label: "待审批sku",
          value: "1",
        },
        {
          label: "待建档",
          value: "2",
        },
        {
          label: "待确认",
          value: "3",
        },
        {
          label: "待建模",
          value: "4",
        },
      ],
    };
  },
  methods: {
    handleTab(data, e) {
      let str = data.name;
      switch (str) {
        case "0":
          this.componentName = "HasEffected";
          break;
        case "1":
          this.componentName = "ToApproval";
          break;
        case "2":
          this.componentName = "ToFile";
          break;
        case "3":
          this.componentName = "ToConfirm";
          break;
        case "4":
          this.componentName = "ToModel";
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search_box {
  margin-top: 20px;
  .btn {
    margin-left: 20px;
  }
}
</style>
