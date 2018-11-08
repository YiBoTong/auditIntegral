<!--
****--@date     2018-11-06 16:19
****--@author   YC
****--@describe 登录
-->
<template>
  <div>
    <div class="login-container">
      <div class="login">
        <div class="title">
          <span>
          稽核积分系统
          </span>
        </div>
        <el-form label-width="60px">
          <el-form-item label="员工号" v-model="data">
            <el-input type="text" placeholder="请输入员工号" v-model="data.user"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" placeholder="请输入密码" v-model="data.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" size="medium" plain @click="login()">登录系统</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'login',
    props: [],
    data () {
      return {
        data: {
          user: 'admin',
          password: 'admin'
        }
      };
    },
    methods: {
      // 初始化
      init () {
      },
      // 登录系统
      login () {
        console.log(this.data);
        //
        this.$router.push({
          name: 'manage'
        });
      }
    },
    created () {
      this.init();
    },
    mounted () {
    },
    components: {}
  };

</script>

<style lang="sass">
  @import "../assets/sass/index.scss"
</style>
