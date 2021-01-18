/**
 * @description 字典类接口
 * @author 王龙
 * @copyright 信必优（中国）华润雪花AI项目
 */
import request from '@/utils/request'

// 获取数据字典用于前端查询
export const findCondition = data => {
    return request({
        url: '/system/dict/type/typeWithData',
        data,
        method: 'POST'
    })
}