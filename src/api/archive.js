import request from '@/utils/request'


export function getArchive() {
    return request({
        url: '/archive',
        method: 'GET'
    })
}
