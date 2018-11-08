<!--
****--@date     2018-11-06 16:44
****--@author   YC
****--@describe 首页
-->
<template>
  <layout>
    <web-header slot="header"></web-header>
    <web-menu slot="menu"></web-menu>
    <router-view slot="content"></router-view>
    <web-footer slot="footer"></web-footer>
  </layout>
</template>

<script>
  /* 当前组件必要引入 */

  import WebHeader from '../components/webHeader';
  import Layout from '../components/layout';
  import WebMenu from '../components/menu';
  import WebContent from '../components/content';
  import WebFooter from '../components/webFooter';

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
    components: {Layout, WebMenu, WebHeader, WebContent, WebFooter}
  };
</script>
