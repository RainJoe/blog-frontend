import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'
import Message from 'muse-ui-message'


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
    Message.alert('请求失败!!!', '提示')
    Promise.reject(error)
})

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response.data.status == 404) {
            Message.alert('资源不存在', '提示')
        }
        return Promise.reject(error)
    }
)
export default service