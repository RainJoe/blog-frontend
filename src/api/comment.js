import request from '@/utils/request'

export function addComment(id, body) {
    return request({
        url: '/comments/'+id,
        method: 'POST',
        data: {
            body
        }
    })
}

export function getComments(id) {
    return request({
        url: '/comments/'+id,
        method: 'GET'
    })
}