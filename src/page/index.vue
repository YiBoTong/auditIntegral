<!--
****--@date     2018-11-06 16:44
****--@author   YC
****--@describe 首页
-->
<template>
  <layout>
    <header slot="name"></header>
    <menu slot="menu"></menu>
    <content slot="content">
      <router-view></router-view>
    </content>
  </layout>
</template>
<script>
  /* 当前组件必要引入 */
  import Content from '../components/content';
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
    components: {Content}
  };

</script>
