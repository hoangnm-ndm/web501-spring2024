/**
 * Cac loai function
 */

// named function
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));

// anonymous function
setTimeout(function () {
  console.log("hello");
}, 3000);

// expression function
const loiChao = function () {
  console.log("hello");
};

// arrow function
const tinhTong = (a, b) => {
  return a + b;
};
// arrow function: viet rut gon
const tinhTong1 = (a, b) => a + b;

const returnObj = () => {
  name: "Hoang",
  age: 18
}
