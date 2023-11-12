// const { plus } = require('./calc');
import * as calc from './calc.mjs';
console.log(calc);

// const result = minusFn(1, 2);
const result = calc.plus(1, 2);
console.log(result);
