/** @format */

// 17. 質數測試
// 輸入一個正整數，若輸入的正整數是質數，回傳真；否則，回傳假。

// 質數定義：在大於 1 的正整數中，除了 1 和該數自身外，無法被其他正整數整除的數。1 本身非質數。

// 輸入範例：1
// 回傳：假

// 輸入範例：2
// 回傳：真

// 輸入範例：75
// 回傳：假

/*
    @param n:{Integer}
    @return :{Boolean}
*/
function checkPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
