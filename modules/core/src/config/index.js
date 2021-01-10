export default {
  name: 'core',
  order: 10,
  aliases: {
    '@Core': '/',
  },
  plugins: [
    {
      ssr: true,
      src: './plugins/axios',
    },
  ],
};
