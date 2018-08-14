import request from '@/utils/request'


export function getArticles() {
    return request({
        url: '/posts',
        method: 'GET'
    })
}

export function getArticle(id) {
    return request({
        url: '/posts/' + id,
        method: 'GET'
    })
}

export function addArticle(title, desc, category, body) {
    return request({
        url: '/posts',
        method: 'POST',
        data: {
            title,
            desc,
            category,
            body
        }
    })
}

export function editArticle(id, title, desc, category, body) {
    return request({
        url: '/posts/' + id,
        method: 'PUT',
        data: {
            title,
            desc,
            category,
            body
        }
    })
}

export function deleteArticle(id) {
    return request({
        url: '/posts/' + id,
        method: 'DELETE' 
    })
}