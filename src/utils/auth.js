import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const NameKey = 'Name'
const AvatarKey= 'Avatar'
const RoleKey = 'RoleKey'


export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 1 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getName() {
  return Cookies.get(NameKey)
}

export function setName(name) {
  return Cookies.set(NameKey, name, { expires: 1 })
}

export function removeName() {
  return Cookies.remove(NameKey)
}

export function getAvatar() {
  return Cookies.get(AvatarKey)
}

export function setAvatar(avatar) {
  return Cookies.set(AvatarKey, avatar, { expires: 1 })
}

export function removeAvatar() {
  return Cookies.remove(AvatarKey)
}

export function getRole() {
  return Cookies.get(RoleKey)
}

export function setRole(role) {
  return Cookies.set(RoleKey, role, { expires: 1 })
}

export function removeRole() {
  return Cookies.remove(RoleKey)
}