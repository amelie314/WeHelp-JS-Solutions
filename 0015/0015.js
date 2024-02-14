/** @format */

// 15. 檢查輸入的密碼是否合乎規範
// 輸入一個字串代表密碼，你的函式能檢查輸入的字串是否合乎以下規範：

// 只能包含大小寫英文字母、數字、以及以下特殊符號 ! @ # $ %
// 至少要包含一個大寫和一個小寫字母
// 至少要包含一個數字
// 至少要包含一個特殊符號
// 必須大於等於 8 個字元、小於等於 16 個字元。
// 若輸入的密碼符合規範，回傳真值，不符合規範，則回傳假值。

// 輸入範例一：abcD
// 回傳：假

// 輸入範例二：aBcdefg8$
// 回傳：真

// 輸入範例一：12345678
// 回傳：假

/*
    @param s:{String}
    @return :{Boolean}
*/
function checkPassword(s) {
  if (s.length > 16 || s.length < 8) {
    return false;
  }
  const hasUpperCase = /[A-Z]/.test(s);
  const hasLowerCase = /[a-z]/.test(s);
  const hasNumber = /[0-9]/.test(s);
  const hasSpecialChar = /[!@#$%]/.test(s);
  const isValidChar = /^[A-Za-z0-9!@#$%]+$/.test(s);

  return (
    hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidChar
  );
}
