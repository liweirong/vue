import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }

 /*   // 仪表盘
    {
      path: 'dashboard',
      name: 'dashboard',
      component: resolve => {
        require(['@/views/dashboard/dashboard.vue'], resolve);
      },
      meta: {
        query: {
          dbType: '',  // 数据库类型
          connectStatus: 0, // 连接状态
          dbAlias: '',  // 标签
          dbConfigIp: '', // 数据库IP
          page: 1,
          size: 10,
          isUpdate: 1,}
        }
      }*/

  ]
})
