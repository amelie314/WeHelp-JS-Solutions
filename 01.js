/** @format */

// 1. 檢查字串是否以 https:// 開頭
// 輸入一個字串，你的函式能檢查該字串是否以 https:// 開頭，不考慮大小寫。若是以 https:// 開頭，回傳真值，否則回傳假值。

// 輸入範例一：https://test.com/
// 回傳：真

// 輸入範例二：test.com
// 回傳：假

// 輸入範例一：HTTPs://test.com/
// 回傳：真

/*
    @param s:{String}
    @return :{Boolean}
*/
function checkHTTPS(s) {
  return s.LowerCase().startsWith("https://");
}
