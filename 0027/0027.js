/** @format */

// 27. 檢查兩個區間是否重疊
// 輸入兩個陣列 / 列表，分別代表兩個整數區間的最小值和最大值 [min1, max1] 和 [min2, max2]，你的函式能判斷兩個整數區間是否重疊，包含最小或最大值落在同一個整數的狀況。

// 可以假設每個區間的最大值一定大於最小值。

// 輸入範例：[5, 10]，[9, 11]
// 回傳：真

// 輸入範例：[-5, 5]，[8, 10]
// 回傳：假

// 輸入範例：[-5, 5]，[-6, -5]
// 回傳：真

/*
    @param range1:{[Integer]}
    @param range2:{[Integer]}
    @return :{Boolean}
*/
function isOverlapping(range1, range2) {
  const [min1, max1] = range1;
  const [min2, max2] = range2;
  // 判斷區間是否重疊
  if (max1 >= min2 && min1 <= max2) {
    return true;
  }
  return false;
}
