/**
 * @date     2018-11-09 17:49
 * @author   XXL
 * @describe 稽核管理路由
 */

const router = [
  {
    path: 'workManuscript',
    name: 'workManuscript',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/workManuscript/index')
  }, {
    path: 'confirmation',
    name: 'confirmation',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/confirmation/index')
  }, {
    path: 'punishNotice',
    name: 'punishNotice',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/punishNotice/index')
  }, {
    path: 'integralTable',
    name: 'integralTable',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/integralTable/index')
  }, {
    path: 'statisticalAnalysis',
    name: 'statisticalAnalysis',
    component: () => import(/* webpackChunkName: "notice" */'../page/auditManagement/statisticalAnalysis/index')
  }
];

export default router;
