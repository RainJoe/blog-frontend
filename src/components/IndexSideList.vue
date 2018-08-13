<template>
  <mu-list>
    <mu-list-item button @click="$router.push({path: '/admin/users'})">
    <mu-list-item-title>文章列表</mu-list-item-title>
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