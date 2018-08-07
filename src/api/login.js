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