<template>
<mu-list toggle-nested>
    <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
      
      <mu-list-item-action>
        <mu-icon value="archive"></mu-icon>
      </mu-list-item-action>

      <mu-list-item-title>归档</mu-list-item-title>

      <mu-list-item-action>
        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
      </mu-list-item-action>
      <mu-list-item v-for="(archive, index) in archives" :key="index" button :ripple="false" slot="nested">
        <mu-list-item-title>{{archive.year}} 年 {{archive.month}} 月</mu-list-item-title>
      </mu-list-item>
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
        console.log(this.archives)
      })
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>