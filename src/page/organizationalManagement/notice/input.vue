<!--
****--@date     2018-11-12 14:03
****--@author   XXL
****--@describe 通知公告编辑
-->
<template>
  <div class="form-container">
    <el-button @click="backList">返回列表</el-button>
    <el-form ref="createForm" label-width="100px" class="createForm" model="createFormData">
      <el-form-item label="标题" prop="title">
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="createFormData.notificationScope" placeholder="请选择活动区域">
          <el-option label="全部" value=""></el-option>
          <el-option label="xx部门" value=""></el-option>
          <el-option label="xx网点" value=""></el-option>
          <el-option label="xx人员" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">完成</el-button>
        <el-button @click="resetForm(createForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'noticeInput',
    props: [],
    data () {
      return {
        createFormData: {
          title: '',
          notificationScope: ''
        }
      };
    },
    methods: {
      // 初始化
      init () {
      },
      // 返回列表
      backList () {
        this.$emit('view', 'list');
      },
      // 重置表单
      resetForm (formName) {
        this.$refs[formName].resetFields();
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
