<!--
****--@date     2018-11-08 13:31
****--@author   XXL
****--@describe 工作台
-->
<template>
  <div class="homo-page-container">
    <div class="home-page-header">
      <el-row :gutter="20">
        <el-col class="col-1">
          <el-card class="home-page-card">
            <img src="">
            <div class="card-content">
              <span class="header-number-font-size">0</span>
              <span class="header-title-font-size">我的积分</span>
            </div>
          </el-card>
        </el-col>
        <el-col class="col-2">
          <el-card class="home-page-card">
            <img src="">
            <div class="card-content">
              <span class="header-number-font-size">0</span>
              <span class="header-title-font-size">违规行为</span>
            </div>
          </el-card>
        </el-col>
        <el-col class="col-3">
          <el-card class="home-page-card">
            <img src="">
            <div class="card-content">
              <span class="header-number-font-size">0</span>
              <span class="header-title-font-size">确认书</span>
            </div>
          </el-card>
        </el-col>
        <el-col class="col-4">
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
                :data="noticeTableData">
                <el-table-column
                  prop="title"
                  label="标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="publisher"
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
                <span>回执项目</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
              </div>
              <el-table
                :data="returnItemTableData">
                <el-table-column
                  prop="title"
                  label="标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="inspectionDepartmentsOrOutlets"
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
                <span>积分列表</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
              </div>
              <el-table
                :data="integralListTableData">
                <el-table-column
                  label="序号"
                  type="index"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="item"
                  label="项目"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="numberOfViolations"
                  label="违规数量"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="numberOfViolations"
                  label="扣分数"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="numberOfViolations"
                  label="累计积分"
                  width="150">
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
  import Axios from 'axios';

  export default {
    name: 'workSpace',
    props: [],
    data () {
      return {
        noticeTableData: undefined,
        returnItemTableData: undefined,
        integralListTableData: undefined
      };
    },
    methods: {
      // 初始化
      init () {
        Axios.get('../../static/mock/tableData.json').then(this.getTableData);
      },
      // 获取tables数据
      getTableData (res) {
        this.noticeTableData = res.data.noticeTableData;
        this.returnItemTableData = res.data.returnItemTableData;
        this.integralListTableData = res.data.integralListTableData;
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
