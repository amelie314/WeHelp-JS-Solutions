/** @format */

// 42. 蛇形命名轉換為大駝峰命名
// 輸入一個包含小寫英數字和底線的字串，代表程式語言中常見的蛇形命名法，你的函式能將此字串轉換為另外一種常見的大駝峰命名法。

// 蛇形命名法：用底線隔開多個全小寫的英文單字。
// 大駝峰命名法：多個英文單字的第一個字母皆大寫。

// 輸入範例："test"
// 回傳："Test"

// 輸入範例："hello_world"
// 回傳："HelloWorld"

// 輸入範例："get_weather_data"
// 回傳："GetWeatherData"

/*
    @param name:{String}
    @return :{String}
*/
function snakeToUpperCamel(name) {
  let words = name.split("_");
  let result = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return result.join("");
}
