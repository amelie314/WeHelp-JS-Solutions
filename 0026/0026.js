/** @format */

// 26. 檢查整數是否落在某個區間
// 輸入一個整數區間的最小值和最大值，以及要檢查的目標數，你的函式能判斷目標數是否落在最小值和最大值的中間，包含最小和最大值。

// 可以假設輸入的最大值一定大於最小值。

// 輸入範例：最小 5，最大 10，目標 8
// 回傳：真

// 輸入範例：最小 -5，最大 5，目標 -6
// 回傳：假

// 輸入範例：最小 2，最大 100，目標 2
// 回傳：真
/*

    @param min:{Integer}
    @param max:{Integer}
    @param target:{Integer}
    @return :{Boolean}
*/
function isInside(min, max, target) {
  return target >= min && max >= target;
}
