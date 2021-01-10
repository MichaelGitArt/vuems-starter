import {
  Pages,
} from './imports';

export const ROUTE_NAME = {
  HOME: 'home',
};

export default [
  {
    name: ROUTE_NAME.HOME,
    path: '/',
    component: Pages.Home,
  },
];
