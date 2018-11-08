<!--
****--@date     2018-11-08 11:49
****--@author   XXL
****--@describe 菜单组件
-->
<template>
  <div class="menu-container">
    <el-menu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>机构管理</span>
        </template>
        <el-menu-item index="1-1">通知公告</el-menu-item>
        <el-menu-item index="1-2">部门管理</el-menu-item>
        <el-menu-item index="1-3">人员管理</el-menu-item>
        <el-menu-item index="1-4">管理办法</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>稽核管理</span>
        </template>
        <el-menu-item index="2-1">工作底稿</el-menu-item>
        <el-menu-item index="2-2">确认书</el-menu-item>
        <el-menu-item index="2-3">处罚通知</el-menu-item>
        <el-menu-item index="2-4">积分表</el-menu-item>
        <el-menu-item index="2-5">统计分析</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="3-1">字典管理</el-menu-item>
        <el-menu-item index="3-2">登录管理</el-menu-item>
        <el-menu-item index="3-3">系统日志</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'myMenu',
    props: [],
    data () {
      return {};
    },
    methods: {
      // 初始化
      init () {
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
