<template>
  <div>
    <navbar></navbar>
    <div class="archive-page">
    <Timeline>
        <TimelineItem v-for="(archive, index) in archives" :key="index">
            <p class="time">{{archive.year}}年{{archive.month}}月</p>
            <p class="content" v-for="post in archive.posts" :key="post.id"><router-link :to="{ name: 'articleDetail', params: { id: post.id}}">{{ post.title}}</router-link></p>
        </TimelineItem>
    </Timeline>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import {getArchive} from '@/api/archive'
export default {
  data () {
    return {
      name: 'archive',
      archives: []
    }
  },
  methods: {
    fetchData () {
      getArchive().then(response => {
        this.archives = response.data
      })
    }
  },
  created() {
    this.fetchData()
  },
  components: {
    Navbar
  }
}
</script>

<style>
.archive-page {
  width: 50%;
  margin: auto;
  margin-top: 100px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}
.time {
    font-size: 20px;
    font-weight: bold;
}
.content{
    padding-left: 5px;
}
</style>
