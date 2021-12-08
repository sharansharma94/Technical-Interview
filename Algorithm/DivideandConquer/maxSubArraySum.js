const testcases = require("./testcase.js");
//n^2
const maxSubArrayWorst = function (array) {
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

//O(n log n)
const findMidCrossMax = (array, start, end, mid) => {
  let leftMax = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let index = mid; index >= start; index--) {
    sum += array[index];
    if (sum > leftMax) leftMax = sum;
  }

  let rightMax = Number.NEGATIVE_INFINITY;
  sum = 0;
  for (let index = mid + 1; index <= end; index++) {
    sum += array[index];
    if (sum > rightMax) rightMax = sum;
  }

  return leftMax + rightMax;
};

const findMaxSumRecurs = (array, start, end) => {
  //base case
  if (start === end) return array[start];

  const mid = Math.floor((end + start) / 2);
  // calculate left maximun
  const leftMax = findMaxSumRecurs(array, start, mid);
  // calculate right max
  const rightMax = findMaxSumRecurs(array, mid + 1, end);
  //  calculate both max
  const crossMax = findMidCrossMax(array, start, end, mid);

  if (leftMax >= rightMax && leftMax >= crossMax) {
    return leftMax;
  } else if (rightMax >= leftMax && rightMax >= crossMax) {
    return rightMax;
  } else return crossMax;
};

const maxSubArray = function (array) {
  return findMaxSumRecurs(array, 0, array.length - 1);
};

const maxSubArrayBest = (array) => {
  let currentMaxSubArray = 0;
  let maxSubArray = Number.MIN_SAFE_INTEGER;
  for (let index = 0; index < array.length; index++) {
    currentMaxSubArray += array[index];
    if (maxSubArray < currentMaxSubArray) {
      maxSubArray = currentMaxSubArray;
    }

    if (currentMaxSubArray < 0) currentMaxSubArray = 0;
  }
  return maxSubArray;
};

for (let testcase of testcases) {
  console.log(maxSubArrayBest(testcase));
  // console.log(maxSubArray(testcase));
  // console.log(maxSubArrayWorst(testcase));
}
