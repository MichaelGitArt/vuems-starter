export const Pages = {
  Home: () => import('@Core/pages/Home').then(m => m.default || m),
};
