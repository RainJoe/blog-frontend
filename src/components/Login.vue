<template>
  <div>
    <mu-flex class="flex-wrapper" justify-content="center">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="邮箱" help-text="填写注册邮箱" prop="email" :rules="emailRules">
          <mu-text-field v-model="validateForm.email" prop="email"></mu-text-field>
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
      emailRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      validateForm: {
        email: '',
        password: '',
      }  
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        this.$store.dispatch('Login', this.validateForm).then(() => {
          this.$router.push({name: 'Index'})
          location.reload()
        }).catch(error => {
          console.log(error)
        })
      })
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

