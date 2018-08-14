<template>
  <div>
    <mu-form :model="form" :label-position="labelPosition" label-width="100">
    <mu-form-item prop="input" label="标题">
      <mu-text-field v-model="form.title"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="input" label="摘要">
      <mu-text-field v-model="form.description"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="input" label="标签">
      <mu-text-field v-model="form.category"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="textarea" label="正文">
      <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.body"></mu-text-field>
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">提交</mu-button>
    </mu-form-item>
  </mu-form>
  </div>
</template>

<script>
import { addArticle, getArticle, editArticle } from '@/api/article'
import Message from 'muse-ui-message'

export default {
  data () {
    return {
      labelPosition: 'top',
      form: {
        title: '',
        description: '',
        category: '',
        body: ''
      }
    }
  },
  methods: {
    submit () {
      if (this.$route.name == 'ArticleAdd') {
        addArticle(this.form.title, this.form.description, this.form.category, this.form.body).then(response => {
          if (response.status == 200) {
            Message.alert('添加成功', '提示')
          } else {
            Message.alert('添加失败', '提示')
          }
        }).catch(error => {
          Message.alert('添加失败', '提示')
        })
      } else {
        editArticle(this.$route.params.id, this.form.title, this.form.description, this.form.category, this.form.body).then(response => {
          if (response.status == 200) {
            Message.alert('修改成功', '提示')
          } else {
            Message.alert('修改失败', '提示')
          }
        }).catch(error => {
          Message.alert('添加失败', '提示')
        })
      }
    },
    fetchData () {
      if (this.$route.name == 'EditArticle') {
        getArticle(this.$route.params.id).then(response => {
          this.form.title = response.data.title
          this.form.description = response.data.desc
          this.form.category = response.data.category
          this.form.body = response.data.body
        })
      }
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

