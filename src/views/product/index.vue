<template>
  <div class="wrapper">
    <!-- 商品档案清单 -->
    <div class="bold big_title">商品档案清单</div>
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
          <div>
            <el-button size="small" type="primary">导出</el-button>
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
          <el-form-item class="flex_item">
            <el-select
              v-model="form.package"
              placeholder="映射状态"
              size="small"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!-- table -->

    <div class="approval_tab">
      <el-tabs type="card">
        <el-tab-pane label="全部SKU（1400）">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            :header-cell-style="{
              background: '#EBEDF3',
              color: '#444',
              'font-size': '14px',
            }"
            :cell-style="cellStyle"
            ƒ
          >
            <el-table-column prop="img" label="24位图" fixed="left">
            </el-table-column>
            <el-table-column
              prop="product"
              label="商品全称"
              fixed="left"
              width="120,"
            >
            </el-table-column>
            <el-table-column prop="barCode" label="条形码"> </el-table-column>
            <el-table-column prop="packageCode" label="外观序号">
            </el-table-column>
            <el-table-column prop="type" label="商品类型"> </el-table-column>
            <el-table-column prop="isSelf" label="本竞品"> </el-table-column>
            <el-table-column prop="brand" label="商品品牌"> </el-table-column>
            <el-table-column prop="packageType" label="包装形式">
            </el-table-column>
            <el-table-column prop="status" label="映射状态"> </el-table-column>
            <el-table-column prop="time" label="新增时间"> </el-table-column>

            <el-table-column label="操作" width="220">
              <template slot-scope="{ row }">
                <el-button
                  size="small"
                  type="text"
                  @click="handleStop(row.stop)"
                >
                  <span v-if="row.stop == 0">停用</span>
                  <span v-else>启用</span>
                </el-button>
                <el-button size="small" type="text" @click="handleMap"
                  >映射</el-button
                >
                <el-button size="small" type="text" @click="edit"
                  >修改</el-button
                >
                <el-button size="small" type="text" @click="showDetail">
                  <span style="color: #034193">详情</span>
                </el-button>
                <el-button size="small" type="text" @click="showRecord">
                  <span style="color: #fe934f">操作记录</span>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <mapping-dialog ref="mapping"></mapping-dialog>
    <detail-dialog ref="detail"></detail-dialog>
    <record-dialog ref="record"></record-dialog>
    <edit-dialog ref="edit"></edit-dialog>
  </div>
</template>

<script>
import MappingDialog from "./dialogs/mappingDialog.vue";
import DetailDialog from "./dialogs/detailDialog";
import RecordDialog from "../approval/dialogs/recordDialog";
import EditDialog from "./dialogs/editDialog";
export default {
  name: "Product",
  components: { MappingDialog, DetailDialog, RecordDialog, EditDialog },
  computed: {},
  data() {
    return {
      cellStyle: {
        "border-right": "1px solid #E4E4E4",
        "font-size": "12px",
        color: "#000",
      },
      form: {
        keyword: "",
        type: "",
        brand: "",
        package: "",
        reflex: "",
      },
      tableData: [
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
          stop: 0,
        },
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
          stop: 1,
        },
      ],
    };
  },
  methods: {
    onSubmit() {},
    handleStop(data) {
      let res = !data ? "停用" : "启用";
      this.$confirm(
        `是否${res}该商品，操作该将印象以后的数据，对之前的数据不产生影响。`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
        this.$message({
          type: "success",
          message: "操作成功!",
        });
      });
    },
    /**映射操作 */
    handleMap() {
      this.$refs.mapping.dialogVisible = true;
    },
    /**点击详情 */
    showDetail() {
      this.$refs.detail.dialogVisible = true;
    },
    /**点击操作记录 */
    showRecord() {
      this.$refs.record.dialogVisible = true;
    },
    /**点击修改 */
    edit() {
      this.$refs.edit.dialogVisible = true;x
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
