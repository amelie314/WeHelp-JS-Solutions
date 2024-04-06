/** @format */

// 24. Stack 堆疊的基本操作
// Stack 堆疊是一種基礎資料結構，我們使用陣列 / 列表來實作時，定義 Push 操作，代表將資料放到陣列 / 列表的尾巴；定義 Pop 操作，代表將資料從陣列 / 列表的尾巴取出。

// 輸入一個逗號隔開的字串，每個欄位代表一個操作，若是 Push 操作，會空一格後表示要操作的整數資料。你的函式必須使用陣列 / 列表實作一個 Stack，回傳經過輸入的操作之後產生的最終結果。

// 請注意最後放進 Stack 中的資料是整數的型態。

// 輸入範例："push 5,push 4,pop"
// 回傳：[5]

// 輸入範例："pop,push 1,push -3,push 5,pop,push 10"
// 回傳：[1, -3, 10]

// 輸入範例："push 3,push -2,pop,pop,pop"
// 回傳：[]
/*
    @param ops:{String}
    @return :{Integer[]}
*/
function processStackOperations(ops) {
  const stack = [];
  const operations = ops.split(",");

  operations.forEach((op) => {
    // 將每個操作分割成操作類型和值
    const [action, value] = op.split(" ");
    switch (action) {
      case "push":
        // 將數字添加到堆疊的末尾
        stack.push(parseInt(value, 10));
        break;
      case "pop":
        // 從堆疊的末尾移除一個元素
        stack.pop();
        break;
    }
  });
  return stack;
}
