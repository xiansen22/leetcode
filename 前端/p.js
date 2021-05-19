const promise = new Promise((resolve, reject) => {
  reject(1);
});

promise.then(res => {
  console.log(res, 333);
}, error => {
  console.log(error, 'sgsg');
})

