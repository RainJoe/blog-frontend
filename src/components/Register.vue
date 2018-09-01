<template>
  <div class="register-page">
      <mu-flex class="flex-wrapper" justify-content="center" style="padding-top: 200px;">
        <mu-flex>
          <mu-form ref="form" :model="validateForm" class="mu-demo-form">
            <mu-form-item label="邮箱" help-text="填写注册邮箱" prop="email" :rules="emailRules">
              <mu-text-field v-model="validateForm.email" prop="email"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="昵称" prop="name">
              <mu-text-field v-model="validateForm.name" prop="name"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码" prop="password" :rules="passwordRules">
                <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="确认密码" prop="passwordConfirm" :rules="passwordConfirmRules">
                <mu-text-field type="password" v-model="validateForm.passwordConfirm" prop="passwordConfirm"></mu-text-field>
            </mu-form-item>
            <mu-form-item>
              <mu-button color="primary" @click="submit">提交</mu-button>
              <mu-button @click="clear" style="margin-left: 290px;">重置</mu-button>
            </mu-form-item>
          </mu-form>
        </mu-flex>
      </mu-flex>
  </div>
</template>

<script>
import {register} from '@/api/login'
import Message from 'muse-ui-message'
export default {
  name: "Register",
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
      passwordConfirmRules: [
        { validate: (val) => !!val, message: '必须确认密码'},
        { validate: (val) => val == this.validateForm.password, message: '两次密码不一致'},
      ],
      validateForm: {
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
      }  
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
          if (result) {
            register(this.validateForm.email, this.validateForm.name, this.validateForm.password).then(response => {
              this.$router.push({path: '/login'})
            }).catch(error => {
                if (error.response.status == 409) {
                    Message.alert('邮箱已被注册', '提示')
                } else {
                    console.log(error.response)
                }
            })
          }
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
<style scoped>
.register-page {
  height: 1080px;
  background: #eeeeee;
}
</style>