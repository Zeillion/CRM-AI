<template>
  <div>
    <el-dialog title="操作记录">
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="small">驳回</el-button>
        <el-button type="primary" @click="handlePass" size="small">
          通过</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>