/** @format */

// 12. 找到目標數字所在的多個索引位置
// 輸入一個整數陣列 / 列表和要找的目標數字，你的函式能找到並回傳目標數字所在的零到多個索引位置。

// 回傳包含多個索引位置的陣列 / 列表，由小到大排列，若目標數字不存在於陣列 / 列表中，回傳空陣列 / 空列表。

// 輸入範例一：[3, 2, 1, 5, 10]、目標數字 1
// 回傳：[2]

// 輸入範例二：[5, 2, 3]、目標數字 4
// 回傳：[]

// 輸入範例一：[-5, 2, -5, 1, -5]，目標數字 -5
// 回傳：[0, 2, 4]

/*
    @param nums:{[Integer]}
    @param target:{Integer}
    @return :{[Integer]}
*/
function findIndexes(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }
  return result;
}
