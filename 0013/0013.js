/** @format */

// 13. 翻轉一個字串
// 輸入一個字串，你的函式能夠翻轉這個字串。

// 輸入範例一：Hello
// 回傳：olleH

// 輸入範例二：abcd
// 回傳：dcba

// 輸入範例一：Good Job
// 回傳：boJ dooG

/*
    @param s:{String}
    @return :{String}
*/
function reverseString(s) {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}
