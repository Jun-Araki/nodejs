// 三項演算子（ ? : ）

const a = 0;
let resultA = a ? "true" : "false";

if(a) {
  resultA = "true";
} else {
  resultA = "false";
}

console.log(resultA);

function getResult() {
  return a ? "true111" : "false111";
}

console.log(getResult());
