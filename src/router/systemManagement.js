/**
 * @date     2018-11-09 17:48
 * @author   XXL
 * @describe 系统管理路由
 */

const router = [
  {
    path: 'dictionaryManagement',
    name: 'dictionaryManagement',
    component: () => import(/* webpackChunkName: "notice" */'../page/systemManagement/dictionaryManagement/index')
  }, {
    path: 'loginManagement',
    name: 'loginManagement',
    component: () => import(/* webpackChunkName: "notice" */'../page/systemManagement/loginManagement/index')
  }, {
    path: 'systemLog',
    name: 'systemLog',
    component: () => import(/* webpackChunkName: "notice" */'../page/systemManagement/systemLog/index')
  }];

export default router;
