/**
 * @date     2018-11-09 10:52
 * @author   XXL
 * @describe 机构管理
 */

const router = [
  {
    path: 'notice',
    name: 'notice',
    component: () => import(/* webpackChunkName: "notice" */'../page/organizationalManagement/notice')
  }, {
    path: 'departmentManagement',
    name: 'departmentManagement',
    component: () => import(/* webpackChunkName: "notice" */'../page/organizationalManagement/departmentManagement')
  }, {
    path: 'personnelManagement',
    name: 'personnelManagement',
    component: () => import(/* webpackChunkName: "notice" */'../page/organizationalManagement/personnelManagement')
  }, {
    path: 'managementMethods',
    name: 'managementMethods',
    component: () => import(/* webpackChunkName: "notice" */'../page/organizationalManagement/managementMethods')
  }
];

export default router;
