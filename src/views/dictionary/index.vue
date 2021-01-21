<template>
  <div class="wrapper">
    <div class="bold big_title">数据字典</div>
    <div class="flex_wrapper">
      <div class="red_text">
        *添加字段后请点击生效按钮；生效后增加的字段值无法修改，请谨慎填写；
      </div>
      <div>
        <el-button type="primary" size="small" @click="showRecord">操作记录</el-button>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleTabsClick">
      <el-tab-pane v-loading="loading" label="字段编辑" name="first">
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
          <el-table-column prop="name" label="字段名">
            <template slot-scope="scope">
              <div class="show-item">*{{ scope.row.name }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="dataList" label="字段值" width="300">
            <template slot-scope="scope">
              <div
                class="show-item"
                v-for="(item, index) in scope.row.dataList"
                :key="index"
              >
                <template v-if="item.isNew==false">
                  {{ item.desc }}
                </template>
                <template v-else>
                  <template v-if="item.showInput==false">
                    {{ item.desc }}
                    <span class="canEdit" v-show="item.isNew">
                    <el-button type="text" @click="onModifyClick(scope, item, index)">修改</el-button>
                  </span>
                  </template>
                  <template v-else-if="item.showInput==true">
                    <el-input
                      placeholder="请输入"
                      size="mini"
                      style="width: 140px"
                      class="flex_item"
                      v-model="item.desc"
                    ></el-input>
                    <div>
                      <el-button type="text" @click="onDescEditfinish(scope, item, index)"
                      >完成
                      </el-button
                      >
                      <el-button type="text">
                      <span class="gray_btn" @click="onDescEditDelete(scope, item, index)"
                      >删除</span
                      >
                      </el-button>
                    </div>
                  </template>
                </template>
              </div>
              <div class="show-item" v-if="!scope.row.showInput">
                <el-button type="text" @click="addWord(scope.row)"
                >增加值
                </el-button
                >
              </div>
              <div v-else class="flex_container">
                <el-input
                  placeholder="请输入"
                  size="mini"
                  style="width: 140px"
                  class="flex_item"
                  v-model="scope.row.newValue"
                ></el-input>
                <div>
                  <el-button type="text" @click="onAddfinish(scope)">完成
                  </el-button
                  >
                  <el-button type="text">
                    <span class="gray_btn" @click="cancel(scope.row)">取消</span>
                  </el-button>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="dataList" label="操作">
            <template slot-scope="scope">
              <template v-for="(dataItem, index) in scope.row.dataList">
                <div class="show-item" :key="'opt' + index">
                  <template v-if="dataItem.isNew == false">
                    <el-button
                      size="small"
                      type="text"
                      :disabled="dataItem.status == 0"
                      @click="onDictDataDisableClick(scope, dataItem, index)"
                    >停用
                    </el-button>
                    <el-button
                      size="small"
                      type="text"
                      :disabled="dataItem.status == 1"
                      @click="onDictDataEnableClick(scope, dataItem, index)"
                    >启用
                    </el-button>
                  </template>
                </div>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <div class="effect-btn-div">
      <el-button type="primary" size="mini" @click="onEffectsClick()">生效</el-button>
      <!-- <button class="effect-btn">生效</button> -->
    </div>

    <record-dialog ref="record"></record-dialog>
  </div>
</template>

<script>
  import RecordDialog from './dialogs/recordDialog'
  import { queryAllDictType, dictDataEffects, dictDataDisable, dictDataEnable } from '@/api/dictionaries'

  export default {
    name: 'Dictionary',
    components: { RecordDialog },
    props: {},
    data() {
      return {
        cellStyle: {
          'font-size': '14px',
          color: '#1F2D3D'
        },
        activeName: 'first',
        loading: false,
        tableData: [
          // {
          //   name: "商品类型",
          //   data: [
          //     "全国统一主推产品",
          //     "全国统一组合产品",
          //     "区域主推产品",
          //     "区域组合产品",
          //   ],
          //   word: "",
          //   showInput: false,
          // },
          // {
          //   name: "本竞品",
          //   data: ["本品", "竟品", "其他1"],
          //   word: "",
          //   showInput: false,
          // },
        ]
      }
    },
    watch: {},
    computed: {},
    methods: {
      /** 获取初始化的字典数据 */
      async getAllDictData() {
        let that = this
        that.loading = true
        const result = await queryAllDictType({})
        if (result) {
          let dictTypeList = result.dictTypeList ? result.dictTypeList : []
          dictTypeList.map((typeItem) => {
            // 控制新增输入框和值
            typeItem.showInput = false
            typeItem.newValue = ''
            typeItem.dataList.map((dataItem) => {
              // 按钮修改输入框
              dataItem.showInput = false
              dataItem.isNew = false
            })
          })
          this.tableData = dictTypeList
          console.log(JSON.parse(JSON.stringify(result)), 'result')
          console.log(
            JSON.parse(JSON.stringify(this.tableData)),
            'this.tableData'
          )
        }
        setTimeout(() => {
          that.loading = false
        }, 300)
      },

      /**点击操作记录 */
      showRecord() {
        this.$refs.record.dialogVisible = true
      },

      /**增加值 */
      addWord(row) {
        console.log('addWord')
        row.showInput = true
      },

      /**完成 */
      onAddfinish(scope) {
        let that = this
        let dictTypeIndex = scope.$index
        let row = scope.row
        if (row.newValue) {
          let newDictData = {
            isNew: true,
            showInput: false,
            desc: row.newValue
          }
          row.dataList.push(newDictData)
          row.newValue = ''
        }
        row.showInput = false
        // 装入数据
        let dictTypeList = that.tableData
        dictTypeList[dictTypeIndex] = row
        that.tableData = dictTypeList
      },

      /**当点击修改按钮时，处理输入框显示状态*/
      onModifyClick(scope, item, index) {
        let that = this
        let dictTypeIndex = scope.$index
        item.showInput = true
        scope.row.dataList[index] = item

        // 装入数据
        let dictTypeList = that.tableData
        dictTypeList[dictTypeIndex] = scope.row
        that.tableData = dictTypeList
      },

      /**未保存的值修改完成。 */
      onDescEditfinish(scope, item, index) {
        let that = this
        let dictTypeIndex = scope.$index
        if (item.isNew == true && item.desc == '') {
          // 值为空的时候删除此项
          scope.row.dataList.splice(index, 1)
        } else {
          item.showInput = false
          scope.row.dataList[index] = item
        }
        // 装入数据
        let dictTypeList = that.tableData
        dictTypeList[dictTypeIndex] = scope.row
        that.tableData = dictTypeList
      },

      /**删除新添加的值（还没有提交后台保存）*/
      onDescEditDelete(scope, item, index) {
        let that = this
        let dictTypeIndex = scope.$index

        // 删除此项
        scope.row.dataList.splice(index, 1)

        // 装入数据
        let dictTypeList = that.tableData
        dictTypeList[dictTypeIndex] = scope.row
        that.tableData = dictTypeList
      },

      /**数据字典新增值生效操作（批量） */
      async onEffectsClick() {
        let that = this
        let dictTypeList = that.tableData
        let addTypeList = []
        dictTypeList.map((typeItem) => {
          let descList = []
          typeItem.dataList.map((dataItem) => {
            if (dataItem.isNew == true) {
              descList.push(dataItem.desc)
            }
          })
          if (descList.length > 0) {
            addTypeList.push({
              type: typeItem.type,
              descList: descList
            })
          }
        })
        if (addTypeList.length > 0) {
          const result = await dictDataEffects({ dataList: addTypeList })
          if (result) {
            let duplicateDataList = result.duplicateDataList ? result.duplicateDataList : []
            let effectList = result.effectList ? result.effectList : []
            if (duplicateDataList.length > 0) {
              this.sucMessage('保存成功，生效' + effectList.length + '项，重复' + duplicateDataList.length + '项')
            } else {
              this.sucMessage('保存成功，生效' + effectList.length + '项')
            }
            // 重新加载数据
            that.getAllDictData()
          }
        } else {
          this.errMessage('没有需要提交的数据！')
        }
      },

      /** 数据字典启用 */
      onDictDataEnableClick(scope, dataItem, index) {
        let that = this
        this.$confirm('是否启用【' + dataItem.desc + '】?，操作该将影响以后的数据，对之前的数据不产生影响。', '提示', {
          confirmButtonText: '启用',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          that.handDictDataEnable(scope, dataItem, index)
        }).catch(() => {
        })
      },

      /** 数据字典启用 */
      async handDictDataEnable(scope, dataItem, index) {
        let that = this
        let dictDataCode = dataItem.code
        if (dictDataCode) {
          let result = await dictDataEnable({ dictCode: dictDataCode })
          console.log(result, 'result')
          if (result.status == 'success') {
            // 装入数据
            let dictTypeIndex = scope.$index
            let dictTypeList = that.tableData
            dataItem.status = 1
            dictTypeList[dictTypeIndex].dataList[index] = dataItem
            that.tableData = dictTypeList
            this.sucMessage('【' + dataItem.desc + '】字段已生效')
          } else {
            this.errMessage('【' + dataItem.desc + '】字段生效失败')
          }
        }
      },

      /** 数据字典停用*/
      onDictDataDisableClick(scope, dataItem, index) {
        let that = this
        this.$confirm('是否停用【' + dataItem.desc + '】?，操作该将影响以后的数据，对之前的数据不产生影响。', '提示', {
          confirmButtonText: '停用',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          that.handDictDataDisable(scope, dataItem, index)
        }).catch(() => {
        })
      },

      /** 数据字典停用 */
      async handDictDataDisable(scope, dataItem, index) {
        let that = this
        let dictDataCode = dataItem.code
        if (dictDataCode) {
          let result = await dictDataDisable({ dictCode: dictDataCode })
          console.log(result, 'result')
          if (result.status == 'success') {
            // 装入数据
            let dictTypeIndex = scope.$index
            let dictTypeList = that.tableData
            dataItem.status = 0
            dictTypeList[dictTypeIndex].dataList[index] = dataItem
            that.tableData = dictTypeList
            this.sucMessage('【' + dataItem.desc + '】字段已停用')
          } else {
            this.errMessage('【' + dataItem.desc + '】字段停用失败')
          }
        }
      },

      /**取消 */
      cancel(row) {
        row.showInput = false
        row.word = ''
      },
      handleTabsClick() {
        console.log('handleTabsClick')
      },
      tableRowClassName() {
        return 'dict-data-row'
      }
    }
    ,
    mounted() {
      let that = this
      that.getAllDictData()
    }
  }
</script>
<style lang="scss" scoped>
  .effect-btn-div {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .big_title {
    margin-bottom: 20px;
  }

  .red_text {
    margin-bottom: 20px;
  }

  .wrapper {
    min-height: calc(100vh - 60);
  }
</style>

<style lang="scss">
  .dict-data-row {
    td {
      vertical-align: top;

      .cell {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .show-item {
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 30px;

          .flex_item {
            margin-right: 20px;
          }

          .canEdit {
            margin-left: 5px;
          }
        }
      }
    }
  }
</style>
