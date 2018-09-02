<template>
<mu-list>
    <mu-list-item button :ripple="false" @click="handleIndex">
      <mu-list-item-action>
        <mu-icon value="home"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>主页</mu-list-item-title>
      </mu-list-item>
    <mu-list-item button :ripple="false" @click="handleArchive">
      <mu-list-item-action>
        <mu-icon value="archive"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>归档</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false" @click="handleAbout">
      <mu-list-item-action>
        <mu-icon value="face"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>关于我</mu-list-item-title>
    </mu-list-item>
  </mu-list>
</template>

<script>
import {getArchive} from '@/api/archive'
export default {
  name: 'AdminSideList',
  data () {
    return {
      open: false,
      archives: []
    }
  },
  methods: {
    fetchData() {
      getArchive().then(response => {
        this.archives = response.data
      })
    },
    handleIndex() {
      this.$router.push({path: '/'})
    },
    handleArchive() {
      this.$router.push({path: '/archive'})
    },
    handleAbout() {
      this.$router.push({path: '/about'})
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>