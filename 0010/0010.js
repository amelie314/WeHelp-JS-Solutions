/** @format */

// 10. 用前一個有效值填滿空字串
// 輸入一個可能包含空字串的字串陣列 / 列表，你的函式能把陣列 / 列表中的空字串用前一個有效值 ( 非空字串 ) 取代。若沒有前一個有效值，則保持空字串不變。

// 輸入範例一：["", "a", "", "", "c"]
// 回傳：["", "a", "a", "a", "c"]

// 輸入範例二：["a", "b", "", "c", ""]
// 回傳：["a", "b", "b", "c", "c"]

// 輸入範例一：["", "", "a"]
// 回傳：["", "", "a"]

/*
    @param words:{[String]}
    @return :{[String]}
*/
function ffill(words) {
  let lastValue = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      words[i] = lastValue;
    } else {
      lastValue = words[i];
    }
  }
  return words;
}
