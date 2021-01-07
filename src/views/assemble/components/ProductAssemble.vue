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
  </div>
</template>

<script>
export default {
  name: "ProductAssemble",
  components: {},
  props: {},
  data() {
    return {
      name: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    /**创建组合 */
    addAssemble() {},
    /**搜索 */
    goSearch(){}
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>