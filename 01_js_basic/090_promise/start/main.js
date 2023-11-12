let a = 0;

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
    // reject(a);
  }, 1000)
}).then((b) => {
  console.log(b);
  return b;
}).then((b) => {
  console.log(b);
}).catch((c) => {
  console.log("catch", c)
})
