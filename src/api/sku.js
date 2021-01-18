import request from '@/utils/request';

// 新增SKU
export const addNewSku = (data) => {
    return request({
        url: "/approval/addSKU",
        method: 'POST',
        data
    })
}

// 查询SKU表单相关列表
export const querySkuTableList = data => {
    return request({
        url: "/approval/queryApprovalPage",
        method: "POST",
        data
    })
}

export const getApprovalDetail = data => {
    return request({
        url: "/approval/queryPendingDetail",
        method: "POST",
        data
    })
}