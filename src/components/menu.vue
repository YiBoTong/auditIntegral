<!--
****--@date     2018-11-08 11:49
****--@author   XXL
****--@describe 菜单组件
-->
<template>
  <div class="menu-container">
    <!--v-for 循环生成菜单-->
    <el-menu :show-timeout="200"
             :default-active="$route.path"
             :collapse="isCollapse"
             mode="vertical"
             background-color="#304156"
             text-color="#bfcbd9"
             active-text-color="#409EFF">
      <el-submenu v-for="item in menuData" :key="item.id" :index="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item v-for="childItem in item.children" :key="childItem.id" :index="childItem.id" @click="routerTo(childItem.routerName)">{{childItem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'myMenu',
    props: {
      menuData: Array
    },
    data () {
      return {};
    },
    methods: {
      // 初始化
      init () {
        console.log(typeof this.menuData);
      },
      // 路由跳转
      routerTo (value) {
        let routerName = value;
        this.$router.push({
          name: routerName
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
