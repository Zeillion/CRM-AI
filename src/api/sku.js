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

// 获取待审批详情
export const getApprovalDetail = data => {
    console.log(data)
    return request({
        url: "/approval/queryPendingDetail",
        method: "POST",
        data
    })
}

// SKU审批通过
export const approvalPass = data => {
    return request({
        url: "/approval/pendingPass",
        method: "POST",
        data
    })
}

// SKU审批驳回
export const approvalReject = data => {
    return request({
        url: "/approval/pendingRejected",
        method: "POST",
        data
    })
}

// SKU审批详情查询
export const approvalQueryDetail = data => {
    return request({
        url: "/approval/queryPendingDetail",
        method: "POST",
        data
    })
}