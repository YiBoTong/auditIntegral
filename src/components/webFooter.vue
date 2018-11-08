<!--
****--@date     2018-11-08 17:53
****--@author   XXL
****--@describe 底部组件
-->
<template>
  <div class="footer-container">
    <div class="footer-content">
      <span>上次登录时间：2018-01-10 12:12</span>
      <span>最后修改密码时间：2018-01-10 12:12</span>
    </div>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'webFooter',
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
