const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    is_admin: state => state.user.is_admin,
}

export default getters