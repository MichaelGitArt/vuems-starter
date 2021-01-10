export default function ({
  $axios,
}, inject) {
  const axios = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    validateStatus() {
      return true;
    },
  });

  inject('axios', axios);
}
