<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :hide-on-single-page="total < pageSize ? true : false"
      :background="background"
      :current-page.sync="currentPage"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from "@/utils/scroll-to";

export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      //pageSze
      type: Number,
      default: 20,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      },
    },
    layout: {
      type: String,
      default: "total,jumper, prev, pager, next,sizes",
    },
    background: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      },
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pagination", { page: this.currentPage, limit: val });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handleCurrentChange(val) {
      this.$emit("pagination", { page: val, limit: this.pageSize });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }x
    },
  },
};
</script>

<style scoped>
.pagination-container {
  padding: 24px 16px;
  display: flex;
  justify-content: center;
}
.pagination-container.hidden {
  display: none;
}
</style>
<style lang="scss">
// cover element-ui css
.pagination-container {
  .btn-prev,
  .btn-next {
    width: 28px;
    height: 28px;
    background: #fff !important;
    color: #b7b7b7;
    border: 1px solid #dfdfdf;
  }
  .el-pagination.is-background .el-pager li {
    background-color: #fff;
    border: 1px solid #dfdfdf;
  }
  .number {
    width: 28x;
    height: 28px !important;
    line-height: 28px;
  }
  .el-pagination__editor.el-input .el-input__inner {
    height: 28x;
  }
  .el-pagination .el-select .el-input .el-input__inner {
    height: 28px;
  }
}
.el-pagination__total {
  line-height: 28px !important;
}
</style>
