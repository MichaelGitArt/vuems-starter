import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const IS_DEV = process.env.NODE_ENV !== 'production';
const BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000';
const PORT = process.env.PORT || 80;

export default {
  ssr: true,
  dev: IS_DEV,
  head: {
    title: 'card-microfrontend',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        contaent: 'width=device-width, initial-scale=1',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  server: {
    port: PORT,
  },

  components: true,

  buildModules: [
    '@nuxtjs/router',
  ],

  modules: [
    '@ergonode/vuems',
    '@nuxtjs/axios',
  ],

  vuems: {
    vuex: true,
    modules: {
      local: [
        'core',
        'ui',
      ],
    },
  },

  axios: {
    baseURL: BASE_URL || 'http://localhost:8000',
  },

  build: {},
};
