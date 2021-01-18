import request from '@/utils/request';

// 新增SKU
export const addNewSku = (data) => {
    return request('/approval/addSKU', 'POST', data)
}