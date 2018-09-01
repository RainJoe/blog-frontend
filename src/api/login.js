import request from '@/utils/request'


export function login(email, password) {
    return request({
        url: '/sessions',
        method: 'POST',
        data: {
            email,
            password
        }
    })
}

export function logout() {
    return request({
        url: '/sessions',
        method: 'DELETE'
    })
}

export function register(email, name, password) {
    return request({
        url: '/users',
        method: 'POST',
        data: {
            email,
            name,
            password
        }
    })
}