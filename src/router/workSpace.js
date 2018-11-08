/**
 * @date     2018-11-08 13:30
 * @author   XXL
 * @describe 工作区间
 */

const router = {
  path: 'workSpace',
  name: 'workSpace',
  component: () => import(/* webpackChunkName: "workSpace" */'../page/workSpace/index')
};

export default router;
