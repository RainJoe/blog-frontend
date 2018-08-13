import request from '@/utils/request'


export function getArticles() {
    return request({
        url: '/posts',
        method: 'GET'
    })
}