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
      { path: '/', redirect: '/project/list' },
      {
        path: '/project',
        name: 'project',
        icon: 'table',
        routes: [
          { path: '/project/list', name: 'list', component: '/Project/list.js' },
          {
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
        component: '404',
      },
    ],
  },
];
