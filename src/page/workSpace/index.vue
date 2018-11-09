<!--
****--@date     2018-11-08 13:31
****--@author   XXL
****--@describe 工作台
-->
<template>
  <div class="homo-page-container">
    <div class="home-page-header">
      <el-row :gutter="20">
        <el-col>
          <el-card class="home-page-card">
            <img src="">
            <div class="card-content">
              <span class="header-number-font-size">0</span>
              <span class="header-title-font-size">我的积分</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="home-page-card">
            <img src="">
            <div class="card-content">
              <span class="header-number-font-size">0</span>
              <span class="header-title-font-size">违规行为</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="home-page-card">
            <img src="">
            <div class="card-content">
              <span class="header-number-font-size">0</span>
              <span class="header-title-font-size">确认书</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="home-page-card">
            <img src="">
            <div class="card-content">
              <span class="header-number-font-size">0</span>
              <span class="header-title-font-size">惩罚通知书</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="home-page-content">
      <div class="content-top">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>通知公告</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
              </div>
              <el-table
                :data="informData">
                <el-table-column
                  prop="title"
                  label="标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="发布者"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期">
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>通知公告</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
              </div>
              <el-table
                :data="informData">
                <el-table-column
                  prop="title"
                  label="标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="发布者"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期">
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="content-bottom">
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>通知公告</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
              </div>
              <el-table
                :data="informData">
                <el-table-column
                  prop="title"
                  label="标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="发布者"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期">
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'workSpace',
    props: [],
    data () {
      return {
        informData: [
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
