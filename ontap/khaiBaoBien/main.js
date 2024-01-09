// var a;
// console.log(a);
// {
//   var a = "hoang";
//   var a = "tiến bịp";
//   a = "ngo ba kha";
//   console.log(a);
// }
// var a; a ="hoang"

/**
 * var = variant
 * 1. Hoisting = Hành vi khai báo được đưa lên đầu scope.
 * 2. Global scope = biến khai báo bằng var có phạm vi toàn cục.
 * 3. var có thể khai báo lại nhiều lần
 * 4. Khai báo với var có thể assign được.
 */

// function sum(a, b) {
//   let b = 10;
//   let a = 20;
//   return a + b;
// }
// console.log(b);
// let myName = "hoang";
// let myName = "Nguyen"
/**
 * let
 * 1. let không hoisting
 * 2. khai báo biến bằng let thì có phạm vi hoạt động là block scope và function scope
 * 3. Không thể khai báo lại
 * 4. Được phép gán lại.
 */

/**
 * const = constant
 * 1. const không hoisting
 * 2. khai báo biến bằng const thì có phạm vi hoạt động là block scope và function scope
 * 3. Không thể khai báo lại
 * 4. Const không gán lại được.
 */

let cuongQuoc = "Vietnam";
cuongQuoc = "My";

// global = toan cuc

function tyGia(sotienUSA) {
  let tygia = 25000;
  return sotienUSA * tygia;
}

// console.log(tygia);

if (3 > 2) {
  const loiChao = "hello";
  console.log("3 thi lon hon 2");
}

console.log(loiChao);

// "strict mode"
