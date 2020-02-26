const fetch = (mockData, time = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: mockData,
      rc: 200,
      rm: '',
    });
  }, time);
});

export default {
  example() {
    return fetch([], 500);
  },
};
