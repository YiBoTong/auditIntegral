/**
 * @date     2018-11-09 17:49
 * @author   XXL
 * @describe 稽核管理路由
 */

const router = [
  {
    path: 'workManuscript',
    name: 'workManuscript',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/workManuscript')
  }, {
    path: 'confirmation',
    name: 'confirmation',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/confirmation')
  }, {
    path: 'punishNotice',
    name: 'punishNotice',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/punishNotice')
  }, {
    path: 'integralTable',
    name: 'integralTable',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/integralTable')
  }, {
    path: 'statisticalAnalysis',
    name: 'statisticalAnalysis',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/statisticalAnalysis')
  }
];

export default router;
