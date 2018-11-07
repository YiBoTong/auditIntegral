<!--
****--@date     2018-11-07 17:50
****--@author   XXL
****--@describe layout布局
-->
<template>
  <div class="layout-container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <div class="menu">
        <slot name="menu"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'layout',
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
