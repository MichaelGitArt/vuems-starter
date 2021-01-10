import {
  nuxtServerInit,
} from '@Core/store/initial';

export const actions = {
  async nuxtServerInit(ctx) {
    await nuxtServerInit.call(this, ctx);
  },
};
