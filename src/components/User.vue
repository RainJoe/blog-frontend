<template>
  <div>
      <mu-data-table :columns="columns" :data="list">
        <template slot-scope="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.name}}</td>
        </template>
      </mu-data-table>
  </div>
</template>

<script>
import { getUsers } from '@/api/user'
export default {
  name: 'User',
  data () {
    return {
      columns: [
        {title: 'id'},
        {title: 'name'}
      ],
      list: []
    }
  },
  methods: {
    fetchData () {
      getUsers().then(response => {
        this.list = response.data.users
      })
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

