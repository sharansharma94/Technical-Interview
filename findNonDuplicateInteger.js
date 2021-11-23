/*
You are given an array of integers where every integer occurs three times except for one integer, which only occurs once. Find and return the non-duplicated integer.

Input - [6, 1, 3, 3, 3, 6, 6]

Output - 1

Input - [13, 19, 13, 13]

Output - 19

Do this in O(N) time and O(1) space.
*/

//Solving for integer which occurs twice except one

const input = [6, 1, 3, 3, 6, 7, 7, 9, 9, 9, 9, 1];

function findNonDuplicateInteger(input) {
  let nonDup = input[0];
  for (let i = 1; i < input.length; i++) {
    nonDup = nonDup ^ input[i];
  }
  console.log(nonDup);
}

findNonDuplicateInteger(input);

function covertToBin(numb) {
  return (numb >>> 0).toString(2);
}

function binToDec(num) {
  return num.toString(10);
}

function findNonDuplicateInteger(input) {
  const allCombinedBits = new Array(32).fill(0);

  //O(n)
  for (let number of input) {
    const binary = covertToBin(number);
    //O(1) 32 bits

    console.log(binary);
    for (
      let i = allCombinedBits.length - binary.length;
      i < allCombinedBits.length;
      i++
    ) {
      allCombinedBits[i] = (parseInt(binary[i]) + allCombinedBits[i]) % 3;
      console.log(binToDec(allCombinedBits.join("")));
    }
  }
}

findNonDuplicateInteger(input);
