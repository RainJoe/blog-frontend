<template>
  <div>
    <navbar></navbar>
    <mu-row>
      <mu-flex justify-content="center">
        <mu-col sm="12" md="10" lg="7" xl="7">
          <div class="article-detail" v-html="article.body" v-highlight></div>
            <div class="article-comment">
              <mu-list v-for="comment in comments" :key="comment.id" textline="three-line">
                <mu-list-item avatar :ripple="false">
                  <mu-list-item-action>
                    <mu-avatar>
                      <img :src="comment.author_avatar">
                    </mu-avatar>
                  </mu-list-item-action>
                  <mu-list-item-content>
                    <mu-list-item-title>{{comment.author_name}}</mu-list-item-title>
                  </mu-list-item-content>
                  {{comment.created_time}}
                </mu-list-item>
                <mu-list-item>
                  <mu-list-item-content>
                     {{ comment.body }}
                  </mu-list-item-content>
                </mu-list-item>
              </mu-list>
              <p v-if="$store.getters.avatar">评论</p>
              <div v-else>
                <router-link :to="{path: '/login'}">登录</router-link>
                <p>登录后才能评论</p>
              </div>
              <mu-text-field v-model="comment" multi-line :rows="4" full-width></mu-text-field>
              <mu-flex justify-content="center"><mu-button :disabled="buttonShow" @click="onSubmit(article.id)">提交</mu-button></mu-flex>
            </div>
        </mu-col>
      </mu-flex>
    </mu-row>
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
  created() {
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
  margin-top: 100px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}
.article-comment {
  margin-top: 100px;
}
img {
  max-width: 800px;
}
</style>