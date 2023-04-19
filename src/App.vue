<template>
  <div id="app">
    <el-input
        placeholder="请输入内容"
        v-model="username"
        clearable>
    </el-input>
    <el-input
        placeholder="请输入内容"
        v-model="password"
        clearable>
    </el-input>

    <el-button :plain="true" @click="submit">登录</el-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      username: '',
      password: ''

    }
  },
  methods:{
    submit(){
      if(this.username=='zs'&&this.password=='123'){
        this.$message({
          message: '恭喜你登录成功',
          type: 'success'
        });
      }else{
        this.$message.error("登录失败，请检查账号密码")
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
