import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/guia-diabetes',
    name: 'GuiaDiabetes',
    component: () => import('../pages/GuiaDiabetes.vue'),
    meta: {
      breadcrumbs: [
        {
          text: 'Home',
          route: '/',
        },
        {
          text: 'Guia Diabetes Mellitus',
        },
      ],
    },
  },
  {
    path: '/guia-hipertensao',
    name: 'GuiaHipertensao',
    component: () => import('../pages/GuiaHipertensao.vue'),
    meta: {
      breadcrumbs: [
        {
          text: 'Home',
          route: '/',
        },
        {
          text: 'Guia Hipertensão Arterial',
        },
      ],
    },
  },
];

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});