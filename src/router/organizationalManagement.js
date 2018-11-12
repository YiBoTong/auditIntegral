/**
 * @date     2018-11-09 10:52
 * @author   XXL
 * @describe 机构管理
 */

const router = [
  {
    path: 'notice',
    name: 'notice',
    component: () => import(/* webpackChunkName: "notice" */'../page/organizationalManagement/notice/index')
  }, {
    path: 'departmentManagement',
    name: 'departmentManagement',
    component: () => import(/* webpackChunkName: "notice" */'../page/organizationalManagement/departmentManagement/index')
  }, {
    path: 'personnelManagement',
    name: 'personnelManagement',
    component: () => import(/* webpackChunkName: "notice" */'../page/organizationalManagement/personnelManagement/index')
  }, {
    path: 'managementMethods',
    name: 'managementMethods',
    component: () => import(/* webpackChunkName: "notice" */'../page/organizationalManagement/managementMethods/index')
  }
];

export default router;
