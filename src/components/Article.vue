<template>
  <div>
    <mu-appbar>
        <mu-button fab color="teal" slot="right" @click="$router.push({path: 'addarticle'})">
            <mu-icon value="add"></mu-icon>
        </mu-button>
    </mu-appbar>
      <mu-data-table :columns="columns" :data="list">
        <template slot-scope="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.title}}</td>
        <td>{{scope.row.desc}}</td>
        <td>{{scope.row.created_time}}</td>
        <td>
          <mu-button fab color="red" @click="$router.push({path: 'editarticle/'+ scope.row.id})">
            <mu-icon value="edit"></mu-icon>
          </mu-button>

          <mu-button fab color="indigo" @click="openAlertDialog">
            <mu-icon value="remove"></mu-icon>
          </mu-button>

          <mu-dialog title="提示" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
             确定删除 {{scope.row.title}} ?
          <mu-button slot="actions" flat color="primary" @click="delArticle(scope.row.id)">确定</mu-button>
          <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">取消</mu-button>
          </mu-dialog>
        </td>
        </template>
      </mu-data-table>
  </div>
</template>

<script>
import { getArticles, deleteArticle } from '@/api/article'
import Message from 'muse-ui-message'

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
      list: [],
      openAlert: false
    }
  },
  methods: {
    fetchData () {
      getArticles().then(response => {
        this.list = response.data.posts
      })
    },
    delArticle(id) {
      this.openAlert = false
      deleteArticle(id).then(response => {
        if (response.status == 201) {
          Message.alert("删除成功", "提示")
          this.fetchData()
        } else {
          Message.alert("删除失败", "提示")
        }
      }).catch(error => {
        Message.alert("删除失败", "提示")
      })
    },
    openAlertDialog () {
      this.openAlert = true;
    },
    closeAlertDialog () {
      this.openAlert = false;
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
