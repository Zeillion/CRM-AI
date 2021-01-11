<template>
  <div class="wrapper">
    <div class="bold big_title">数据字典</div>
    <div class="flex_wrapper">
      <div class="red_text">
        *添加字段后请点击生效按钮；生效后增加的字段值无法修改，请谨慎填写；
      </div>
      <div>
        <el-button type="primary" size="small" @click="showRecord"
          >操作记录</el-button
        >
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="字段编辑" name="first">
        <el-table
          :data="tableData"
          style="width: 600px"
          :row-class-name="tableRowClassName"
          border
          :header-cell-style="{
            background: '#EFF2F7',
            color: '#444',
            'font-size': '14px',
            'font-weight': 'bold',
          }"
          :cell-style="cellStyle"
        >
          <el-table-column prop="name" label="字段名"> </el-table-column>
          <el-table-column prop="data" label="字段值" width="300">
            <template slot-scope="scope">
              <div v-for="(item, index) in scope.row.data" :key="index">
                {{ item }}
                <span v-show="scope.row.canEdit">
                  <el-button type="text">修改</el-button>
                </span>
              </div>
              <div v-if="!scope.row.showInput">
                <el-button type="text" @click="addWord(scope.row)">增加值</el-button>
              </div>
              <div v-else class="flex_container">
                <el-input
                  placeholder="请输入"
                  size="mini"
                  style="width: 140px"
                  class="flex_item"
                  v-model="scope.row.word"
                ></el-input>
                <div>
                  <el-button type="text" @click="finish(scope.row)"
                    >完成</el-button
                  >
                  <el-button type="text">
                    <span class="gray_btn" @click="cancel(scope.row)"
                      >取消</span
                    >
                  </el-button>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="{ row }">
              <el-button size="small" type="text">停用</el-button>
              <el-button size="small" type="text">启用</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <record-dialog ref="record"></record-dialog>
  </div>
</template>

<script>
import RecordDialog from "./dialogs/recordDialog";
export default {
  name: "Dictionary",
  components: { RecordDialog },
  props: {},
  data() {
    return {
      cellStyle: {
        "font-size": "14px",
        color: "#1F2D3D",
      },
      activeName: "first",
      tableData: [
        {
          name: "商品类型",
          data: [
            "全国统一主推产品",
            "全国统一组合产品",
            "区域主推产品",
            "区域组合产品",
          ],
          word: "",
          showInput: false,
        },
        {
          name: "本竞品",
          data: ["本品", "竟品", "其他1"],
          word: "",
          showInput: false,
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    /**点击操作记录 */
    showRecord() {
      this.$refs.record.dialogVisible = true;
    },
    /**增加值 */
    addWord(row) {
      row.showInput = true;
    },
    /**完成 */
    finish(row) {
      row.showInput = false;
    },
    /**取消 */
    cancel(row) {
      row.showInput = false;
      row.word = "";
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.big_title {
  margin-bottom: 20px;
}
.red_text {
  margin-bottom: 20px;
}
.wrapper {
  min-height: calc(100vh-60);
}
</style>