// Spread operator
/**
 * Spread dùng để rải các phần tử vào một array hoặc object mới
 * Spread thì có thể xuất hiện ở bất cứ vị trí nào trong array hoặc object.
 * Spread thì thường xuất hiện khi sử dụng biến đã có sẵn
 */

/**
 * Rest dùng để gom các phần tử lại thành một array hoặc object
 * Rest dùng trong lúc khai báo biến
 * Rest thì xuất hiện ở vị trí cuối cùng của array hoặc object
 */

const wd18337 = ["Hoang", "Huy", "Hieu", "Hoa"];
const wd18338 = ["Chung", "Chi", "Minh"];
const classNew = wd18337.concat(wd18338);
const classNew2 = [...wd18337, "Thuy", ...wd18338, "Bao"];
console.log(classNew2);

function sum(...rest) {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum = sum + rest[i];
    console.log(rest[i]);
  }
  return sum;
  // return a + b;
}

console.log(sum(1, 2, 3));
// console.log("hello", "123", "456");
