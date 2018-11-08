<!--
****--@date     2018-11-08 18:53
****--@author   XXL
****--@describe 修改密码-对话框
-->
<template>
  <el-dialog
    title="提示"
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
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'changePassword',
    props: {
      state: Boolean
    },
    data () {
      return {
        dialogVisible: false
      };
    },
    watch: {
      state (value) {
        if (value) {
          this.dialogVisible = this.state;
        }
      }
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
