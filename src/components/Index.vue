<template>
  <div>
    <navbar></navbar>
    <mu-row>
      <mu-flex justify-content="center">
        <mu-col sm="12" md="10" lg="7" xl="7">
          <mu-card v-for="article in articles" :key="article.id" style="margin-top: 8px;">
            <mu-card-header :title="article.author" :sub-title="article.created_time">
              <mu-avatar slot="avatar">
                <img :src="article.author_avatar">
              </mu-avatar>
            </mu-card-header>
            <mu-card-media>
              <img :src="article.img.url">
            </mu-card-media>
            <mu-card-title :title="article.title"></mu-card-title>
            <mu-card-text>
              {{ article.desc}}
              <router-link :to="{ name: 'articleDetail', params: { id: article.id}}">继续阅读</router-link>
            </mu-card-text>
          </mu-card>
          <mu-flex justify-content="center">
            <mu-pagination :total="count" :current.sync="current" :page-size="pageSize" @change="pageChange"></mu-pagination>
          </mu-flex>
        </mu-col>
      </mu-flex>
    </mu-row>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { getArticles } from '@/api/article'
export default {
  name: "Index",
  data() {
    return {
      articles: [],
      count: 0,
      current: 1,
      pageSize: 5,
      allArticles: []
    }
  },
  methods: {
    fetchData() {
      getArticles().then(response => {
        this.allArticles = response.data.posts
        this.count = response.data.count
        this.articles = this.allArticles.slice((this.current-1)*this.pageSize, this.current*this.pageSize)
      }).catch(error => {
        console.log(error)
      })
    },
    pageChange () {
      this.articles = this.allArticles.slice((this.current-1)*this.pageSize, this.current*this.pageSize)
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    Navbar
  }
}
</script>
