function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

console.log(exports === module.exports)
module.exports = {
  plus,
  minus
};
