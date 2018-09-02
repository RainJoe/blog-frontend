<template>
  <mu-list>
    <mu-list-item button @click="$router.push({path: '/admin/users'})">
      <mu-list-item-action>
        <mu-icon value="account_box"></mu-icon>
      </mu-list-item-action>
    <mu-list-item-title>用户管理</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button @click="$router.push({path:'/admin/articles'})">
      <mu-list-item-action>
        <mu-icon value="collections"></mu-icon>
      </mu-list-item-action>
    <mu-list-item-title>文章管理</mu-list-item-title>
    </mu-list-item>
  </mu-list>
</template>

<script>
export default {
  name: 'AdminSideList',
  data () {
    return {

    }
  }
}
</script>

