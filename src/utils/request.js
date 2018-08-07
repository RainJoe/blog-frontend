import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'


const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

service.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['Authorization'] = getToken()
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

export default service