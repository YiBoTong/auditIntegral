<!--
****--@date     2018-11-06 16:44
****--@author   YC
****--@describe 首页
-->
<template>
  <layout>
    <header slot="name"></header>
    <menu slot="menu"></menu>
    <router-view slot="content"></router-view>
  </layout>
</template>
<script>
  /* 当前组件必要引入 */
  import Layout from '../components/layout';
  export default {
    name: 'index',
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
    components: {Layout}
  };

</script>
