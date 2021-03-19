<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      model: {}
    }
  },
  methods:{
    async login() {
      // console.log(this.model)
      const res = await this.$http.post('login', this.model)//得到token
      console.log(res.data);
    }
  }
}
</script>

<style scoped>
.login-card{
  width: 25rem;
  margin: 10rem auto;
}
</style>