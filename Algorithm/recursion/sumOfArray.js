function sum(arr, endIndex) {
  let result = 0;
  if (endIndex < 0) return 0;
  if (endIndex === 0) return arr[0];
  result = arr[endIndex] + sum(arr, endIndex - 1);
  return result;
}
const arr = [1, 2, 3, 4, 5, 10, 25, -25];
console.log(sum(arr, arr.length - 1));
