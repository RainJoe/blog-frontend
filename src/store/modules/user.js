import { login, logout } from '@/api/login'
import { 
    getToken, setToken, removeToken,
    getName, setName, removeName,
    getAvatar, setAvatar, removeAvatar,
    getRole, setRole, removeRole
} from '@/utils/auth'


const user = {
    state: {
        token: getToken(),
        name: getName(),
        avatar: getAvatar(),
        is_admin: getRole()
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
                    setName(response.data.name)
                    setAvatar(response.data.avatar)
                    setRole(response.data.is_admin)
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
                    removeAvatar()
                    removeName()
                    removeRole()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user