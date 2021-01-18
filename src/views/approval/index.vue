<template>
  <div class="wrapper">
    <div class="bold big_title">审批新增sku</div>
    <!-- 搜索栏 -->
    <div class="search_box">
      <el-form ref="form" :model="form" label-width="0px">
        <!-- 搜索按钮组 -->
        <div class="flex_container">
          <el-form-item>
            <el-input
              v-model="form.queryField"
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
              <el-option v-for="(item, index) in product_type" :key="'product_type' + index" :label="item.desc" :value="item.desc"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="flex_item">
            <el-select v-model="form.brand" placeholder="商品品牌" size="small">
              <el-option v-for="(item, index) in product_brand" :key="'product_brand' + index" :label="item.desc" :value="item.desc"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="flex_item">
            <el-select v-model="form.packagingForm" placeholder="包装形式" size="small">
              <el-option v-for="(item, index) in product_packaging_form" :key="'product_packaging_form' + index" :label="item.desc" :value="item.desc"></el-option>
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
          <component :is="componentName" :tableData="tableData"></component>
        </el-tab-pane>
      </el-tabs>
    </div>

    <Pagination
      v-show="total > 9"
      :total="total"
      :limit.sync="pageSize"
      :page.sync="pageNum"
      @pagination="getTableMessage"
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

import { findCondition } from "@/api/dictionaries";
import { querySkuTableList } from "@/api/sku";

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
      componentName: "ToApproval",
      activeTab: "1",
      pageSize: 10,
      pageNum: 1,
      total: 0,
      form: {
        queryField: "",
        type: "",
        brand: "",
        packagingForm: "",
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
      product_type: [], // 产品类型筛选列表
      product_brand: [], // 产品品牌筛选列表
      product_packaging_form: [], // 包装形式筛选列表
      tableData: [], // table数据
    };
  },
  created() {
    this.getFilterCondition();
    this.getTableMessage();
  },
  methods: {
    onSubmit() {},

    // 获取用于查询条件的数据
    async getFilterCondition() {
      let result = await findCondition({
        typeList: ["product_type", "product_brand", "product_packaging_form"],
      });
      let dictTypeList = result.dictTypeList;

      for (let i = 0; i < dictTypeList.length; i++) {
        let dictTypeItem = dictTypeList[i]
        this.product_type = dictTypeItem.type === 'product_type' ? dictTypeItem.dataList : this.product_type;
        this.product_brand = dictTypeItem.type === 'product_brand' ? dictTypeItem.dataList : this.product_brand;
        this.product_packaging_form = dictTypeItem.type === 'product_packaging_form' ? dictTypeItem.dataList : this.product_packaging_form;
      }
    },

    /**
     * @description 获取表单数据
     */
    async getTableMessage() {
      let activeTab = this.activeTab;
      let approvalStatus = 
        activeTab == 0 ? '' :
        activeTab == 1 ? 'pending' :
        activeTab == 2 ? 'waitingArchives' :
        activeTab == 3 ? 'waitingConfirmed' : 'waitingModeled';

      let result = await querySkuTableList({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        filter: {
          ...this.form,
          approvalStatus
        }
      })
      this.total = result.total;
      result.rows.map(item => {
        // 拼接处理24位图
        item.polyhedralImg = (item.polyhedralImg && item.polyhedralImg.split(',')) || [];
        if(item.polyhedralImg.length) {
          for(let i = 0; i < item.polyhedralImg.length; i ++) {
            item.polyhedralImg[i] = 'http://' + item.polyhedralImg[i]
          }
        }
      })
      this.tableData = result.rows;

      console.log(this.tableData)
    },
    handleTab(data, e) {
      this.pageNum = 1;
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
    // 新增sku
    addSku() {
      this.$refs.add.dialogVisible = true;
    },
    // 新增建档sku
    addFile() {
      this.$refs.addFile.dialogVisible = true;
    },
  },
  watch: {
    'form.type'(val) {
      this.pageNum = 1;
      this.getTableMessage();
    },
    'form.brand'(val) {
      this.pageNum = 1;
      this.getTableMessage();
    },
    'form.packagingForm'(val) {
      this.pageNum = 1;
      this.getTableMessage();
    },
    activeTab() {
      this.pageNum = 1;
      this.getTableMessage();
    }
  }
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
