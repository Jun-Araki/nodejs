function fn(number) {
  return number * 2;
}

console.log(fn(3));
console.log(fn(2));

const fnArrow = number => {
  console.log(number);
  return number * 2;
}

fnArrow(9)

const fnArrowObj = number => ({ result: number * 2})

console.log(fnArrowObj(2))
