/** @format */

// 9. 用預設值填滿空字串
// 輸入一個可能包含空字串的字串陣列 / 列表，以及一個預設值，你的函式能把陣列 / 列表中的空字串用預設值取代。

// 輸入範例一：["Hello", "World", ""]、以及預設值 "test"
// 回傳：["Hello", "World", "test"]

// 輸入範例二：["", "ok", ""]、以及預設值 "failed"
// 回傳：["failed", "ok", "failed"]

// 輸入範例一：["no empty"]、以及預設值 "word"
// 回傳：["no empty"]

/*
    @param words:{[String]}
    @param value:{String}
    @return :{[String]}
*/
function fill(words, value) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      words[i] = value;
    }
  }
  return words;
}
