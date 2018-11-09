<!--
****--@date     2018-11-09 15:57
****--@author   XXL
****--@describe 积分表
-->
<template>
  <div class="integral-table-container">
    <div class="integral-table-top">
      <div class="top-create">
        <el-button type="primary" plain>创建</el-button>
      </div>
      <div class="top-form">
        <el-form>
          <el-form-item label="标题:">
            <el-input placeholder="请输入公告标题"></el-input>
            <el-button type="primary" plain>搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="integral-table-table">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">发布</el-button>
            <el-button type="text" size="small">修改</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="标题"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="通知范围">
        </el-table-column>
        <el-table-column
          prop="address"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="address"
          label="最后操作日期">
        </el-table-column>
      </el-table>
    </div>
    <div class="integral-table-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'integralTable',
    props: [],
    data () {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      };
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
