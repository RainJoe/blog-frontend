<template>
  <div>
    <mu-flex class="flex-wrapper" justify-content="center">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
            <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-flex>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      validateForm: {
        username: '',
        password: '',
      }  
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        this.$http({
          url: '/api/sessions',
          method: 'POST',
          data: {email: this.validateForm.username, password: this.validateForm.password}
        }).then(response => {
          console.log(response.data)
          this.$router.push({path: '/'})
        }).catch(error => {
          this.$alert(error.response.data.message, 'Login Failed')
        })
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
      };
    }
  }
}
</script>

