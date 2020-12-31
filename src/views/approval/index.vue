<template>
  <div class="wrapper">
    <div class="bold">审批新增sku</div>
    <!-- 搜索栏 -->
    <div class="search_box">
      <el-form ref="form" :model="form" label-width="0px">
        <!-- 搜索按钮组 -->
        <div class="flex_container">
          <el-form-item>
            <el-input
              v-model="form.name"
              placeholder="条形码/商品全称"
              size="small"
            />
          </el-form-item>
          <div class="flex">
            <el-form-item>
              <el-button
                type="primary"
                @click="onSubmit"
                size="small"
                class="btn"
                icon="el-icon-search"
                >搜索</el-button
              >
            </el-form-item>
          </div>

          <div v-if="activeTab == 3">
            <el-button type="primary" @click="addSku" size="small" class="btn"
              >新增sku</el-button
            >
          </div>
          <div v-if="activeTab == 0">
            <el-button type="primary" @click="addFile" size="small" class="btn"
              >新增建档sku</el-button
            >
          </div>
        </div>
        <!-- 下拉选项组 -->
        <div class="flex_container">
          <el-form-item class="flex_item">
            <el-select v-model="form.type" placeholder="商品类型" size="small">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="flex_item">
            <el-select v-model="form.brand" placeholder="商品品牌" size="small">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="flex_item">
            <el-select
              v-model="form.package"
              placeholder="包装形式"
              size="small"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <!-- 下方表格 -->
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

    <Pagination
      v-show="total > 9"
      :total="total"
      :limit.sync="pageSize"
      :page.sync="pageNumber"
      @pagination="getData"
    />

    <add-sku ref="add"></add-sku>
    <add-file ref="addFile"></add-file>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HasEffected from "./components/hasEffected";
import ToApproval from "./components/toApproval";
import ToConfirm from "./components/toConfirm";
import ToFile from "./components/toFile";
import ToModel from "./components/toModel";
import AddSku from "./dialogs/addSku";
import AddFile from "./dialogs/addFile";

export default {
  name: "Approval",
  components: {
    HasEffected,
    ToApproval,
    ToConfirm,
    ToFile,
    ToModel,
    AddSku,
    AddFile,
  },
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      componentName: "HasEffected",
      activeTab: "0",
      pageSize: 10,
      pageNumber: 1,
      total: 0,
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
      this.pageNumber = 1;
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
    initPage() {
      this.pageNumber = 1;
    },
    // 新增sku
    addSku() {
      this.$refs.add.dialogVisible = true;
    },
    // 新增建档sku
    addFile() {
      this.$refs.addFile.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
// .search_box {
//   margin-top: 20px;
//   .btn {
//     margin-left: 20px;
//   }
// }
</style>
