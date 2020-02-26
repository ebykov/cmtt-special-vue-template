import axios from 'axios';

export default {
  example(data) {
    return axios
      .post('/path', data, {
        headers: {
          'X-This-Is-CSRF': 'THIS IS SPARTA!',
        },
      })
      .then((response) => response.data);
  },
};
