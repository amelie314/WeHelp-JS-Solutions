/** @format */

// 36. 找出不一樣的資料
// 輸入一個至少有三筆資料的整數陣列 / 列表，其中包含唯一一個和其他所有資料不同的整數。你的函式能找出並回傳這個整數所在的索引位置。

// 輸入範例：[5, 5, 0]
// 回傳：2

// 輸入範例：[1, 2, 1, 1, 1]
// 回傳：1

// 輸入範例：[-5, 8, 8, 8]
// 回傳：0

/*
    @param ns:{[Integer]}
    @return :{Integer}
*/
function findUnique(ns) {
  for (let i = 0; i < ns.length; i++) {
    let isNuique = true;
    for (let j = 0; j < ns.length; j++) {
      if (i !== j && ns[i] === ns[j]) {
        isNuique = false;
        break;
      }
    }
    if (isNuique) {
      return i;
    }
  }
}
