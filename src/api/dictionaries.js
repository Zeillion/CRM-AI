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

// 编辑数据字典页面初始化查询
export const queryAllDictType = data => {
  return request({
    url: '/system/dict/type/listWithData',
    data,
    method: 'POST'
  })
}

// 新增加data取值生效操作
export const dictDataEffects = data => {
  return request({
    url: '/system/dict/data/effects',
    data,
    method: 'POST'
  })
}

// 字典取值启用操作
export const dictDataEnable = data => {
  return request({
    url: '/system/dict/data/enable',
    data,
    method: 'POST'
  })
}

// 字典取值禁用操作
export const dictDataDisable = data => {
  return request({
    url: '/system/dict/data/disable',
    data,
    method: 'POST'
  })
}

// 查询数据字典日志操作
export const getDictDataLogs = data => {
  return request({
    url: '/system/dict/log/list',
    data,
    method: 'POST'
  })
}
