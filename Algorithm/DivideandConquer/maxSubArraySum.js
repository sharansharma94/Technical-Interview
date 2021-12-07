const testcases = require("./testcase.js");

const maxSubArray = function (array) {
  if (array.length < 1) return;
  if (array.length === 1) return array[0];
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    let sum = 0;
    for (let j = index; j < array.length; j++) {
      sum = sum + array[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

for (let testcase of testcases) {
  console.log(maxSubArray(testcase));
}
