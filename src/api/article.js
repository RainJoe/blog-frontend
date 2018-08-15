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

export function addArticle(title, img_id, desc, category, body) {
    return request({
        url: '/posts',
        method: 'POST',
        data: {
            title,
            desc,
            category,
            body,
            img_id
        }
    })
}

export function editArticle(id, title, img_id, desc, category, body) {
    return request({
        url: '/posts/' + id,
        method: 'PUT',
        data: {
            title,
            desc,
            category,
            body,
            img_id,
        }
    })
}

export function deleteArticle(id) {
    return request({
        url: '/posts/' + id,
        method: 'DELETE' 
    })
}

export function addPhoto(file) {
    return request({
        url: '/photos',
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        data: file 
    })
}