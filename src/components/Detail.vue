<template>
  <div>
    <navbar></navbar>
    <div class="article-detail" v-html="article.body" v-highlight></div>
    <div class="article-comment">
      <mu-list v-for="comment in comments" :key="comment.id" textline="two-line">
        <mu-list-item avatar :ripple="false" button>
          <mu-list-item-action>
            <mu-avatar>
              <img :src="comment.author_avatar">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{comment.author_name}}</mu-list-item-title>
            <mu-list-item-sub-title>
              {{ comment.created_time }}
            </mu-list-item-sub-title>
          </mu-list-item-content>
          {{comment.body}}
        </mu-list-item>
      </mu-list>
      
      <p>评论</p>
      <mu-text-field v-model="comment" multi-line :rows="4" full-width></mu-text-field>
      <mu-flex justify-content="center"><mu-button :disabled="buttonShow" @click="onSubmit(article.id)">提交</mu-button></mu-flex>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import {getArticle} from '@/api/article'
import {addComment, getComments} from '@/api/comment'
import Message from 'muse-ui-message'

export default {
  name: "Detail",
  data () {
    return {
      article: '',
      comment: '',
      comments: [],
      buttonShow: true
    }
  },
  methods: {
    fetchData () {
      getArticle(this.$route.params.id).then(response => {
        this.article = response.data
      })
      getComments(this.$route.params.id).then(response => {
        this.comments = response.data
      })
    },
    onSubmit (id) {
      addComment(id, this.comment).then(response => {
        Message.alert("添加成功", "提示")
        this.fetchData()
      }).catch(error => {
        Message.alert("添加失败", "提示")
      })
    }
  },
  mounted() {
    if (this.$store.getters.avatar) {
      this.buttonShow = false
    }
    this.fetchData()
  },
  components: {
    Navbar
  }
}
</script>
<style>
.article-detail {
  width: 56%;
  margin: auto;
  margin-top: 100px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}
.article-comment {
  width: 56%;
  margin: auto;
  margin-top: 100px;
}
</style>

