/** @format */

// 32. 基礎四則運算
// 輸入兩個整數，以及一個字串代表要做的運算是加、減、乘、除中的哪一個，計算並回傳運算的結果。

// 輸入的字串可能是 + - * / 的其中一個符號，分別代表加、減、乘、除的運算。其中除法的結果，使用無條件捨去取整數。

// 輸入範例：3、2、"+"
// 回傳：5

// 輸入範例：10、3、"/"
// 回傳：3

// 輸入範例：-6、8、"/"
// 回傳：-1

// 輸入範例：-5、2、"*"
// 回傳：-10

/*
    @param n1:{Integer}
    @param n2:{Integer}
    @param op:{String}
    @return :{Integer}
*/
function calculate(n1, n2, op) {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return Math.floor(n1 / n2);
  }
}
