<!--
****--@date     2018-11-08 11:48
****--@author   XXL
****--@describe 头部组件
-->
<template>
  <div class="header-container">
    <div class="header-logo">
      <img :src="headerLogo.logo" :alt="headerLogo.alt">
    </div>
    <div class="header-administrator">
      <i class="el-icon-info"></i>
      <span>姓名（机构或者单位名称）</span>
      <el-dropdown>
        <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>123456789</el-dropdown-item>
          <el-dropdown-item divided>
            <div @click="changePassword">密码修改</div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div @click="exitLogin">退出登录</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form>
        <el-form-item label="旧密码">
          <el-input placeholder="请输入旧密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input placeholder="请输入新密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
     </span>
    </el-dialog>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'webHeader',
    props: [],
    data: function () {
      return {
        headerLogo: {
          logo: require('../../static/logo.png'),
          alt: '贵州农信'
        },
        dialogVisible: false
      };
    },
    methods: {
      // 初始化
      init () {
      },
      // 修改密码
      changePassword () {
        this.dialogVisible = true;
        console.log(this.dialogVisible);
      },
      // 退出登录
      exitLogin () {
        this.$router.push({
          name: 'login'
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
