import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'


const user = {
    state: {
        token: getToken(),
        name: '',
        avatar: '',
        is_admin: false
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLE: (state, is_admin) => {
            state.is_admin = is_admin
        }
    },
    actions: {
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo.email, userInfo.password).then(response => {
                    setToken(response.data.token)
                    commit('SET_TOKEN', response.data.token)
                    commit('SET_AVATAR', response.data.avatar)
                    commit('SET_NAME', response.data.name)
                    commit('SET_ROLE', response.data.is_admin)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Logout({commit})  {
            return new Promise((resolve, reject) => {
                logout().then(response => {
                    commit('SET_TOKEN', '')
                    commit('SET_NAME', '')
                    commit('SET_AVATAR', '')
                    commit('SET_ROLE', false)
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user