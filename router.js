import Vue from 'vue';
import Router from 'vue-router';

import {
  extendRoutes,
} from '~/.nuxt/routerHelper.modules';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    routes: extendRoutes(),
  });
}
