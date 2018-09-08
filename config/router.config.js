export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/' },
      {
        path: '/dashboard',
        name: 'home',
        icon: 'table',
        routes: [{ path: '/dashboard', name: 'name', component: '/Dashboard/index.js' }],
      },
      {
        path: '/project',
        name: 'project',
        icon: 'table',
        routes: [
          { path: '/project/list', name: 'list', component: '/Project/list.js' },
          {
            hideInMenu: true,
            path: '/project/detail/:id',
            name: 'detail',
            component: '/Project/Detail.js',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
            ],
          },
        ],
      },
      {
        hideInMenu: true,
        name: 'result',
        path: '/result',
        routes: [
          // result
          { path: '/result/success', name: 'success', component: './Result/Success' },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
