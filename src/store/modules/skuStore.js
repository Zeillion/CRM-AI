import { querySkuTableList } from "@/api/sku";
import { findCondition } from '@/api/dictionaries'
export const skuStore = {
  state: {
    tableMessage: [], // sku表格数据
    tableTotal: 0,  // table总条数

    pageNum: 1, // 当前页
    pageSize: 10, // 每页显示条数

    product_type: [], // 查询用商品类型
    product_brand: [], // 查询用商品品牌
    product_packaging_form: [], // 查询用商品包装形式

    searchObj: null, // 筛选的条件数据
  },
  mutations: {
    // 下一页
    addPageNum(state) {
      state.pageNum++
    },

    // 上一页
    descPageNum(state) {
      state.pageNum--
    },

    // 重置当前页下标
    resetPageNum(state) {
      state.pageNum = 1
    },
  },
  actions: {
    // 获取 table 数据
    async getSkuTableMessage(context, payload) {
      console.log(payload)
      context.state.tableMessage = [];
      let state = context.state;
      if (JSON.stringify(payload)) {
        state.searchObj = payload.filter
      } else {
        payload['filter'] = state.searchObj
      }

      payload = {
        ...payload,
        pageNum: state.pageNum,
        pageSize: state.pageSize
      }
      let result = await querySkuTableList(payload);
      // 拼接处理24位图
      result.rows && result.rows.length && result.rows.map(item => {
        item.polyhedralImg = (item.polyhedralImg && item.polyhedralImg.split(',')) || [];
      })
      // table数据绑定
      context.state.tableMessage = result.rows;
      // 数据total绑定
      context.state.tableTotal = result.total;
    },

    // 获取 table 查询使用的数据
    async getSearchMessage(context, payload) {
      let state = context.state;
      let result = await findCondition({
        typeList: ["product_type", "product_brand", "product_packaging_form"]
      })
      let dictTypeList = result.dictTypeList;
      for (let i = 0; i < dictTypeList.length; i++) {
        let dictTypeItem = dictTypeList[i];
        dictTypeItem.dataList.unshift({
          desc: ''
        })
        state.product_type = dictTypeItem.type === 'product_type' ? dictTypeItem.dataList : state.product_type;
        state.product_brand = dictTypeItem.type === 'product_brand' ? dictTypeItem.dataList : state.product_brand;
        state.product_packaging_form = dictTypeItem.type === 'product_packaging_form' ? dictTypeItem.dataList : state.product_packaging_form;
      }
    }
  }
}