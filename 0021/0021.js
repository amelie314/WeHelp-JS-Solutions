/** @format */

// 21. 最大連續 0 的數量
// 輸入一個只包含 0 和 1 的陣列 / 列表，你的函式要找出並回傳最大連續 0 的數量。

// 輸入範例二：[1, 1, 1]
// 回傳：0

// 輸入範例一：[0, 0, 0, 0, 1, 0]
// 回傳：4

// 輸入範例一：[0, 1, 0, 0, 0, 1, 0, 1]
// 回傳：3

/*
    @param nums:{[Integer]}
    @return :{Integer}
*/
function findMaxZero(nums) {
  let currentNumber = 0;
  let maxNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      currentNumber += 1;
      maxNumber = Math.max(currentNumber, maxNumber);
    } else {
      currentNumber = 0;
    }
  }
  return maxNumber;
}
