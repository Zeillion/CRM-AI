import { Message } from 'element-ui';

/**
 * 
 * @description 错误信息顶部提示
 * @param {String} message 消息文字
 * @author 王龙
 * @copyright 信必优（中国）华润雪花AI项目
 */
const baseMessage = (message, type, s) => {
    Message({
        message,
        type,
        duration: s * 1000
    })
}

export const errMessage = (message, s = 3) => {
    baseMessage(message, 'error', s)
}

export const sucMessage = (message, s = 3) => {
    baseMessage(message, 'success', s)
}
