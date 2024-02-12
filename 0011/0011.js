/** @format */

// 11. 找到目標數字所在的索引位置
// 輸入一個整數陣列 / 列表和要找的目標數字，你的函式能找到並回傳目標數字所在的索引位置。

// 若該數字不存在於陣列 / 列表中，回傳 -1；若該數字重複出現多次，以第一個出現的位置為準。

// 輸入範例一：[3, 2, 1, 5, 10]、目標數字 1
// 回傳：2

// 輸入範例二：[5, 2, 3]、目標數字 4
// 回傳：-1

// 輸入範例一：[-5, 2, -5, 1, 3]，目標數字 -5
// 回傳：0

/*
    @param nums:{[Integer]}
    @param target:{Integer}
    @return :{Integer}
*/
function findIndex(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}
