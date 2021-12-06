const bruteForce = (input) => {
  let MaxSum = 0;
  let start = 0,
    end = 0;
  for (let i = 0; i < input.length; i++) {
    const purchaseAt = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const profit = input[j] - purchaseAt;
      if (profit > MaxSum) {
        MaxSum = profit;
        start = i;
        end = j;
      }
    }
  }
  return { MaxSum, start, end };
};

// const input = [0, 13, -5, 25, -10, -11, 2];
const input = [
  13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
];

console.log(bruteForce(input));
