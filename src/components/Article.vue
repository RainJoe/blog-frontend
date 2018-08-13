<template>
  <div>
    <mu-appbar>
        <mu-button fab color="teal" slot="right">
            <mu-icon value="add"></mu-icon>
        </mu-button>
    </mu-appbar>
      <mu-data-table :columns="columns" :data="list">
        <template slot-scope="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.title}}</td>
        <td>{{scope.row.description}}</td>
        <td>{{scope.row.created_time}}</td>
        <td>
          <mu-button fab color="red">
            <mu-icon value="edit"></mu-icon>
          </mu-button>

          <mu-button fab color="indigo">
            <mu-icon value="remove"></mu-icon>
          </mu-button>
        </td>
        </template>
      </mu-data-table>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
  name: 'Article',
  data () {
    return {
      columns: [
        {title: 'id'},
        {title: 'title'},
        {title: 'description'},
        {title: 'create time'},
        {title: 'operation'},
      ],
      list: []
    }
  },
  methods: {
    fetchData () {
      getArticles().then(response => {
        this.list = response.data.posts
      })
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
